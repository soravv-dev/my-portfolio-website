import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Award } from 'lucide-react'

// Fixed navbar: transparent at top, glass + solid on scroll.
// Active section highlighting driven by IntersectionObserver in Home.
const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Education', href: '/#education' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar({ theme, toggleTheme, activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isLight = theme === 'light'

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Logo */}
        <a
          href="/#home"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-accent font-display text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
            SK
          </span>
          <span className="hidden sm:inline">
            <span className="gradient-text">Saurabh</span>
            <span className="text-slate-300">.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const section = link.href.replace('/#', '')
            const isActive =
              activeSection === section && location.pathname === '/'
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-accent-300'
                      : 'text-slate-300 hover:text-accent-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-accent"
                    />
                  )}
                </a>
              </li>
            )
          })}
          <li>
            <Link
              to="/certificates"
              className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                location.pathname === '/certificates'
                  ? 'text-accent-300'
                  : 'text-slate-300 hover:text-accent-300'
              }`}
            >
              Certificates
            </Link>
          </li>
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-accent-300"
          >
            {isLight ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <Link
            to="/certificates"
            className="hidden items-center gap-1.5 rounded-lg border border-accent-400/40 px-3 py-2 text-sm font-medium text-accent-300 transition-all hover:border-accent-400 hover:shadow-glow sm:flex"
          >
            <Award size={16} />
            Certificates
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="rounded-lg p-2 text-slate-200 transition-colors hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden glass-strong lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-200 transition-colors hover:bg-accent-400/10 hover:text-accent-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/certificates"
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-200 transition-colors hover:bg-accent-400/10 hover:text-accent-300"
                >
                  Certificates
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
