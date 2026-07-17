import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Home from './pages/Home'
import CertificatesPage from './pages/CertificatesPage'

// Root app — theme management, route-driven scroll, loading gate.
export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()

  // Simulate initial load animation
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(t)
  }, [])

  // Persist + apply theme class on <html>
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
  }, [theme])

  // Scroll to top on route change; handle in-page hash scrolling
  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    // On home, jump to hash if present
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.hash])

  const toggleTheme = () =>
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <AnimatePresence>{loading && <Loading />}</AnimatePresence>

      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />

      <Routes>
        <Route
          path="/"
          element={<Home activeSection={activeSection} setActiveSection={setActiveSection} />}
        />
        <Route path="/certificates" element={<CertificatesPage />} />
      </Routes>

      <Footer />
    </>
  )
}
