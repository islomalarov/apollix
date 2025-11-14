import React from 'react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  onScroll: (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => void;
}

export function CTASection({ onScroll }: CTASectionProps) {
  return (
    <section className="py-32 px-4 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 opacity-100" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-background/5 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10 animate-slide-up">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-background tracking-tight">
            Ready for Electric?
          </h2>
          <p className="text-lg text-background/80 leading-relaxed max-w-2xl mx-auto font-light">
            Join thousands of Uzbekistan drivers experiencing premium EV charging with Apollix
            Energy Technology
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            onClick={(e) => onScroll(e, 'network')}
            className="bg-primary hover:bg-primary/90 text-background transition-premium hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl font-semibold">
            Find Nearest Station
          </Button>
          <Button
            size="lg"
            onClick={(e) => onScroll(e, 'contact')}
            variant="outline"
            className="border-background/30 text-background hover:bg-background/10 bg-transparent/10 transition-premium hover:scale-105 active:scale-95 font-semibold">
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
}
