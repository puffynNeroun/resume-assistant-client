'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EyeIcon, DownloadIcon } from 'lucide-react';

export default function PreviewSection() {
    return (
        <section className="py-20 bg-muted/50 border-t border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Превью твоего резюме
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
                        AI сгенерировал профессиональное резюме. Просмотри его и сразу скачай в PDF.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-12 grid lg:grid-cols-2 gap-10 items-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {/* Preview Resume Card */}
                    <Card className="shadow-xl border border-border overflow-hidden">
                        <CardContent className="p-6 bg-white dark:bg-background min-h-[450px] flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-foreground">Иван Иванов</h3>
                                <p className="text-muted-foreground">Frontend Developer · React · TypeScript</p>
                                <hr className="my-4 border-border" />

                                <h4 className="font-semibold text-foreground mb-1">Опыт работы</h4>
                                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                    <li>— Разработка SPA на React + Redux Toolkit</li>
                                    <li>— Оптимизация производительности UI</li>
                                    <li>— Работа в команде с Agile</li>
                                </ul>

                                <h4 className="font-semibold text-foreground mb-1">Навыки</h4>
                                <p className="text-sm text-muted-foreground">React, TypeScript, Tailwind, Git, Figma</p>
                            </div>

                            <p className="mt-6 text-right text-xs text-muted-foreground">
                                * Это пример. Финальное резюме будет адаптировано под вашу профессию.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Call to action */}
                    <div className="flex flex-col items-start justify-center space-y-6">
                        <motion.p className="text-lg text-muted-foreground">
                            Резюме уже почти готово. Проверь, все ли тебя устраивает, и загружай PDF.
                        </motion.p>

                        <div className="flex gap-4">
                            <Button size="lg" className="gap-2">
                                <EyeIcon className="w-5 h-5" />
                                Посмотреть резюме
                            </Button>
                            <Button size="lg" variant="outline" className="gap-2">
                                <DownloadIcon className="w-5 h-5" />
                                Скачать PDF
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
