import { z } from 'zod';

export const registerSchema = z.object({
    email: z
        .string({ required_error: 'Email обязателен' })
        .email('Неверный формат email'),
    name: z
        .string({ required_error: 'Имя обязательно' })
        .min(2, 'Имя должно содержать минимум 2 символа'),
    password: z
        .string({ required_error: 'Пароль обязателен' })
        .min(6, 'Пароль должен содержать минимум 6 символов')
        .max(32, 'Максимальная длина пароля — 32 символа')
        .regex(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
        .regex(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру'),
});
