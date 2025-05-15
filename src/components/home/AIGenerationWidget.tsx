'use client';

import { motion } from 'framer-motion';
import { BrainCircuitIcon, SparklesIcon, FileTextIcon } from 'lucide-react';

const steps = [
    {
        icon: BrainCircuitIcon,
        title: 'Анализ профиля',
        description: 'AI изучает твой опыт, навыки и цели.',
    },
    {
        icon: SparklesIcon,
        title: 'Генерация контента',
        description: 'Создаёт резюме, адаптированное под вакансию.',
    },
    {
        icon: FileTextIcon,
        title: 'Формирование PDF',
        description: 'Результат — современное и читаемое резюме.',
    },
];

export default function AIGenerationWidget() {
    return (
        <motion.div
            className="w-full bg-white dark:bg-background rounded-xl border border-border p-6 shadow-md space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h3 className="text-xl font-semibold text-foreground">⚙️ Генерация в реальном времени</h3>
            <ul className="space-y-5">
                {steps.map((step, i) => (
                    <motion.li
                        key={step.title}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-full">
                            <step.icon className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground">{step.title}</p>
                            <p className="text-xs text-muted-foreground">{step.description}</p>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
}
