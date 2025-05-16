'use client';

import { useFormContext, useFieldArray } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Trash2Icon } from 'lucide-react';

export default function EducationForm() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'education',
    });


    return (
        <div className="space-y-6">
            {fields.map((field, index) => (
                <div key={field.id} className="border p-4 rounded-lg relative">
                    <div className="grid gap-4">
                        <div>
                            <Label htmlFor={`education.${index}.institution`}>Учебное заведение</Label>
                            <Input {...register(`education.${index}.institution`)} />
                            {Array.isArray(errors.education) && errors.education[index]?.institution && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.education[index]?.institution?.message as string}
                                </p>
                            )}

                        </div>

                        <div>
                            <Label htmlFor={`education.${index}.degree`}>Специальность / Степень</Label>
                            <Input {...register(`education.${index}.degree`)} />
                        </div>

                        <div>
                            <Label htmlFor={`education.${index}.years`}>Годы обучения</Label>
                            <Input {...register(`education.${index}.years`)} placeholder="2019 — 2023"/>
                        </div>
                    </div>

                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 text-red-500"
                        onClick={() => remove(index)}
                    >
                        <Trash2Icon className="w-4 h-4"/>
                    </Button>
                </div>
            ))}

            <Button
                type="button"
                variant="outline"
                onClick={() =>
                    append({ institution: '', degree: '', years: '' })
                }
            >
                Добавить образование
            </Button>
        </div>
    );
}
