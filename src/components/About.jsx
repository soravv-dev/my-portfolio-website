import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, User } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

// About section — fade-in on scroll with profile card.
const stats = [
  { value: '4+', label: 'Projects Built' },
  { value: '10+', label: 'Certificates' },
  { value: 'MERN', label: 'Stack' },
  { value: 'AI', label: 'Focus' },
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <ScrollAnimation className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
          About Me
        </p>
        <h2 className="font-display text-3xl font-bold sm:text-5xl">
          Get to know <span className="gradient-text">Saurabh</span>
        </h2>
      </ScrollAnimation>

      <div className="grid items-center gap-10 lg:grid-cols-5">
        {/* Profile card */}
        <ScrollAnimation delay={0.1} className="lg:col-span-2">
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="glass-strong relative overflow-hidden rounded-3xl p-8 text-center"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-500/20 blur-3xl" />
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-accent shadow-glow-lg">
              <User size={48} className="text-white" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Saurabh Kumar</h3>
            <p className="mt-1 text-sm text-accent-300">Full Stack Developer &amp; AI Engineer</p>

            <div className="mt-6 space-y-3 text-left text-sm text-slate-300">
              <p className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-accent-400" />
                Meerut, Uttar Pradesh, India
              </p>
              <a href="mailto:soravvkumar32@gmail.com" className="flex items-center gap-3 transition-colors hover:text-accent-300">
                <Mail size={16} className="shrink-0 text-accent-400" />
                soravvkumar32@gmail.com
              </a>
              <p className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-accent-400" />
                8475959765 / 7055374376
              </p>
            </div>
          </motion.div>
        </ScrollAnimation>

        {/* Bio + stats */}
        <ScrollAnimation delay={0.2} className="lg:col-span-3">
          <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">
            I'm a passionate Full Stack Developer and AI Engineer from Meerut,
            India. I love building scalable web applications and exploring the
            intersection of AI and software development. With a strong
            foundation in the MERN stack and a keen eye for design, I create
            digital experiences that are both functional and visually stunning.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <div className="font-display text-2xl font-bold gradient-text">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
