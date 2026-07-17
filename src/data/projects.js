// Project portfolio data.
// NOTE: Projects 2–4 are placeholders — replace live/demo & GitHub links later.

export const projects = [
  {
    id: 1,
    title: 'AI Resume Analyzer',
    description:
      'A modern SaaS-inspired Resume Analyzer UI with beautiful glassmorphism, animated dashboard, ATS score visualization, resume preview, skills analysis and responsive design.',
    techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router DOM', 'Lucide React'],
    liveDemo: 'https://ai-resume-analyzer-one-roan.vercel.app/',
    github: 'https://github.com/soravv-dev/AI-resume-analyzer',
    featured: true,
    // Pexels stock image (relevant to resumes / AI)
    image:
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'from-cyan-500 to-blue-600',
  },
  {
  id: 2,
  title: 'React Job Portal',
  description: 'A modern job search platform built with React.js featuring real-time job listings, advanced search filters, and detailed job descriptions with smooth glassmorphism UI.',
  techStack: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router DOM'],
  liveDemo: 'https://react-job-portal-bwu2.vercel.app/',
  github: 'https://github.com/soravv-dev/react-job-portal',
   image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
  features: [
    'Fully responsive design with modern glassmorphism UI',
    'Featured Jobs and Latest Jobs sections on homepage',
    'Real-time job search with instant filtering',
    'Detailed job description pages with React Router',
    'Smooth Framer Motion animations throughout',
    'Reusable component architecture for scalability'
  ]
},
{
  id: 3,
  title: 'LuxeCart - Premium E-Commerce',
  description: 'Premium luxury e-commerce frontend with elegant dark theme, product categories, interactive shopping cart UI, and seamless product browsing experience.',
  techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router DOM'],
  liveDemo:  'https://luxe-cart-eccomerce-full-page.vercel.app/',
  github: 'https://github.com/soravv-dev/LuxeCart-eccomerce-full-page',
   image:
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
  features: [
    'Premium luxury UI with elegant dark theme',
    'Product categories with easy navigation',
    'Interactive product cards with shopping cart UI',
    'Product detail pages with smooth transitions',
    'Modern glassmorphism effects with backdrop blur',
    'Fully responsive and mobile-optimized'
  ]
},
{
    "id": 4,
    "title": "StopWatch - Precision Timing Web App",
    "description": "A sleek and responsive stopwatch web application built with HTML, CSS, and JavaScript. Tracks hours, minutes, seconds, and milliseconds with real-time updating, smooth animations, and a modern gradient interface.",
    "techStack": ["HTML5", "CSS3", "JavaScript (ES6+)"],
    "liveDemo": "https://stop-watch-beta-ten.vercel.app/",
    "github": "https://github.com/soravv-dev/Stop-Watch",
    "featured": false,
    "image": "https://images.unsplash.com/photo-1635694724073-97cb5c9fedda?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "accent": "from-blue-500 to-cyan-400",
    "placeholder": false,
    "features": [
        "Start, Stop, and Reset functionality with precise timing",
        "Real-time display of hours, minutes, seconds, and milliseconds",
        "Modern gradient UI with smooth animations and transitions",
        "Interactive buttons with hover, active, and click effects",
        "Fully responsive across all devices and screen sizes",
        "Zero dependencies — pure HTML/CSS/JS with setInterval"
    ]
},
]

export default projects
