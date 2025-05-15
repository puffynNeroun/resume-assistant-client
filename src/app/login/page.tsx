'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/lib/validators/loginSchema';
import { loginUser } from '@/services/auth';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import Link from 'next/link';
import { toast } from 'sonner';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        try {
            setLoading(true);
            await loginUser(data);
            router.push('/');
        } catch (error: any) {
            if (error?.response?.status === 401) {
                toast.error('Неверный email или пароль');
            } else {
                toast.error('Ошибка входа. Попробуйте позже.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 px-4">
            <h1 className="text-2xl font-semibold mb-6">Вход</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" {...register('email')} />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <Label htmlFor="password">Пароль</Label>
                    <Input type="password" id="password" {...register('password')} />
                    {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
                </div>

                <Button type="submit" disabled={loading} className="w-full">
                    {loading ? 'Загрузка...' : 'Войти'}
                </Button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                Нет аккаунта?{' '}
                <Link href="/register" className="text-primary hover:underline">
                    Зарегистрироваться
                </Link>
            </p>
        </div>
    );
}
