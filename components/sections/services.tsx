import React from 'react';
import { Zap, MapPin, Shield, ArrowRight, LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: Zap,
    title: 'Ultra-Fast Charging',
    description: 'Industry-leading 150kW+ DC fast charging with intelligent power management',
    color: 'from-red-500/10 to-red-500/5',
    delay: '0s',
  },
  {
    icon: MapPin,
    title: 'Strategic Coverage',
    description: '500+ conveniently located stations across major cities in Uzbekistan',
    color: 'from-red-500/10 to-red-500/5',
    delay: '0.15s',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: '24/7 AI-powered monitoring with military-grade encryption and reliability',
    color: 'from-red-500/10 to-red-500/5',
    delay: '0.3s',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        <div className="text-center space-y-6 animate-slide-up">
          <p className="text-primary font-semibold text-sm tracking-widest">OUR CAPABILITIES</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            Premium Services
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive EV charging solutions engineered for modern transportation needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="animate-slide-up" style={{ animationDelay: service.delay }}>
              <Card
                className={`p-8 border border-border/60 bg-gradient-to-br ${service.color} hover:border-primary/50 transition-premium hover:shadow-xl hover:scale-105 group cursor-pointer h-full backdrop-blur-sm`}>
                <div className="transition-premium group-hover:scale-125 group-hover:text-primary w-fit mb-6">
                  <service.icon className="w-14 h-14 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-smooth">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
