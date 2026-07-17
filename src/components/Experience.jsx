import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2 } from 'lucide-react'
import { experience } from '../data/experience'
import ScrollAnimation from './ScrollAnimation'

// Experience — vertical timeline with glowing nodes.
export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
      <ScrollAnimation className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
          Experience
        </p>
        <h2 className="font-display text-3xl font-bold sm:text-5xl">
          My <span className="gradient-text">Journey</span>
        </h2>
      </ScrollAnimation>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent-400/60 via-accent-500/30 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        {experience.map((exp, i) => (
          <ScrollAnimation key={exp.id} delay={i * 0.1}>
            <div className={`relative mb-10 pl-14 sm:w-1/2 sm:pl-0 ${i % 2 === 0 ? 'sm:ml-auto sm:pl-12' : 'sm:mr-auto sm:pr-12 sm:text-right'}`}>
              {/* node */}
              <motion.span
                whileHover={{ scale: 1.3 }}
                className={`absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-accent shadow-glow sm:left-auto ${i % 2 === 0 ? 'sm:-left-4' : 'sm:-right-4'}`}
              >
                <Briefcase size={15} className="text-white" />
              </motion.span>

              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6"
              >
                <div className={`flex items-center gap-2 ${i % 2 === 0 ? '' : 'sm:flex-row-reverse'}`}>
                  <span className="rounded-full bg-accent-400/15 px-3 py-1 text-xs font-semibold text-accent-300">
                    {exp.period}
                  </span>
                  <span className="text-xs text-slate-400">{exp.type}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-white">{exp.role}</h3>
                <p className="text-sm text-accent-300">{exp.organization}</p>

                <ul className={`mt-4 space-y-2 ${i % 2 === 0 ? '' : 'sm:justify-end'}`}>
                  {exp.highlights.map((h) => (
                    <li key={h} className={`flex items-start gap-2 text-sm text-slate-300 ${i % 2 === 0 ? '' : 'sm:flex-row-reverse'}`}>
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}
