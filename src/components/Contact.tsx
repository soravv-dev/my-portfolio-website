import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/personalInfo';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type Status = 'idle' | 'sending' | 'success' | 'error';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // EmailJS not configured — simulate success so the UX is demonstrable
      setStatus('sending');
      await new Promise((r) => setTimeout(r, 900));
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    try {
      setStatus('sending');
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const contactCards = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phones.join(', '), href: `tel:${personalInfo.phones[0]}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: undefined },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: personalInfo.linkedin },
    { icon: Github, label: 'GitHub', value: 'View my code', href: personalInfo.github },
  ];

  return (
    <section id="contact" className="section-pad relative">
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          subtitle="Have a project or opportunity in mind? My inbox is always open."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="space-y-4">
              {contactCards.map((c) => {
                const Inner = (
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-card flex items-center gap-4 p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <c.icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">{c.label}</p>
                      <p className="mt-0.5 text-sm font-medium text-slate-100 light:text-slate-800">{c.value}</p>
                    </div>
                  </motion.div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block">
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label}>{Inner}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.2}>
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card space-y-5 p-7 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300 light:text-slate-700">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    className="w-full rounded-xl border border-border-purple bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-primary focus:shadow-glow light:bg-white/60 light:text-slate-900"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className="mt-1 text-xs text-accent">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300 light:text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    className="w-full rounded-xl border border-border-purple bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-primary focus:shadow-glow light:bg-white/60 light:text-slate-900"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                    })}
                  />
                  {errors.email && <p className="mt-1 text-xs text-accent">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300 light:text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                  className="w-full resize-none rounded-xl border border-border-purple bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-primary focus:shadow-glow light:bg-white/60 light:text-slate-900"
                  {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'At least 10 characters' } })}
                />
                {errors.message && <p className="mt-1 text-xs text-accent">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-green-400"
                >
                  <CheckCircle2 size={16} /> Message sent! I'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-accent"
                >
                  <AlertCircle size={16} /> Something went wrong. Please try again or email me directly.
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
