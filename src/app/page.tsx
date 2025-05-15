'use client';

import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Steps from '@/components/home/Steps';
import PreviewSection from '@/components/home/PreviewSection';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export default function HomePage() {
  return (
      <>
        <Hero />
        <Features />
        <Steps />
        <PreviewSection />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </>
  );
}
