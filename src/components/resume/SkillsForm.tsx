'use client';

import { useFormContext } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function SkillsForm() {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="space-y-4">
            <div>
                <Label htmlFor="skills">Навыки</Label>
                <Textarea
                    id="skills"
                    placeholder="Например: React, TypeScript, TailwindCSS, Git, REST API, PostgreSQL"
                    {...register('skills')}
                />
                {errors.skills && (
                    <p className="text-sm text-red-500 mt-1">{(errors.skills as any)?.message}</p>
                )}
            </div>
            <p className="text-muted-foreground text-sm">
                Перечисли навыки через запятую — это поможет подобрать ключевые слова для резюме.
            </p>
        </div>
    );
}
