import { z } from 'zod';

export const loginSchema = z.object({
    email: z
        .string({ required_error: 'Email обязателен' })
        .email('Неверный формат email'),
    password: z
        .string({ required_error: 'Пароль обязателен' })
        .min(6, 'Минимум 6 символов'),
});
