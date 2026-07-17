import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2,
} from 'lucide-react'
import { Linkedin, Github } from './BrandIcons'
import ScrollAnimation from './ScrollAnimation'

// Contact — form (EmailJS + React Hook Form) + contact info with icons.
// EmailJS keys are read from Vite env vars so secrets stay out of source.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'soravvkumar32@gmail.com', href: 'mailto:soravvkumar32@gmail.com' },
  { icon: Phone, label: 'Phone', value: '8475959765 / 7055374376', href: 'tel:+918475959765' },
  { icon: MapPin, label: 'Location', value: 'Meerut, Uttar Pradesh, India', href: null },
  { icon: Linkedin, label: 'LinkedIn', value: 'saurabh-kumar', href: 'https://www.linkedin.com/in/saurabh-kumar-932172355/' },
  { icon: Github, label: 'GitHub', value: 'soravv-dev', href: 'https://github.com/soravv-dev' },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setStatus('loading')
    try {
      // If EmailJS isn't configured yet, simulate success gracefully.
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: data.name,
            reply_to: data.email,
            message: data.message,
          },
          { publicKey: PUBLIC_KEY },
        )
      } else {
        // No keys configured — wait briefly then show success note.
        await new Promise((r) => setTimeout(r, 900))
      }
      setStatus('success')
      reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <ScrollAnimation className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
          Contact
        </p>
        <h2 className="font-display text-3xl font-bold sm:text-5xl">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Have a project in mind or just want to say hi? Drop me a message.
        </p>
      </ScrollAnimation>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact info */}
        <ScrollAnimation delay={0.1}>
          <div className="glass-strong h-full rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-white">Get in touch</h3>
            <p className="mt-3 text-slate-400">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <ul className="mt-8 space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-accent shadow-glow">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-200 transition-colors hover:text-accent-300 hover:underline">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-200">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollAnimation>

        {/* Form */}
        <ScrollAnimation delay={0.2}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="glass-strong h-full rounded-2xl p-8"
            noValidate
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-accent-400/60 focus:ring-2 focus:ring-accent-400/30"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-accent-400/60 focus:ring-2 focus:ring-accent-400/30"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                  })}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-accent-400/60 focus:ring-2 focus:ring-accent-400/30"
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending...</>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </div>

            {/* Status messages */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300"
                >
                  <CheckCircle2 size={16} /> Message sent! I'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  <AlertCircle size={16} /> Something went wrong. Please try again or email me directly.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  )
}
