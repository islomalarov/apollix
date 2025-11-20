import { TrendingUp, Shield, Battery } from 'lucide-react';
import { Globe } from '@/components/ui/globe';

interface NetworkItem {
  icon: typeof TrendingUp;
  title: string;
  desc: string;
  delay: string;
}

const NETWORK_FEATURES: NetworkItem[] = [
  {
    icon: TrendingUp,
    title: 'Rapid Expansion',
    desc: 'Adding 100+ new stations annually across all major regions',
    delay: '0s',
  },
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'Enterprise-grade security and protective systems on every station',
    delay: '0.1s',
  },
  {
    icon: Battery,
    title: 'Smart Technology',
    desc: 'IoT-enabled stations with real-time analytics and predictive maintenance',
    delay: '0.2s',
  },
];

export function NetworkSection() {
  return (
    <section id="network" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6 animate-slide-up">
          <p className="text-primary font-semibold text-sm tracking-widest">INFRASTRUCTURE</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            Growing Network
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Expanding Uzbekistan&apos;s EV charging infrastructure to support sustainable
            transportation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            {NETWORK_FEATURES.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-5 animate-slide-up transition-all group p-4 rounded-xl hover:bg-foreground/5 transition-premium"
                style={{ animationDelay: item.delay }}>
                <div className="shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center transition-premium group-hover:bg-primary/20 group-hover:scale-110">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-lg">{item.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex h-full min-h-80 items-center justify-center md:min-h-full">
            <Globe />
          </div>
        </div>
      </div>
    </section>
  );
}
