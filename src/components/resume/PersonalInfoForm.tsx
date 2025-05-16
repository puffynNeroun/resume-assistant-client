'use client';

import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function PersonalInfoForm() {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="grid gap-5">
            <div>
                <Label htmlFor="fullName">Полное имя</Label>
                <Input id="fullName" {...register('fullName')} />
                {errors.fullName && (
                    <p className="text-sm text-red-500 mt-1">{errors.fullName.message as string}</p>
                )}
            </div>

            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register('email')} />
                {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email.message as string}</p>
                )}
            </div>

            <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" {...register('phone')} />
                {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone.message as string}</p>
                )}
            </div>

            <div>
                <Label htmlFor="location">Локация</Label>
                <Input id="location" {...register('location')} />
                {errors.location && (
                    <p className="text-sm text-red-500 mt-1">{errors.location.message as string}</p>
                )}
            </div>

            <div>
                <Label htmlFor="summary">О себе (summary)</Label>
                <Textarea id="summary" rows={4} {...register('summary')} />
                {errors.summary && (
                    <p className="text-sm text-red-500 mt-1">{errors.summary.message as string}</p>
                )}
            </div>
        </div>
    );
}
