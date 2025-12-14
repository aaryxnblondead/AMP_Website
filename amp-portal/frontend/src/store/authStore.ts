import { create } from 'zustand';
import { authAPI } from '../services/api';

interface User {
  id: number;
  email: string;
  full_name: string;
  user_type: 'NGO' | 'VOLUNTEER' | 'DONOR' | 'ADMIN';
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,
  async login(email: string, password: string) {
    set({ loading: true, error: null });
    try {
      const res = await authAPI.login(email, password);
      const { token, refreshToken, user } = res.data.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('refreshToken', refreshToken);
      set({ user, loading: false });
    } catch (err: any) {
      const message = err?.response?.data?.message || 'Login failed';
      set({ error: message, loading: false });
    }
  },
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    set({ user: null });
    window.location.href = '/login';
  },
  clearError() {
    set({ error: null });
  },
}));
