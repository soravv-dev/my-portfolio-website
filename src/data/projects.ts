export type Project = {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  liveDemo: string;
  github: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 'ai-resume-analyzer',
    name: 'AI Resume Analyzer',
    description:
      'A modern SaaS-inspired Resume Analyzer UI with beautiful glassmorphism, animated dashboard, ATS score visualization, resume preview, skills analysis and responsive design.',
    techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router DOM', 'Lucide React'],
    liveDemo: 'https://ai-resume-analyzer-one-roan.vercel.app/',
    github: 'https://github.com/soravv-dev/AI-resume-analyzer',
    featured: true,
  },
  {
    id: 'ecommerce-platform',
    name: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with product management, cart, and secure payment integration.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveDemo: '#',
    github: '#',
    featured: false,
  },
  {
    id: 'job-finder-portal',
    name: 'Job Finder Portal',
    description:
      'A job search platform with advanced filtering, application tracking, and real-time notifications.',
    techStack: ['React', 'Express.js', 'MongoDB', 'JWT Auth'],
    liveDemo: '#',
    github: '#',
    featured: false,
  },
  {
    id: 'ai-code-assistant',
    name: 'AI Code Assistant',
    description:
      'An AI-powered code assistant for debugging, optimization, and smart code suggestions.',
    techStack: ['Python', 'React', 'FastAPI'],
    liveDemo: '#',
    github: '#',
    featured: false,
  },
];
