'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/lib/validators/registerSchema';
import { registerUser } from '@/services/auth';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';

export default function RegisterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: z.infer<typeof registerSchema>) => {
        try {
            setLoading(true);
            await registerUser(data);
            toast.success('Аккаунт успешно создан!');
            router.push('/login');
        } catch (error: any) {
            if (error?.response?.status === 409) {
                toast.error('Такой email уже зарегистрирован');
            } else {
                toast.error('Ошибка регистрации. Попробуйте позже.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 px-4">
            <h1 className="text-2xl font-semibold mb-6">Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" {...register('email')} />
                    {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" {...register('name')} />
                    {errors.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="password">Пароль</Label>
                    <Input type="password" id="password" {...register('password')} />
                    {errors.password && (
                        <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
                    )}
                </div>

                <Button type="submit" disabled={loading} className="w-full">
                    {loading ? 'Загрузка...' : 'Создать аккаунт'}
                </Button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                Уже есть аккаунт?{' '}
                <Link href="/login" className="text-primary hover:underline">
                    Войти
                </Link>
            </p>
        </div>
    );
}
