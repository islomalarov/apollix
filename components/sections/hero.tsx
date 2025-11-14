import React from 'react';
import { Battery, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  isVisible: boolean;
  onScroll: (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => void;
}

export function HeroSection({ isVisible, onScroll }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-40 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow" />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-primary/4 rounded-full blur-3xl animate-glow"
        style={{ animationDelay: '0.7s' }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-glow"
        style={{ animationDelay: '1.4s' }}
      />

      <div
        className={`max-w-7xl mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm tracking-widest">
                ELECTRIC REVOLUTION
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
                Charge the <span className="text-primary">Future</span>
              </h1>
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-lg font-light">
              Apollix Energy Technology delivers ultra-fast, reliable EV charging infrastructure
              across Uzbekistan. Experience the power of sustainable mobility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                size="lg"
                onClick={(e) => onScroll(e, 'network')}
                className="bg-primary hover:bg-primary/90 transition-premium shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group">
                Find a Station
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button
                size="lg"
                onClick={(e) => onScroll(e, 'network')}
                variant="outline"
                className="border-foreground/20 transition-premium hover:bg-foreground/5 hover:scale-105 active:scale-95">
                Explore Network
              </Button>
            </div>
          </div>
          <div
            className={`relative h-96 md:h-full transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent rounded-3xl border border-primary/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="relative w-40 h-40 mx-auto">
                  <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                  <div className="absolute inset-4 bg-primary/5 rounded-full animate-float" />
                  <Battery className="w-24 h-24 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <p className="text-primary font-semibold tracking-wide">Next-Gen Infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
