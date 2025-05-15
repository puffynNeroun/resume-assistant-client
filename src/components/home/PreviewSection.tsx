'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EyeIcon, DownloadIcon } from 'lucide-react';
import AIGenerationWidget from "@/components/home/AIGenerationWidget";

export default function PreviewSection() {
    return (
        <section className="py-24 bg-muted/50 border-t border-border">
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
                        Ознакомься с примером резюме, которое будет создано для тебя на основе твоего опыта и целей.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-16 grid lg:grid-cols-2 gap-10 items-start"
                    initial={{opacity: 0, scale: 0.95}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6, delay: 0.3}}
                >
                    {/* Resume Preview */}
                    <Card className="shadow-xl border border-border overflow-hidden">
                        <CardContent
                            className="p-6 bg-white dark:bg-background min-h-[600px] flex flex-col justify-between">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">Иван Иванов</h3>
                                    <p className="text-sm text-muted-foreground">Frontend Developer · React ·
                                        TypeScript</p>
                                </div>

                                <div className="border-t pt-4 border-border">
                                    <h4 className="text-lg font-semibold text-foreground mb-1">Краткое описание</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Опытный фронтенд-разработчик с более чем 3-летним стажем. Увлекаюсь созданием
                                        интуитивно понятных и адаптивных интерфейсов. Целеустремлен, командный игрок,
                                        всегда слежу за новыми трендами.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-1">Опыт работы</h4>
                                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                                        <li>Frontend Developer — Компания A (2021–2023)</li>
                                        <li>Разработка SPA на React + Redux Toolkit</li>
                                        <li>Внедрение дизайн-системы и компонентного подхода</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-1">Образование</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Харьковский Национальный Университет Экономики, Информационные системы
                                        (2019–2023)
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-1">Навыки</h4>
                                    <p className="text-sm text-muted-foreground">
                                        React, TypeScript, TailwindCSS, Figma, Git, REST API, Zustand
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-1">Языки</h4>
                                    <p className="text-sm text-muted-foreground">Английский (B2), Украинский
                                        (родной)</p>
                                </div>
                            </div>

                            <p className="mt-8 text-right text-xs text-muted-foreground">
                                * Резюме будет адаптировано под ваш опыт и вакансию.
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col gap-6">
                        <motion.p className="text-lg text-muted-foreground leading-relaxed">
                            Наш генератор уже подготовил черновик твоего резюме. Хочешь увидеть результат? Нажми на
                            просмотр или скачай PDF.
                        </motion.p>

                        <div className="flex gap-4 flex-wrap">
                            <Button size="lg" className="gap-2">
                                <EyeIcon className="w-5 h-5"/>
                                Просмотреть резюме
                            </Button>
                            <Button size="lg" variant="outline" className="gap-2">
                                <DownloadIcon className="w-5 h-5"/>
                                Скачать PDF
                            </Button>
                        </div>

                        <AIGenerationWidget/>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
