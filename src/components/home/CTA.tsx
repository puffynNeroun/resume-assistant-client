'use client';

import { Button } from '@/components/ui/button';
import { RocketIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function CTA() {
    const router = useRouter();
    const { isAuth } = useSelector((state: RootState) => state.auth);

    const handleClick = () => {
        router.push(isAuth ? '/resume/new' : '/register');
    };

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-muted border-t border-border">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center justify-center bg-primary/10 text-primary w-12 h-12 rounded-full mx-auto mb-4">
                    <RocketIcon className="w-6 h-6" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Готовы выделиться среди кандидатов?
                </h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                    Создайте мощное резюме всего за пару минут и начните привлекать работодателей уже сегодня.
                </p>
                <Button
                    size="lg"
                    className="mt-8 text-base sm:text-lg"
                    onClick={handleClick}
                >
                    {isAuth ? 'Создать резюме' : 'Начать бесплатно'}
                </Button>
            </motion.div>
        </section>
    );
}
