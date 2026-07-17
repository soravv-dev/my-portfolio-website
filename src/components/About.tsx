import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Download, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/personalInfo';

const stats = [
  { label: 'Projects Built', value: '4+' },
  { label: 'Certifications', value: '10+' },
  { label: 'Tech Stack', value: 'MERN' },
  { label: 'Focus', value: 'AI + Web' },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="A bit about who I am"
          subtitle="Developer, designer, and lifelong learner."
        />

        <div className="grid items-center gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="glass-card group relative mx-auto max-w-sm overflow-hidden p-8 text-center">
              <div className="absolute inset-0 -z-10 bg-primary-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
              <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-primary-gradient text-6xl font-bold text-white shadow-glow">
                SK
              </div>
              <h3 className="mt-6 font-heading text-2xl font-semibold">{personalInfo.name}</h3>
              <p className="mt-1 text-sm text-primary">{personalInfo.title}</p>
              <div className="mt-6 space-y-2 text-left text-sm text-slate-300 light:text-slate-600">
                <p className="flex items-center gap-2">
                  <MapPin size={15} className="text-primary" /> {personalInfo.location}
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={15} className="text-primary" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-primary">{personalInfo.email}</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={15} className="text-primary" /> {personalInfo.phones.join(', ')}
                </p>
              </div>
              <a
                href="/resume.pdf"
                download
                className="btn-primary mt-6 w-full"
                onClick={(e) => {
                  e.preventDefault();
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Saurabh-Kumar-Resume.pdf';
                  link.click();
                }}
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.2}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border-purple bg-primary/10 px-3 py-1 text-xs text-primary">
                <Sparkles size={13} /> MERN Stack • AI Enthusiast
              </div>
              <p className="text-lg leading-relaxed text-slate-300 light:text-slate-700">
                {personalInfo.bio}
              </p>
              <p className="text-base leading-relaxed text-slate-400 light:text-slate-600">
                I specialize in the MERN stack and love exploring the intersection of AI and
                software development. My goal is to build products that feel as good as they work —
                performant, accessible, and visually polished.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="glass-card p-4 text-center"
                  >
                    <div className="font-heading text-2xl font-bold gradient-text">{s.value}</div>
                    <div className="mt-1 text-xs text-slate-400">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
