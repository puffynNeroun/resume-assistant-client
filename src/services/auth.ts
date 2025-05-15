import axios from 'axios';
import { registerSchema } from '@/lib/validators/registerSchema';
import { loginSchema } from '@/lib/validators/loginSchema';
import { z } from 'zod';

const API = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
});

export type RegisterData = z.infer<typeof registerSchema>;
export type LoginData = z.infer<typeof loginSchema>;

export const registerUser = (data: RegisterData) => API.post('/auth/register', data);
export const loginUser = (data: LoginData) => API.post('/auth/login', data);

export const logoutUser = () => API.post('/auth/logout');

