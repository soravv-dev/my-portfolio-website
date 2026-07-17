import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Sparkles, Mouse } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/avatar-intro.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 flex h-full items-end pb-20 sm:pb-24 lg:pb-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-purple bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md"
            >
              <Sparkles size={14} className="text-accent" />
              Available for opportunities
            </motion.span>

            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white/90">Hi, I'm</span>
              <span className="gradient-text-animated mt-1 block">Saurabh Kumar</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-4 text-lg font-medium text-slate-200 sm:text-xl"
            >
              Full Stack Developer & AI Engineer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-4 sm:gap-5"
            >
              <a href="#contact" className="btn-primary">
                <Briefcase size={18} />
                Hire Me
              </a>
              <a href="#projects" className="btn-secondary">
                View Work
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-slate-300"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="flex flex-col items-center gap-1"
        >
          <Mouse size={18} />
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
