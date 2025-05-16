'use client';

import { useFieldArray, useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Trash2Icon } from 'lucide-react';

export default function ExperienceForm() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'experience',
    });

    const experienceErrors = errors.experience;

    return (
        <div className="space-y-6">
            {fields.map((field, index) => (
                <div key={field.id} className="border p-4 rounded-lg relative">
                    <div className="grid gap-4">
                        <div>
                            <Label>Компания</Label>
                            <Input {...register(`experience.${index}.company`)} />
                            {Array.isArray(experienceErrors) && experienceErrors[index]?.company && (
                                <p className="text-sm text-red-500 mt-1">
                                    {experienceErrors[index]?.company?.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor={`experience.${index}.role`}>Должность</Label>
                            <Input {...register(`experience.${index}.role`)} />
                        </div>

                        <div>
                            <Label htmlFor={`experience.${index}.period`}>Период</Label>
                            <Input {...register(`experience.${index}.period`)} placeholder="2021 — 2023"/>
                        </div>

                        <div>
                            <Label htmlFor={`experience.${index}.description`}>Описание</Label>
                            <Textarea {...register(`experience.${index}.description`)} rows={3}/>
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
                    append({ company: '', role: '', period: '', description: '' })
                }
            >
                Добавить опыт
            </Button>
        </div>
    );
}
