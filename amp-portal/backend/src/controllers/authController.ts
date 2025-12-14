import { Request, Response } from 'express';
import { AuthService } from '../services/authService';
import { ApiResponse } from '../types';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { email, password, fullName, userType, phone } = req.body;
      const user = await AuthService.registerUser(email, password, fullName, userType, phone);
      const response: ApiResponse<any> = {
        success: true,
        message: 'Registration successful',
        data: { id: user.id, email: user.email, full_name: user.full_name, user_type: user.user_type },
      };
      res.status(201).json(response);
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message || 'Registration failed' });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { user, token, refreshToken } = await AuthService.loginUser(email, password);
      const response: ApiResponse<any> = {
        success: true,
        message: 'Login successful',
        data: {
          token,
          refreshToken,
          user: { id: user.id, email: user.email, full_name: user.full_name, user_type: user.user_type },
        },
      };
      res.json(response);
    } catch (error: any) {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  }

  static async refresh(req: Request, res: Response) {
    try {
      const { refreshToken } = req.body;
      const decoded = jwt.verify(refreshToken, env.refreshSecret as jwt.Secret) as any;
      const newAccessToken = jwt.sign(
        { userId: decoded.userId },
        env.jwtSecret as jwt.Secret,
        { expiresIn: env.jwtExpiry as jwt.SignOptions['expiresIn'] }
      );
      res.json({ success: true, message: 'Token refreshed', data: { accessToken: newAccessToken } });
    } catch (error) {
      res.status(401).json({ success: false, message: 'Invalid refresh token' });
    }
  }
}
