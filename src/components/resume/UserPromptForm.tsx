'use client'

import { useFormContext } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function UserPromptForm() {
    const { register } = useFormContext()

    return (
        <div className="space-y-2">
            <Label htmlFor="userPrompt">Пожелания для ИИ (необязательно)</Label>
            <Textarea
                id="userPrompt"
                {...register('userPrompt')}
                placeholder="Например: Хочу резюме с фокусом на React и английский"
                rows={4}
                className="resize-none"
            />
        </div>
    )
}