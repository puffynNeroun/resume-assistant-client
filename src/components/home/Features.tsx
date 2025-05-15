'use client';

import { RocketIcon, SparklesIcon, ShieldCheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: RocketIcon,
        title: 'Молниеносная генерация',
        description: 'Сгенерируй профессиональное резюме всего за 60 секунд с помощью нашего умного движка.',
    },
    {
        icon: SparklesIcon,
        title: 'Индивидуальный подход',
        description: 'Искусственный интеллект анализирует твой опыт и создает персонализированное резюме под вакансию.',
    },
    {
        icon: ShieldCheckIcon,
        title: 'Конфиденциальность данных',
        description: 'Все данные хранятся безопасно и используются только для генерации резюме.',
    },
];

export default function Features() {
    return (
        <section className="py-20 bg-background border-t border-border">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-bold text-center text-foreground"
                >
                    Почему выбирают нас?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg"
                >
                    Наш сервис сочетает передовые технологии с простым и понятным интерфейсом.
                </motion.p>

                <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                            className="p-6 rounded-xl border border-border bg-muted/30 backdrop-blur-md shadow-md hover:shadow-lg transition"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
