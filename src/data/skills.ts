export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: Record<string, string[]> = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
  Languages: ['Python', 'JavaScript'],
  Tools: ['VS Code', 'Postman', 'Git', 'GitHub', 'Vercel'],
  Specialization: ['Full Stack Development', 'AI Enthusiast'],
  'Non-Technical': ['Problem Solving', 'Quick Learner', 'Self-Learning', 'Time Management', 'Communication'],
};

export const skillCategories: SkillCategory[] = Object.entries(skills).map(([category, items]) => ({
  category,
  items,
}));
