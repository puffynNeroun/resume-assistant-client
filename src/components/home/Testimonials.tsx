'use client';

import { motion } from 'framer-motion';
import { StarIcon, UserIcon } from 'lucide-react';

const testimonials = [
    {
        name: 'Алина Кравец',
        role: 'Frontend Developer',
        quote: 'Благодаря Resume Assistant я получила предложение о работе через неделю! Резюме получилось просто 🔥',
    },
    {
        name: 'Максим Бондаренко',
        role: 'Project Manager',
        quote: 'Интерфейс понятный, генерация — мгновенная. Я сэкономил часы времени и получил результат лучше, чем у HR!',
    },
    {
        name: 'Юлия Соколова',
        role: 'UI/UX Designer',
        quote: 'Это как иметь своего персонального карьерного помощника. Очень крутое и современное решение!',
    },
];

export default function Testimonials() {
    return (
        <section className="bg-muted py-24 border-t border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Отзывы пользователей</h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        Наши пользователи уже нашли работу с помощью Resume Assistant.
                    </p>
                </motion.div>

                <div className="grid gap-10 md:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            className="bg-background rounded-xl border border-border p-6 shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                                    <UserIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">{t.name}</p>
                                    <p className="text-sm text-muted-foreground">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-muted-foreground text-sm mb-4">{t.quote}</p>

                            <div className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
