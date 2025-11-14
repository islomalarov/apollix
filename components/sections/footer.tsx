import React from 'react';
import { Zap } from 'lucide-react';

interface FooterColumn {
  title: string;
  links: string[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Product',
    links: ['Charging Stations', 'Mobile App', 'Pricing Plans'],
  },
  {
    title: 'Company',
    links: ['About Apollix', 'Blog & News', 'Careers'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Contact Us'],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground border-t border-foreground/10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-background" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-background">Apollix</span>
                <span className="text-xs text-background/60">Energy Technology</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed font-light">
              Powering sustainable transportation across Uzbekistan with cutting-edge EV
              infrastructure.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col, idx) => (
            <div
              key={idx}
              className="animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 0.1}s` }}>
              <h4 className="font-bold text-background mb-4">{col.title}</h4>
              <ul className="space-y-3 text-background/70 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primary transition-smooth font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 pt-12 text-center text-background/60 text-sm">
          <p>
            © 2025 Apollix Energy Technology. All rights reserved. Charging the future of
            Uzbekistan.
          </p>
        </div>
      </div>
    </footer>
  );
}
