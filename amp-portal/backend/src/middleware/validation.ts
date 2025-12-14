import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validate = (validations: any[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.mapped(),
      });
    }
    next();
  };
};

export const validateRegister = [
  body('email').isEmail().withMessage('Invalid email').normalizeEmail(),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  body('fullName').isLength({ min: 2 }).withMessage('Full name is required'),
  body('userType').isIn(['NGO', 'VOLUNTEER', 'DONOR', 'ADMIN']).withMessage('Invalid user type'),
  body('phone').optional().matches(/^\+?[0-9]{10,}$/).withMessage('Invalid phone number'),
];

export const validateLogin = [
  body('email').isEmail().withMessage('Invalid email').normalizeEmail(),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
];

export const validateNGORegistration = [
  body('ngo_name').trim().isLength({ min: 3, max: 255 }).withMessage('NGO name must be 3-255 characters'),
  body('email').isEmail().withMessage('Invalid email').normalizeEmail(),
  body('phone').optional().matches(/^\+?[0-9]{10,}$/).withMessage('Invalid phone number'),
  body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
  body('state').trim().notEmpty().withMessage('State is required'),
  body('district').trim().notEmpty().withMessage('District is required'),
];

export const validateActivitySubmission = [
  body('activity_title').trim().notEmpty().withMessage('Activity title is required'),
  body('activity_date').isISO8601().withMessage('Invalid date'),
  body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
  body('direct_beneficiaries').isInt({ min: 0 }).withMessage('Direct beneficiaries must be a non-negative integer'),
  body('location').trim().notEmpty().withMessage('Location is required'),
  body('volunteers_involved').isInt({ min: 0 }).withMessage('Volunteers involved must be a non-negative integer'),
];
