import type React from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { Geist } from 'next/font/google';
import { TestBanner } from '@/components/ui/test-banner';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Apollix Energy Technology - EV Charging Solutions',
  description:
    'Fast and reliable EV charging stations across Uzbekistan. Powering sustainable transportation.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className={`font-sans antialiased`}>
        <TestBanner />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
