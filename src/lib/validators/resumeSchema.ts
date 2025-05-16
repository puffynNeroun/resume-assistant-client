    import { z } from 'zod';

    export const resumeSchema = z.object({
        fullName: z.string().min(2, 'Имя обязательно'),
        email: z.string().email('Неверный email'),
        phone: z.string().min(6).optional(),
        location: z.string().optional(),
        summary: z.string().optional(),

        experience: z.array(
            z.object({
                company: z.string().min(1),
                role: z.string(),
                period: z.string(),
                description: z.string().optional(),
            })
        ).optional(),

        education: z.array(
            z.object({
                institution: z.string().min(1),
                degree: z.string().optional(),
                years: z.string().optional(),
            })
        ).optional(),

        skills: z.string().optional(),
        languages: z.array(
            z.object({
                name: z.string(),
                level: z.string(),
            })
        ).optional(),
        userPrompt: z.string().max(1000, 'Слишком длинный prompt').optional(),
    });
