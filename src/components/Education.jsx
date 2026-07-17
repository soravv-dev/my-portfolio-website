import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

// Education section — single highlighted card.
export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
      <ScrollAnimation className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
          Education
        </p>
        <h2 className="font-display text-3xl font-bold sm:text-5xl">
          Academic <span className="gradient-text">Background</span>
        </h2>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="group relative overflow-hidden rounded-2xl glass-strong p-8 sm:p-10"
        >
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-accent-500/15 blur-3xl transition-opacity duration-300 group-hover:opacity-60" />

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-accent shadow-glow-lg">
              <GraduationCap size={32} className="text-white" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                Diploma in Computer Science &amp; Engineering
              </h3>
              <p className="mt-2 flex items-center gap-2 text-slate-300">
                <MapPin size={16} className="text-accent-400" />
                Meerut, Uttar Pradesh, India 🇮🇳
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Built a strong foundation in computer science fundamentals,
                programming, data structures, and modern software development
                practices.
              </p>
            </div>
          </div>
        </motion.div>
      </ScrollAnimation>
    </section>
  )
}
