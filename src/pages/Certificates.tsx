import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, Calendar, Building2, Eye, ExternalLink } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import { certificates, type Certificate } from '../data/certificates';

export default function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  const handleViewCertificate = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();

    if (typeof url === 'string' && url.trim() !== '' && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert('Certificate link not available');
    }
  };

  return (
    <>
      <Seo title="Certificates" path="/certificates" description="Professional certifications earned by Saurabh Kumar across AI, web development, and cloud." />
      <section className="section-pad min-h-screen pt-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Achievements"
            title="Certificates"
            subtitle="Continuous learning across AI, web, and cloud."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, idx) => (
              <Reveal key={cert.id} delay={idx * 0.06}>
                <motion.button
                  onClick={() => setActive(cert)}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="glass-card group relative h-full w-full overflow-hidden p-6 text-left"
                >
                  <div className="pointer-events-none absolute inset-0 -z-10 bg-primary-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-gradient text-white shadow-glow">
                      <Award size={22} />
                    </span>
                    <span className="rounded-full border border-border-purple bg-white/5 px-3 py-1 text-xs font-medium text-primary">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold leading-snug">{cert.name}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-400">
                    <Building2 size={14} className="text-primary" /> {cert.issuer}
                  </p>
                  <p className="mt-3 line-clamp-2 text-xs text-slate-500">{cert.description}</p>
                  
                  {/* View Certificate Button */}
                  <button
                    type="button"
                    onClick={(e) => handleViewCertificate(e, cert.credentialUrl)}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-all duration-200 hover:border-primary/60 hover:bg-primary/20 hover:text-primary/80 active:scale-[0.98]"
                  >
                    <Eye size={16} />
                    View Certificate
                    <ExternalLink size={14} />
                  </button>
                </motion.button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card relative w-full max-w-lg overflow-hidden p-8"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border-purple text-slate-300 transition-colors hover:border-primary hover:text-primary"
              >
                <X size={18} />
              </button>

              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-gradient text-white shadow-glow">
                <Award size={26} />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-bold">{active.name}</h3>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-300 light:text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 size={15} className="text-primary" /> {active.issuer}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={15} className="text-primary" /> {active.year}
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-300 light:text-slate-600">
                {active.description}
              </p>
              
              {active.credentialUrl && active.credentialUrl !== '#' ? (
                <a
                  href={active.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/15 px-4 py-2.5 text-sm font-medium text-primary transition-all duration-200 hover:border-primary/60 hover:bg-primary/25"
                >
                  View Credential <ExternalLink size={14} />
                </a>
              ) : (
                <p className="mt-6 text-sm text-slate-500">
                  Credential link will be added soon.
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
