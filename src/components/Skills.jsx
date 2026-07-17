import { motion } from 'framer-motion'
import {
  Layout, Server, Code2, Wrench, Sparkles, Brain,
} from 'lucide-react'
import { skillGroups } from '../data/skills'
import ScrollAnimation from './ScrollAnimation'

// Maps the string icon name in data to the actual Lucide component.
const iconMap = { Layout, Server, Code2, Wrench, Sparkles, Brain }

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <ScrollAnimation className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
          Skills
        </p>
        <h2 className="font-display text-3xl font-bold sm:text-5xl">
          My <span className="gradient-text">Tech Arsenal</span>
        </h2>
      </ScrollAnimation>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon] || Sparkles
          return (
            <ScrollAnimation key={group.category} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-shadow duration-300 hover:shadow-glow"
              >
                {/* glow blob */}
                <div className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${group.color} opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40`} />

                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${group.color} shadow-glow`}>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Icon size={26} className="text-white" />
                  </motion.div>
                </div>

                <h3 className="mb-3 font-display text-lg font-bold text-white">
                  {group.category}
                </h3>

                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300 transition-colors group-hover:border-accent-400/30"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollAnimation>
          )
        })}
      </div>
    </section>
  )
}
