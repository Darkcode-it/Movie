import axios from 'axios';

// Base URL for backend API (can be overridden via Vite env)
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach auth token (if available) to all requests
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Normalize API errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const normalizedError = new Error(
      error?.response?.data?.message ||
        error?.message ||
        'خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.',
    );

    normalizedError.status = error?.response?.status;
    normalizedError.data = error?.response?.data;

    return Promise.reject(normalizedError);
  },
);


