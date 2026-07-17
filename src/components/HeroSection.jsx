import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, FileDown, ArrowDown, Sparkles } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'

const socials = [
  { icon: Github, href: 'https://github.com/soravv-dev', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/saurabh-kumar-932172355/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:soravvkumar32@gmail.com', label: 'Email' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false)
  const [isVideoVisible, setIsVideoVisible] = useState(true)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  // 🔥 FIX 1: Video play karne ka proper function
  const playVideoWithSound = async (video) => {
    try {
      // Video ko reset karo
      video.currentTime = 0
      video.muted = false
      video.volume = 1.0
      
      await video.play()
      console.log('✅ Video playing with sound!')
      setIsVideoVisible(true)
      return true
    } catch (error) {
      console.warn('⚠️ Autoplay blocked:', error)
      return false
    }
  }

  // 🔥 FIX 2: User interaction handler
  const handleUserInteraction = async () => {
    if (hasUserInteracted) return
    
    setHasUserInteracted(true)
    const video = videoRef.current
    if (!video || videoError) return

    // Ab user ne interact kiya hai, toh video play karo
    const played = await playVideoWithSound(video)
    if (!played) {
      // Agar phir bhi fail ho toh error set karo
      setVideoError(true)
    }
  }

  // 🔥 FIX 3: Initial video load aur autoplay attempt
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    console.log('🎬 Video element found!')
    console.log('Active section: home')

    // Video load hone par autoplay try karo
    const handleVideoLoad = async () => {
      // Pehle muted autoplay try karo (most browsers allow this)
      video.muted = true
      try {
        await video.play()
        console.log('✅ Muted autoplay successful')
        // Agar muted autoplay success ho, toh sound enable karo
        // Lekin sound ke liye user interaction chahiye
        video.muted = false
        video.volume = 1.0
        
        // Agar sound enable ho gaya toh theek, warna user interaction wait karo
        try {
          await video.play()
          console.log('✅ Video playing with sound!')
          setIsVideoVisible(true)
        } catch (soundError) {
          console.log('⏳ Waiting for user interaction for sound...')
          // Sound ke liye user interaction wait karo
          video.muted = true // Muted state maintain karo jab tak user interact na kare
          setIsVideoVisible(true)
        }
      } catch (autoplayError) {
        console.log('⏳ Autoplay blocked, waiting for user interaction...')
        setVideoError(true)
        // Agar autoplay fail ho, toh user interaction pe play karo
        video.muted = true // Muted mode mein video visible rahegi
        setIsVideoVisible(true)
      }
    }

    // Video load ho jaaye toh try karo
    if (video.readyState >= 3) {
      handleVideoLoad()
    } else {
      video.addEventListener('loadeddata', handleVideoLoad)
      return () => video.removeEventListener('loadeddata', handleVideoLoad)
    }

    // 🔥 FIX 4: Video end pe fade-out
    const handleEnd = () => {
      console.log('🎬 Video ended!')
      setIsVideoVisible(false)
      if (containerRef.current) {
        containerRef.current.style.transition = 'opacity 1s ease'
        containerRef.current.style.opacity = '0'
        containerRef.current.style.pointerEvents = 'none'
      }
    }
    
    video.addEventListener('ended', handleEnd)

    return () => {
      video.removeEventListener('ended', handleEnd)
      video.pause()
    }
  }, [videoError])

  // 🔥 FIX 5: User interaction listener (first click/touch/keypress)
  useEffect(() => {
    const handleInteraction = () => {
      if (!hasUserInteracted) {
        handleUserInteraction()
      }
    }

    // Add event listeners for user interaction
    document.addEventListener('click', handleInteraction)
    document.addEventListener('touchstart', handleInteraction)
    document.addEventListener('keydown', handleInteraction)

    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
      document.removeEventListener('keydown', handleInteraction)
    }
  }, [hasUserInteracted, videoError])

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      {/* Gradient fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900" />
      
      {/* 🔥 VIDEO CONTAINER */}
      <div 
        ref={containerRef}
        className="absolute inset-0 z-0"
      >
        {!videoError && isVideoVisible && (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src="/videos/avatar-intro.mp4"
            playsInline
            preload="auto"
            muted={true} // Initially muted for autoplay compatibility
            onError={() => {
              console.error('❌ Video failed to load!')
              setVideoError(true)
            }}
            aria-hidden="true"
          />
        )}
      </div>
      
      {/* 🔥 DARK OVERLAY - Z-INDEX 1 */}
      <div className="absolute inset-0 z-1 video-overlay-dark" />
      <div className="absolute inset-0 z-1 video-overlay-gradient" />

      {/* 🔥 CONTENT - Z-INDEX 10 */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40"
      >
        <motion.div variants={item} className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-accent-200">
          <Sparkles size={15} className="text-accent-400" />
          Available for opportunities
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Hi, I'm <span className="gradient-text">Saurabh Kumar</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-lg font-medium text-slate-200 sm:text-xl"
        >
          Full Stack Developer &amp; AI Engineer
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-base leading-relaxed text-slate-300/90 sm:text-lg"
        >
          Building scalable web applications at the intersection of AI and
          software development — creating digital experiences that are both
          functional and visually stunning.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center" style={{ gap: '18px' }}>
          <a href="#projects" className="btn-primary group">
            View My Work
            <ArrowDown size={18} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a href="/resume.pdf.html" download className="btn-secondary group">
            <FileDown size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={item} className="mt-10 flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-xl glass text-slate-200 transition-all duration-300 hover:scale-110 hover:text-accent-300 hover:shadow-glow"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-accent-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}