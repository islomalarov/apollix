import { Zap, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Navigation({
  onScroll,
}: {
  onScroll: (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => void;
}) {
  return (
    <nav className="border-b border-border/50 bg-background/95 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 animate-fade-in">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-premium hover:scale-110">
            <Zap className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-foreground">Apollix</span>
            <span className="text-xs text-foreground/60">Energy Technology</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#services"
            className="text-foreground/80 hover:text-primary transition-smooth font-medium text-sm">
            Services
          </Link>
          <Link
            href="#network"
            className="text-foreground/80 hover:text-primary transition-smooth font-medium text-sm">
            Network
          </Link>
          <Link
            href=""
            className="text-foreground/80 hover:text-primary transition-smooth font-medium text-sm">
            About
          </Link>
          <Button
            className="bg-primary hover:bg-primary/90 transition-premium shadow-lg hover:shadow-xl"
            onClick={(e) => onScroll(e, 'contact')}>
            Contact
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
