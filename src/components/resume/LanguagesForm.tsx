'use client'

import { useFieldArray, useFormContext } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Trash2 } from 'lucide-react'
import { z } from 'zod'
import { resumeSchema } from '@/lib/validators/resumeSchema'

type ResumeFormType = z.infer<typeof resumeSchema>

export default function LanguagesForm() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<ResumeFormType>()

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'languages',
    })

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Label className="text-base">Языки</Label>
                <p className="text-sm text-muted-foreground">
                    Добавь языки, которыми ты владеешь, и укажи уровень владения.
                </p>
            </div>

            {fields.map((field, index) => (
                <div key={field.id} className="flex gap-4 items-start">
                    <div className="w-full space-y-2">
                        <Input
                            placeholder="Язык (например, Английский)"
                            {...register(`languages.${index}.name`)}
                        />
                        <Input
                            placeholder="Уровень (например, B2, C1, Родной)"
                            {...register(`languages.${index}.level`)}
                        />
                    </div>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => remove(index)}
                        className="mt-2"
                    >
                        <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                </div>
            ))}

            {errors.languages && (
                <p className="text-sm text-red-500">
                    {(errors.languages as { message?: string })?.message}
                </p>
            )}

            <Button
                type="button"
                variant="outline"
                onClick={() => append({ name: '', level: '' })}
            >
                + Добавить язык
            </Button>
        </div>
    )
}
