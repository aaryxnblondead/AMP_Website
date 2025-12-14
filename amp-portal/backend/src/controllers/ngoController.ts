import { Request, Response } from 'express';
import { NGOService } from '../services/ngoService';

export class NGOController {
  static async register(req: Request, res: Response) {
    try {
      const userId = req.auth!.userId;
      const ngo = await NGOService.registerNGO(userId, req.body);
      res.status(201).json({ success: true, message: 'NGO registered', data: ngo });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message || 'NGO registration failed' });
    }
  }

  static async search(req: Request, res: Response) {
    try {
      const { state, district, name, page, limit } = req.query as any;
      const result = await NGOService.searchNGOs({
        state,
        district,
        name,
        page: page ? parseInt(page) : undefined,
        limit: limit ? parseInt(limit) : undefined,
      });
      res.json({
        success: true,
        message: 'Data retrieved',
        data: {
          items: result.ngos,
          pagination: {
            page: result.page,
            limit: result.limit,
            total: result.total,
            pages: Math.ceil(result.total / result.limit),
          },
        },
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Failed to search NGOs' });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const ngo = await NGOService.getNGOById(id);
      if (!ngo) return res.status(404).json({ success: false, message: 'NGO not found' });
      res.json({ success: true, message: 'NGO retrieved', data: ngo });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Failed to retrieve NGO' });
    }
  }

  static async submitActivity(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const activity = await NGOService.submitActivity(id, req.body);
      res.status(201).json({ success: true, message: 'Activity submitted', data: activity });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message || 'Activity submission failed' });
    }
  }

  static async dashboard(req: Request, res: Response) {
    try {
      const userId = req.auth!.userId;
      const dashboard = await NGOService.getNGODashboard(userId);
      if (!dashboard) return res.status(404).json({ success: false, message: 'NGO not found for user' });
      res.json({ success: true, message: 'Dashboard retrieved', data: dashboard });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Failed to get dashboard' });
    }
  }
}
