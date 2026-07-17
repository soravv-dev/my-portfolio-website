import { motion } from 'framer-motion'

// Full-screen loading animation shown on first page load.
export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-900"
    >
      {/* Animated logo mark */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex h-20 w-20 items-center justify-center"
      >
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-accent-400 border-r-accent-400"
        />
        <span className="font-display text-2xl font-bold gradient-text">SK</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-sm font-medium tracking-[0.2em] text-slate-400"
      >
        LOADING
      </motion.p>

      {/* progress bar */}
      <div className="mt-4 h-1 w-40 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
          className="h-full w-1/2 rounded-full bg-gradient-accent"
        />
      </div>
    </motion.div>
  )
}
