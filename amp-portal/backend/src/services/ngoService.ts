import { query } from '../config/database';
import { NGO, Activity } from '../types';

export class NGOService {
  static async registerNGO(
    userId: number,
    data: {
      ngo_name: string;
      registration_id?: string;
      year_incorporated?: number;
      president_name?: string;
      secretary_name?: string;
      email: string;
      phone?: string;
      website?: string;
      description: string;
      state: string;
      district: string;
      address?: string;
    }
  ): Promise<NGO> {
    const sql = `
      INSERT INTO ngos (
        user_id, ngo_name, registration_id, year_incorporated, president_name, secretary_name,
        email, phone, website, description, state, district, address, status, beneficiaries_reached
      ) VALUES (
        $1, $2, $3, $4, $5, $6,
        $7, $8, $9, $10, $11, $12, $13, 'PENDING', 0
      )
      RETURNING *
    `;
    const params = [
      userId,
      data.ngo_name,
      data.registration_id || null,
      data.year_incorporated || null,
      data.president_name || null,
      data.secretary_name || null,
      data.email,
      data.phone || null,
      data.website || null,
      data.description,
      data.state,
      data.district,
      data.address || null,
    ];
    const result = await query(sql, params);
    return result.rows[0] as NGO;
  }

  static async getNGOById(ngoId: number): Promise<NGO | null> {
    const result = await query('SELECT * FROM ngos WHERE id = $1', [ngoId]);
    return result.rows[0] || null;
  }

  static async searchNGOs(filters: {
    state?: string;
    district?: string;
    name?: string;
    verified?: boolean;
    page?: number;
    limit?: number;
  }): Promise<{ ngos: NGO[]; total: number; page: number; limit: number }> {
    const page = Math.max(1, filters.page || 1);
    const limit = Math.min(100, Math.max(1, filters.limit || 20));
    const offset = (page - 1) * limit;

    const where: string[] = [];
    const params: any[] = [];

    where.push("status = 'VERIFIED'");

    if (filters.state) {
      params.push(filters.state + '%');
      where.push(`state ILIKE $${params.length}`);
    }
    if (filters.district) {
      params.push(filters.district + '%');
      where.push(`district ILIKE $${params.length}`);
    }
    if (filters.name) {
      params.push(filters.name.toLowerCase() + '%');
      where.push(`LOWER(ngo_name) LIKE $${params.length}`);
    }

    const whereSql = where.length ? `WHERE ${where.join(' AND ')}` : '';

    const listSql = `
      SELECT * FROM ngos
      ${whereSql}
      ORDER BY beneficiaries_reached DESC
      LIMIT $${params.length + 1} OFFSET $${params.length + 2}
    `;
    const countSql = `SELECT COUNT(*)::int as total FROM ngos ${whereSql}`;

    const listParams = [...params, limit, offset];

    const [listRes, countRes] = await Promise.all([
      query(listSql, listParams),
      query(countSql, params),
    ]);

    return { ngos: listRes.rows as NGO[], total: countRes.rows[0].total, page, limit };
  }

  static async submitActivity(
    ngoId: number,
    payload: {
      activity_title: string;
      activity_date: string; // ISO date
      description: string;
      direct_beneficiaries: number;
      location: string;
      volunteers_involved: number;
      key_outcomes: string;
      media_urls?: string[];
    }
  ): Promise<Activity> {
    const sql = `
      INSERT INTO activities (
        ngo_id, activity_title, activity_date, description,
        direct_beneficiaries, location, volunteers_involved, key_outcomes, media_urls
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
    `;
    const result = await query(sql, [
      ngoId,
      payload.activity_title,
      payload.activity_date,
      payload.description,
      payload.direct_beneficiaries,
      payload.location,
      payload.volunteers_involved,
      payload.key_outcomes,
      JSON.stringify(payload.media_urls || []),
    ]);
    return result.rows[0] as Activity;
  }

  static async getNGODashboard(userId: number): Promise<any> {
    // Aggregate example: NGO info + counts of projects/activities + beneficiaries
    const ngoRes = await query('SELECT * FROM ngos WHERE user_id = $1', [userId]);
    const ngo = ngoRes.rows[0];
    if (!ngo) return null;

    const [projCount, actCount, benSum] = await Promise.all([
      query('SELECT COUNT(*)::int as count FROM projects WHERE ngo_id = $1', [ngo.id]),
      query('SELECT COUNT(*)::int as count FROM activities WHERE ngo_id = $1', [ngo.id]),
      query('SELECT COALESCE(SUM(direct_beneficiaries),0)::int as total FROM activities WHERE ngo_id = $1', [ngo.id]),
    ]);

    return {
      ngo,
      metrics: {
        projects: projCount.rows[0].count,
        activities: actCount.rows[0].count,
        beneficiaries: benSum.rows[0].total,
      },
    };
  }
}
