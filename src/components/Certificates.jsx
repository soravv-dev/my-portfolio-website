import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Calendar, Building2, Eye } from 'lucide-react'
import { certificates } from '../data/certificates'
import ScrollAnimation from './ScrollAnimation'

// Certificates — grid of cards. Clicking a card opens a modal with full details.
export default function Certifications() {
  const [selected, setSelected] = useState(null)

  const handleViewCertificate = (e, url) => {
    e.stopPropagation()

    if (typeof url === 'string' && url.trim() !== '' && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      alert('Certificate link not available')
    }
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <ScrollAnimation key={cert.id} delay={i * 0.06}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group relative flex h-full w-full cursor-pointer flex-col items-start overflow-hidden rounded-2xl glass p-6 text-left transition-shadow duration-300 hover:shadow-glow"
              onClick={() => setSelected(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelected(cert)
                }
              }}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-500/20 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl shadow-glow">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="font-display text-base font-bold leading-snug text-white transition-colors group-hover:text-accent-300">
                {cert.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-400">{cert.issuer}</p>

              <div className="mt-4 flex items-center gap-2 text-xs text-accent-300">
                <Calendar size={13} />
                {cert.year}
              </div>

              <div className="mt-5 w-full">
                <button
                  type="button"
                  onClick={(e) => handleViewCertificate(e, cert.credentialUrl)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-accent-400/30 bg-accent-500/15 px-4 py-2.5 text-sm font-medium text-accent-300 transition-all duration-200 hover:border-accent-400/60 hover:bg-accent-500/25 hover:text-accent-200 active:scale-[0.98]"
                >
                  <Eye size={16} />
                  View Certificate
                  <ExternalLink size={14} />
                </button>
              </div>

              <div className="mt-3 w-full text-center text-xs text-slate-500">
                Click card for details
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} details`}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl glass-strong p-8"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-4 top-4 rounded-lg p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-accent-300"
              >
                <X size={20} />
              </button>

              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl shadow-glow-lg">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                {selected.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <Building2 size={15} className="text-accent-400" /> {selected.issuer}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar size={15} className="text-accent-400" /> {selected.year}
                </span>
              </div>

              <p className="mt-5 leading-relaxed text-slate-300">
                {selected.description}
              </p>

              {selected.credentialUrl && selected.credentialUrl !== '#' ? (
                <a
                  href={selected.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 inline-flex items-center gap-2"
                >
                  View Credential <ExternalLink size={16} />
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
  )
}