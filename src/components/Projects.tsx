import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A mix of shipped products and work in progress."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="glass-card group relative h-full overflow-hidden p-7"
              >
                <div className="pointer-events-none absolute inset-0 -z-10 bg-primary-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />

                {project.featured && (
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    <Star size={11} /> Featured
                  </span>
                )}

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-gradient text-white shadow-glow">
                  <span className="font-heading text-lg font-bold">{idx + 1}</span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold">{project.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 light:text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border-purple bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300 light:bg-black/5 light:text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.liveDemo}
                    target={project.liveDemo !== '#' ? '_blank' : undefined}
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      project.liveDemo === '#'
                        ? 'cursor-not-allowed text-slate-500'
                        : 'text-primary hover:text-accent'
                    }`}
                    aria-disabled={project.liveDemo === '#'}
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target={project.github !== '#' ? '_blank' : undefined}
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      project.github === '#'
                        ? 'cursor-not-allowed text-slate-500'
                        : 'text-slate-300 hover:text-primary light:text-slate-700'
                    }`}
                    aria-disabled={project.github === '#'}
                  >
                    <Github size={15} /> Code
                  </a>
                </div>

                {project.liveDemo === '#' && (
                  <p className="mt-3 text-[11px] italic text-slate-500">
                    Dummy project — links will be added later.
                  </p>
                )}
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
