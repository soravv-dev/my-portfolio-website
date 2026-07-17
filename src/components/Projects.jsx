import { motion } from 'framer-motion'
import { ExternalLink, Star } from 'lucide-react'
import { Github } from './BrandIcons'
import { projects } from '../data/projects'
import ScrollAnimation from './ScrollAnimation'

// Projects — 4 cards with hover lift + glow. Featured card gets a badge.
export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <ScrollAnimation className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
          Projects
        </p>
        <h2 className="font-display text-3xl font-bold sm:text-5xl">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          A mix of real builds and upcoming concepts. Dummy projects are marked
          for later editing.
        </p>
      </ScrollAnimation>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, i) => {
          const isPlaceholder = project.placeholder
          const liveHref = project.liveDemo && project.liveDemo !== '#' ? project.liveDemo : null
          const githubHref = project.github && project.github !== '#' ? project.github : null

          return (
            <ScrollAnimation key={project.id} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 280 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass transition-shadow duration-300 hover:shadow-glow-lg"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                  {project.featured && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gradient-accent px-2.5 py-1 text-xs font-semibold text-white shadow-glow">
                      <Star size={12} /> Featured
                    </span>
                  )}
                  {isPlaceholder && (
                    <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-amber-300 backdrop-blur">
                      Dummy
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-accent-300">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-accent-400/20 bg-accent-400/10 px-2 py-0.5 text-[11px] font-medium text-accent-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-5 flex items-center gap-4">
                    {liveHref ? (
                      <a
                        href={liveHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-300 transition-all hover:scale-105 hover:underline hover:underline-offset-4"
                      >
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                        <ExternalLink size={15} /> Soon
                      </span>
                    )}
                    {githubHref ? (
                      <a
                        href={githubHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-all hover:scale-105 hover:text-accent-300 hover:underline hover:underline-offset-4"
                      >
                        <Github size={15} /> Code
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                        <Github size={15} /> Soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            </ScrollAnimation>
          )
        })}
      </div>
    </section>
  )
}
