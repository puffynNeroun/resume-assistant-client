import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppProviders } from '@/providers';
import {Header} from "@/components/layout/Header";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Resume Assistant',
    description: 'Генератор резюме с AI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AppProviders>
            <Header />
            <main className="min-h-screen px-4 py-6">{children}</main>
        </AppProviders>
        </body>
        </html>
    );
}
