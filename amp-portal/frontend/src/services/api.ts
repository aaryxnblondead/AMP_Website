import axios, { AxiosInstance, AxiosError } from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach bearer token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Global response error handling
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Optionally trigger logout or refresh flow
      // For now, clear token and redirect to login
      localStorage.removeItem('authToken');
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  register: (data: any) => api.post('/auth/register', data),
  login: (email: string, password: string) => api.post('/auth/login', { email, password }),
  refresh: (refreshToken: string) => api.post('/auth/refresh', { refreshToken }),
};

export const ngoAPI = {
  registerNGO: (data: any) => api.post('/ngos/register', data),
  searchNGOs: (params: any) => api.get('/ngos/search', { params }),
  getNGOById: (id: number) => api.get(`/ngos/${id}`),
  submitActivity: (ngoId: number, payload: any) => api.post(`/ngos/${ngoId}/activities`, payload),
  getNGODashboard: () => api.get('/ngos/dashboard'),
};

export const resourceAPI = {
  getResources: (category?: string, page: number = 1) =>
    api.get('/resources', { params: { category, page } }),
  getResourceById: (id: number) => api.get(`/resources/${id}`),
};

export const eventAPI = {
  getEvents: (filters: any) => api.get('/events', { params: filters }),
  getEventById: (id: number) => api.get(`/events/${id}`),
  registerEvent: (eventId: number) => api.post(`/events/${eventId}/register`),
};

export const discussionAPI = {
  getTopics: (category?: string, page: number = 1) =>
    api.get('/discussions', { params: { category, page } }),
};

export default api;
