import express from 'express';

export const errorHandler = (
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.error('Error:', err);

  // Validation errors
  if (err.array && typeof err.array === 'function') {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: err.array().reduce((acc: any, e: any) => {
        acc[e.param] = e.msg;
        return acc;
      }, {}),
    });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      success: false,
      message: 'Invalid token',
    });
  }

  // Database errors (unique/constraint violations start with 23xxx)
  if (err.code && typeof err.code === 'string' && err.code.startsWith('23')) {
    return res.status(400).json({
      success: false,
      message: 'Database error: Duplicate entry or constraint violation',
    });
  }

  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
};
