'use client';

import { motion } from 'framer-motion';
import { PencilIcon, SparklesIcon, DownloadIcon } from 'lucide-react';

const steps = [
    {
        title: '1. Заполни краткую форму',
        description: 'Укажи основную информацию о себе: имя, email и желаемую должность.',
        icon: PencilIcon,
    },
    {
        title: '2. Мы генерируем резюме',
        description: 'AI анализирует твой запрос и создает профессиональное резюме с нужными акцентами.',
        icon: SparklesIcon,
    },
    {
        title: '3. Скачай PDF',
        description: 'Сразу получи PDF-файл, готовый к отправке работодателю или загрузке на сайт.',
        icon: DownloadIcon,
    },
];

export default function Steps() {
    return (
        <section className="py-20 bg-background border-t border-border">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold text-center text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Как это работает
                </motion.h2>

                <motion.p
                    className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Генерация резюме с помощью искусственного интеллекта — быстро, умно, эффективно.
                </motion.p>

                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="p-6 border border-border rounded-xl bg-muted/30 backdrop-blur-md shadow-md hover:shadow-lg transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                                <step.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
