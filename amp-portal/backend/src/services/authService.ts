import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { query } from '../config/database';
import { User, AuthPayload } from '../types';
import { env } from '../config/env';

const SALT_ROUNDS = 10;

export class AuthService {
  // Registers a new user. Enforces unique email and hashes password.
  static async registerUser(
    email: string,
    password: string,
    fullName: string,
    userType: 'NGO' | 'VOLUNTEER' | 'DONOR' | 'ADMIN',
    phone?: string
  ): Promise<User> {
    const existing = await query('SELECT id FROM users WHERE email = $1', [email]);
    if (existing.rowCount && existing.rowCount > 0) {
      throw { code: '23505', message: 'Email already exists' }; // triggers DB error handler semantics
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const insertSql = `
      INSERT INTO users (email, password_hash, full_name, phone, user_type, is_verified)
      VALUES ($1, $2, $3, $4, $5, false)
      RETURNING id, email, password_hash, full_name, phone, user_type, is_verified, created_at
    `;
    const result = await query(insertSql, [email, passwordHash, fullName, phone || null, userType]);
    return result.rows[0] as User;
  }

  // Logs in a user by verifying credentials and returning a JWT access token.
  static async loginUser(email: string, password: string): Promise<{ user: User; token: string; refreshToken: string }> {
    const res = await query('SELECT * FROM users WHERE email = $1', [email]);
    if (res.rowCount === 0) {
      throw new Error('Invalid credentials');
    }
    const user = res.rows[0] as User;
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, userType: user.user_type },
      env.jwtSecret as jwt.Secret,
      { expiresIn: env.jwtExpiry as jwt.SignOptions['expiresIn'] }
    );
    const refreshToken = jwt.sign(
      { userId: user.id },
      env.refreshSecret as jwt.Secret,
      { expiresIn: env.refreshExpiry as jwt.SignOptions['expiresIn'] }
    );

    return { user, token, refreshToken };
  }

  static verifyToken(token: string): AuthPayload {
    const decoded = jwt.verify(token, env.jwtSecret as jwt.Secret) as AuthPayload;
    return decoded;
  }

  static async updatePassword(userId: number, newPassword: string): Promise<void> {
    const passwordHash = await bcrypt.hash(newPassword, SALT_ROUNDS);
    await query('UPDATE users SET password_hash = $1, updated_at = NOW() WHERE id = $2', [passwordHash, userId]);
  }
}
