'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Hero() {
    const router = useRouter();

    return (
        <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-gradient-to-b from-background to-muted">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
                >
                    Генерируй <span className="text-primary">резюме</span> <br />
                    с&nbsp;помощью <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">искусственного интеллекта</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
                >
                    Получи профессиональное резюме за 60 секунд. Просто введи свои данные — остальное сделает AI.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-10 flex justify-center"
                >
                    <Button
                        size="lg"
                        className="text-base sm:text-lg px-8 py-6"
                        onClick={() => router.push('/register')}
                    >
                        Начать бесплатно →
                    </Button>
                </motion.div>
            </div>

            {/* Светящиеся круги фона */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 left-1/2 w-[800px] h-[800px] -translate-x-1/2 bg-gradient-to-br from-primary/30 via-pink-500/10 to-transparent rounded-full blur-3xl opacity-20" />
            </div>
        </section>
    );
}
