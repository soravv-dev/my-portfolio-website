import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Contact from '../components/Contact'

// Home page — assembles all sections and tracks the active section
// for navbar highlighting via IntersectionObserver.
const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact']

export default function Home({ activeSection, setActiveSection }) {
  // 🔥 FIX: Agar setActiveSection undefined hai toh dummy function use karo
  const [localActiveSection, setLocalActiveSection] = useState('home')
  
  // Use provided setActiveSection or fallback to local
  const updateActiveSection = setActiveSection || setLocalActiveSection
  const currentActive = activeSection || localActiveSection

  useEffect(() => {
    // 🔥 FIX: Check if setActiveSection exists
    if (typeof updateActiveSection !== 'function') {
      console.warn('⚠️ setActiveSection is not a function!')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateActiveSection(entry.target.id)
            console.log('📍 Active section:', entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [updateActiveSection])

  return (
    <>
      <Helmet>
        <title>Saurabh Kumar — Full Stack Developer &amp; AI Engineer</title>
        <meta
          name="description"
          content="Portfolio of Saurabh Kumar, a Full Stack Developer and AI Engineer from Meerut, India. Building scalable web applications with the MERN stack and AI."
        />
      </Helmet>

      <main>
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  )
}