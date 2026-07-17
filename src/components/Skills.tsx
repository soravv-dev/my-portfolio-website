import { motion } from 'framer-motion';
import { Code2, Server, Cpu, Wrench, Layers, Users } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { skillCategories } from '../data/skills';

const icons: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Server,
  Languages: Cpu,
  Tools: Wrench,
  Specialization: Layers,
  'Non-Technical': Users,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools of my craft"
          subtitle="Technologies and abilities I use to bring ideas to life."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, idx) => {
            const Icon = icons[cat.category] ?? Code2;
            return (
              <Reveal key={cat.category} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="glass-card group h-full p-7"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-all group-hover:bg-primary-gradient group-hover:text-white group-hover:shadow-glow">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-heading text-lg font-semibold">{cat.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i, duration: 0.4 }}
                        className="rounded-full border border-border-purple bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-primary hover:text-primary light:bg-black/5 light:text-slate-700"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
