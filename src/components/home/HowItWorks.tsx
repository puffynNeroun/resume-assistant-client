'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from 'lucide-react';

const steps = [
    {
        title: '1. Введите краткий запрос',
        description: 'Например: “Frontend разработчик с опытом в React и TypeScript”.',
    },
    {
        title: '2. AI создаёт резюме',
        description: 'Мгновенно формируется профессиональное резюме на основе лучших практик.',
    },
    {
        title: '3. Просмотр и скачивание',
        description: 'Вы можете отредактировать и скачать резюме в формате PDF.',
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-background border-t border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Как это работает</h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
                        Всё просто: от идеи до готового PDF всего за несколько кликов.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-start bg-muted p-6 rounded-xl shadow-sm border border-border"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <CheckCircleIcon className="text-primary w-6 h-6 mb-4" />
                            <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
