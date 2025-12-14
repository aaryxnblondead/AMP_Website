export interface User {
  id: number;
  email: string;
  password_hash: string;
  full_name: string;
  phone?: string;
  user_type: 'NGO' | 'VOLUNTEER' | 'DONOR' | 'ADMIN';
  is_verified: boolean;
  created_at: Date;
}

export interface NGO {
  id: number;
  user_id: number;
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
  status: 'PENDING' | 'VERIFIED' | 'REJECTED' | 'ACTIVE';
  beneficiaries_reached: number;
  created_at: Date;
}

export interface Project {
  id: number;
  ngo_id: number;
  project_name: string;
  category: string;
  objective: string;
  location: string;
  duration_months: number;
  budget: number;
  target_beneficiaries: number;
  status: 'ACTIVE' | 'COMPLETED' | 'PAUSED';
  impact_description: string;
}

export interface Activity {
  id: number;
  ngo_id: number;
  activity_title: string;
  activity_date: Date;
  description: string;
  direct_beneficiaries: number;
  location: string;
  volunteers_involved: number;
  key_outcomes: string;
  media_urls: string[];
}

export interface AuthPayload {
  userId: number;
  email: string;
  userType: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string>;
}
