export type Experience = {
  id: string;
  role: string;
  organization: string;
  period: string;
  points: string[];
};

export type Education = {
  id: string;
  degree: string;
  location: string;
};

export const experience: Experience[] = [
  {
    id: 'exp1',
    role: 'Virtual Internship — Full Stack Developer',
    organization: 'Current',
    period: '2024 — Present',
    points: [
      'Building production-ready web applications',
      'Collaborating with cross-functional teams',
      'Implementing responsive, user-centric designs',
      'Solving real-world problems using modern tech stack',
    ],
  },
];

export const education: Education[] = [
  {
    id: 'edu1',
    degree: 'Diploma in Computer Science & Engineering',
    location: 'Meerut, Uttar Pradesh, India',
  },
];
