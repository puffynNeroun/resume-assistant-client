'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchMe, logout } from '@/store/authSlice';
import { logoutUser } from '@/services/auth';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const Header = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const { user, isAuth, loading } = useSelector((state: RootState) => state.auth);
    const [logoutLoading, setLogoutLoading] = useState(false);

    useEffect(() => {
        dispatch(fetchMe());
    }, [dispatch]);

    const handleLogout = async () => {
        try {
            setLogoutLoading(true);
            await logoutUser();
            dispatch(logout());
            router.push('/login');
        } catch (error) {
            console.error('Ошибка при выходе:', error);
        } finally {
            setLogoutLoading(false);
        }
    };

    return (
        <header className="w-full border-b bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <h1
                    onClick={() => router.push('/')}
                    className="text-xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer"
                >
                    Resume Assistant
                </h1>

                {loading ? (
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-6 w-24 rounded-md" />
                        <Skeleton className="h-8 w-24 rounded-md" />
                    </div>
                ) : isAuth && user ? (
                    <div className="flex items-center gap-4">
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                            Привет, <strong>{user.name}</strong>
                        </span>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleLogout}
                            disabled={logoutLoading}
                            className={cn(logoutLoading && 'opacity-50 cursor-not-allowed')}
                        >
                            {logoutLoading ? 'Выход...' : 'Выйти'}
                        </Button>
                    </div>
                ) : (
                    <Button size="sm" onClick={() => router.push('/login')}>
                        Войти
                    </Button>
                )}
            </div>
        </header>
    );
};
