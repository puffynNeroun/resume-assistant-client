'use client'

import { useFormContext, useWatch } from 'react-hook-form'
import { Card, CardContent } from '@/components/ui/card'
import { z } from 'zod'
import { resumeSchema } from '@/lib/validators/resumeSchema'

type ResumeFormData = z.infer<typeof resumeSchema>

export default function ResumePreview() {
    const { control } = useFormContext<ResumeFormData>()
    const {
        fullName,
        email,
        phone,
        location,
        summary,
        experience = [],
        education = [],
        skills,
        languages = [],
    } = useWatch({ control })

    return (
        <Card className="border border-border shadow-lg bg-white dark:bg-muted/40">
            <CardContent className="p-6 space-y-6 min-h-[600px]">
                <div className="space-y-1 text-center">
                    <h2 className="text-2xl font-bold text-foreground">{fullName || 'Имя Фамилия'}</h2>
                    <p className="text-sm text-muted-foreground">
                        {email || 'email@example.com'} · {phone || '+380 99 999 9999'} · {location || 'Украина'}
                    </p>
                </div>

                {summary && (
                    <section>
                        <h3 className="font-semibold text-foreground mb-1">О себе</h3>
                        <p className="text-sm text-muted-foreground">{summary}</p>
                    </section>
                )}

                {experience.length > 0 && (
                    <section>
                        <h3 className="font-semibold text-foreground mb-2">Опыт работы</h3>
                        <ul className="space-y-2">
                            {experience.map((item, index) => (
                                <li key={index}>
                                    <p className="text-sm font-medium text-foreground">
                                        {item.role || 'Должность'} — {item.company || 'Компания'}
                                    </p>
                                    <p className="text-xs text-muted-foreground">{item.period || 'Период'}</p>
                                    {item.description && (
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {education.length > 0 && (
                    <section>
                        <h3 className="font-semibold text-foreground mb-2">Образование</h3>
                        <ul className="space-y-2">
                            {education.map((item, index) => (
                                <li key={index}>
                                    <p className="text-sm font-medium text-foreground">
                                        {item.institution || 'Учебное заведение'}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {item.degree || 'Специальность'} · {item.years || 'Годы обучения'}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {skills && (
                    <section>
                        <h3 className="font-semibold text-foreground mb-1">Навыки</h3>
                        <p className="text-sm text-muted-foreground">{skills}</p>
                    </section>
                )}

                {languages.length > 0 && (
                    <section>
                        <h3 className="font-semibold text-foreground mb-1">Языки</h3>
                        <ul className="text-sm text-muted-foreground list-disc list-inside">
                            {languages.map((lang, index) => (
                                <li key={index}>
                                    {lang.name} — {lang.level}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                <p className="text-right text-xs text-muted-foreground pt-6">
                    * Это превью. После сохранения ты сможешь скачать PDF.
                </p>
            </CardContent>
        </Card>
    )
}
