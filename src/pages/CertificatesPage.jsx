import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import Certificates from '../components/Certificates'
import ScrollAnimation from '../components/ScrollAnimation'

// Certificates page — accessible at /certificates.
export default function CertificatesPage() {
  return (
    <>
      <Helmet>
        <title>Certificates — Saurabh Kumar</title>
        <meta
          name="description"
          content="Professional certificates earned by Saurabh Kumar in AI, full stack development, cloud, and more."
        />
      </Helmet>

      {/* Top spacer for fixed navbar */}
      <div className="h-24" />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
        <ScrollAnimation className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-300 transition-all hover:underline hover:underline-offset-4"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>

          <div className="mt-6 flex items-center gap-4">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-accent shadow-glow-lg"
            >
              <Award size={28} className="text-white" />
            </motion.div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
                Certificates
              </p>
              <h1 className="font-display text-3xl font-bold sm:text-5xl">
                My <span className="gradient-text">Achievements</span>
              </h1>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-slate-400">
            A collection of certifications across AI, cloud, full stack
            development, and core CS fundamentals. Click any card for details.
          </p>
        </ScrollAnimation>

        <Certificates />
      </section>
    </>
  )
}
