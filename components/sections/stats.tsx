import { NumberTicker } from '@/components/ui/number-ticker';

interface StatItem {
  number: number;
  unit: string;
  label: string;
}

const STATS: StatItem[] = [
  { number: 500, unit: '+', label: 'Charging Stations' },
  { number: 98, unit: '%', label: 'Uptime Guarantee' },
  { number: 100, unit: 'K+', label: 'Active Users' },
  { number: 24, unit: '/7', label: 'Live Support' },
];

export function StatsSection() {
  return (
    <section className="py-32 px-4 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-1/3 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-glow" />
        <div
          className="absolute -bottom-20 left-1/4 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: '0.7s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 text-center">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="space-y-3 animate-scale-in"
              style={{ animationDelay: `${idx * 0.12}s` }}>
              <p className="text-5xl md:text-6xl font-black text-primary-foreground tracking-tight">
                <NumberTicker value={stat.number} className="text-primary-foreground" />
                {stat.unit}
              </p>
              <p className="text-primary-foreground/80 font-semibold text-sm tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
