import dotenv from 'dotenv';

dotenv.config();

const requiredEnv = [
  'PORT',
  'DB_HOST',
  'DB_PORT',
  'DB_NAME',
  'DB_USER',
  'DB_PASSWORD',
  'JWT_SECRET',
  'JWT_EXPIRY',
  'REFRESH_TOKEN_SECRET',
  'REFRESH_TOKEN_EXPIRY',
  'FRONTEND_URL',
];

for (const key of requiredEnv) {
  if (!process.env[key]) {
    console.warn(`[env] Missing ${key}. Some features may not work correctly in development.`);
  }
}

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '5000', 10),
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  jwtSecret: process.env.JWT_SECRET!,
  jwtExpiry: process.env.JWT_EXPIRY || '7d',
  refreshSecret: process.env.REFRESH_TOKEN_SECRET!,
  refreshExpiry: process.env.REFRESH_TOKEN_EXPIRY || '30d',
  uploadDir: process.env.UPLOAD_DIR || './uploads',
  maxFileSize: parseInt(process.env.MAX_FILE_SIZE || '10485760', 10),
};
