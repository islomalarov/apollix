import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus({
        type: 'success',
        message: 'Thank you! We will contact you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    } catch {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    }
  };
  const contactInfoCards = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@apollix.uz',
      delay: '0s',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+998 (71) 200-00-00',
      delay: '0.1s',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Tashkent, Uzbekistan',
      delay: '0.2s',
    },
  ];
  return (
    <section id="contact" className="py-32 px-4 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-20">
        <div className="text-center space-y-6 animate-slide-up">
          <p className="text-primary font-semibold text-sm tracking-widest">GET IN TOUCH</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            Contact Our Team
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactInfoCards.map((item, idx) => (
            <div key={idx} className="animate-slide-up" style={{ animationDelay: item.delay }}>
              <div className="p-8 bg-background border border-border/60 rounded-2xl hover:border-primary/50 transition-premium hover:shadow-lg hover:scale-105 group cursor-pointer backdrop-blur-sm h-full">
                <div className="transition-premium group-hover:scale-125 group-hover:text-primary w-fit mb-4">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto animate-slide-up">
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-12 bg-background border border-border/60 rounded-2xl shadow-lg hover:shadow-xl transition-premium backdrop-blur-sm space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="block text-sm font-semibold text-foreground">
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-border/60 bg-input text-foreground placeholder-foreground/40 transition-smooth focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="block text-sm font-semibold text-foreground">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-border/60 bg-input text-foreground placeholder-foreground/40 transition-smooth focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="block text-sm font-semibold text-foreground">
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+998 (71) XXX-XX-XX"
                  className="w-full px-4 py-3 rounded-lg border border-border/60 bg-input text-foreground placeholder-foreground/40 transition-smooth focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="block text-sm font-semibold text-foreground">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg border border-border/60 bg-input text-foreground placeholder-foreground/40 transition-smooth focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="block text-sm font-semibold text-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border/60 bg-input text-foreground placeholder-foreground/40 transition-smooth focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
              />
            </div>

            {/* Status Messages */}
            {status.type !== 'idle' && (
              <div
                className={`p-4 rounded-lg text-sm font-medium animate-slide-up ${
                  status.type === 'success'
                    ? 'bg-green-500/10 text-green-700 border border-green-500/30'
                    : status.type === 'error'
                    ? 'bg-red-500/10 text-red-700 border border-red-500/30'
                    : 'bg-blue-500/10 text-blue-700 border border-blue-500/30'
                }`}>
                {status.message}
              </div>
            )}

            <Button
              type="submit"
              disabled={status.type === 'loading'}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-premium hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl font-semibold py-3 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
              {status.type === 'loading' ? (
                <span>Sending...</span>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
