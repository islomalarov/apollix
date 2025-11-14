'use client';

import { useEffect, useState } from 'react';
import {
  Navigation,
  HeroSection,
  ServicesSection,
  StatsSection,
  NetworkSection,
  CTASection,
  ContactSection,
  Footer,
} from '@/components/sections';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on component mount
    const timer = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onScroll={handleScroll} />
      <HeroSection isVisible={isVisible} onScroll={handleScroll} />
      <ServicesSection />
      <StatsSection />
      <NetworkSection isVisible={isVisible} />
      <CTASection onScroll={handleScroll} />
      <ContactSection />
      <Footer />
    </div>
  );
}
