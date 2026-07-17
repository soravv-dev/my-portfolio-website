import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { experience, education } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & Education"
          subtitle="Where I've been growing and what I've been learning."
        />

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent sm:left-1/2" />
          <div className="space-y-10">
            {experience.map((exp, idx) => (
              <Reveal key={exp.id} delay={idx * 0.1}>
                <div className="relative pl-12 sm:pl-0">
                  <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-gradient text-white shadow-glow sm:left-1/2 sm:-translate-x-1/2">
                    <Briefcase size={15} />
                  </span>
                  <div className="glass-card p-6 sm:ml-16 sm:w-[calc(50%-2rem)]">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">
                      {exp.period}
                    </span>
                    <h3 className="mt-2 font-heading text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sm text-slate-400">{exp.organization}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-slate-300 light:text-slate-600">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14">
            <h3 className="mb-6 flex items-center gap-2 font-heading text-xl font-semibold">
              <GraduationCap className="text-primary" size={22} /> Education
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="glass-card p-6"
                >
                  <h4 className="font-heading text-base font-semibold">{edu.degree}</h4>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-400">
                    <GraduationCap size={14} className="text-primary" /> {edu.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
