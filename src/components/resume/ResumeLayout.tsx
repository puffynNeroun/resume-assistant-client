// ResumeLayout.tsx
'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ResumeLayoutProps {
    children: ReactNode
    className?: string
}

export default function ResumeLayout({ children, className }: ResumeLayoutProps) {
    return (
        <section className={cn('min-h-screen bg-muted/30 py-12 px-4 sm:px-6 lg:px-8', className)}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {children}
            </div>
        </section>
    )
}
