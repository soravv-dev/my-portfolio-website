import { motion } from 'framer-motion'

// Reusable scroll-reveal wrapper built on Framer Motion's whileInView.
// Usage: <ScrollAnimation delay={0.1}><YourContent/></ScrollAnimation>
export default function ScrollAnimation({
  children,
  delay = 0,
  y = 32,
  duration = 0.6,
  once = true,
  className = '',
  ...rest
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
