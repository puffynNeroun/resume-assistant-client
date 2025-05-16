'use client'

import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resumeSchema } from '@/lib/validators/resumeSchema'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { createResume, updateResume } from '@/services/resume'
import { Button } from '@/components/ui/button'
import PersonalInfoForm from './PersonalInfoForm'
import ExperienceForm from './ExperienceForm'
import EducationForm from './EducationForm'
import SkillsForm from './SkillsForm'
import LanguagesForm from './LanguagesForm'
import ResumePreview from './ResumePreview'
import { AxiosError } from 'axios'
import ResumeLayout from '@/components/resume/ResumeLayout'
import UserPromptForm from "@/components/resume/UserPromptForm";

interface ResumeFormProps {
    initialValues?: z.infer<typeof resumeSchema>
    resumeId?: string
}

export default function ResumeForm({ initialValues, resumeId }: ResumeFormProps) {
    const router = useRouter()

    const methods = useForm<z.infer<typeof resumeSchema>>({
        resolver: zodResolver(resumeSchema),
        defaultValues: initialValues || {
            experience: [],
            education: [],
            languages: [],
        },
        mode: 'onChange',
    })

    const { handleSubmit, formState: { isSubmitting } } = methods

    const onSubmit = async (data: z.infer<typeof resumeSchema>) => {
        try {
            if (resumeId) {
                await updateResume(resumeId, data)
                toast.success('Резюме обновлено!')
            } else {
                await createResume(data)
                toast.success('Резюме создано!')
            }

            router.push('/dashboard')
        } catch (error: unknown) {
            const err = error as AxiosError
            console.error(err?.response?.data || err.message)
            toast.error('Ошибка при сохранении резюме')
        }
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ResumeLayout>
                    <div className="space-y-6">
                        <PersonalInfoForm />
                        <ExperienceForm />
                        <EducationForm />
                        <SkillsForm />
                        <LanguagesForm />
                        <UserPromptForm />
                        <Button type="submit" size="lg" disabled={isSubmitting}>
                            {resumeId ? 'Сохранить изменения' : 'Создать резюме'}
                        </Button>

                    </div>

                    <ResumePreview />
                </ResumeLayout>
            </form>
        </FormProvider>

    )
}

