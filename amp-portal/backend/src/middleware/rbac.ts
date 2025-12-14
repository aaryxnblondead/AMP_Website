import express from 'express';

export const requireRole = (...roles: string[]) => {
  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const userRole = req.auth?.userType;
    if (!userRole) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    if (!roles.includes(userRole)) {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }
    next();
  };
};
