import { Mail, Heart, ArrowUp } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { Link } from 'react-router-dom'

// Footer — brand, quick links, socials, back-to-top.
const quickLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
]

const socials = [
  { icon: Github, href: 'https://github.com/soravv-dev', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/saurabh-kumar-932172355/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:soravvkumar32@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-800/60 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="/#home" className="flex items-center gap-2 text-lg font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-accent font-display text-white">
                SK
              </span>
              <span className="gradient-text">Saurabh Kumar</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              Full Stack Developer &amp; AI Engineer crafting scalable, visually
              stunning digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-400 transition-colors hover:text-accent-300 hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/certificates" className="text-sm text-slate-400 transition-colors hover:text-accent-300 hover:underline">
                  Certificates
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg glass text-slate-300 transition-all hover:scale-110 hover:text-accent-300 hover:shadow-glow"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-sm text-slate-400">
            © {new Date().getFullYear()} Saurabh Kumar. Built with
            <Heart size={14} className="text-accent-400" /> &amp; React.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-lg border border-accent-400/30 px-3 py-1.5 text-sm text-accent-300 transition-all hover:border-accent-400 hover:shadow-glow"
          >
            Back to top <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
