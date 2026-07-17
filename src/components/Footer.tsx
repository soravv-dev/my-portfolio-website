import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-purple bg-bg-800/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:px-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-gradient font-heading text-lg font-bold text-white">
                S
              </span>
              <span className="font-heading text-lg font-semibold">Saurabh Kumar</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              Full Stack Developer & AI Engineer crafting beautiful, functional digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold">Get in touch</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary">{personalInfo.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                {personalInfo.location}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold">Connect</h4>
            <div className="mt-4 flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-purple text-slate-300 transition-all hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-glow light:text-slate-700"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-purple text-slate-300 transition-all hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-glow light:text-slate-700"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-purple text-slate-300 transition-all hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-glow light:text-slate-700"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border-purple pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">© {year} Saurabh Kumar. All rights reserved.</p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-primary"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
