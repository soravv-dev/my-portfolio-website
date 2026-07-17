export type Certificate = {
  id: string;
  name: string;
  issuer: string;
  year: string;
  description: string;
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
  { id: 'c1', name: 'Google AI Essentials', issuer: 'Google', year: '2024', description: 'Foundational understanding of artificial intelligence concepts and practical applications of AI tools in everyday workflows.', credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/XXXXX' },
  { id: 'c2', name: 'Microsoft Azure AI Fundamentals', issuer: 'Microsoft', year: '2024', description: 'Demonstrates knowledge of common AI workloads and the ability to identify Azure services to support them.', credentialUrl: 'https://learn.microsoft.com/en-us/users/xxxxx/credentials/xxxxx' },
  { id: 'c3', name: 'Full Stack Web Development', issuer: 'Coursera', year: '2024', description: 'Comprehensive coverage of front-end and back-end development with modern frameworks and deployment practices.', credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/XXXXX' },
  { id: 'c4', name: 'Python for Everybody', issuer: 'University of Michigan', year: '2024', description: 'Mastered the basics of Python programming, data structures, and accessing web data.', credentialUrl: '#' },
  { id: 'c5', name: 'JavaScript Algorithms', issuer: 'freeCodeCamp', year: '2024', description: 'Solved algorithmic challenges and built projects using JavaScript fundamentals and ES6 features.', credentialUrl: 'https://freecodecamp.org/certification/xxxxx/javascript-v9' },
  { id: 'c6', name: 'React + Redux Certification', issuer: 'Meta', year: '2024', description: 'Built dynamic single-page applications using React, Redux, and modern front-end tooling.', credentialUrl: '#' },
  { id: 'c7', name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024', description: 'Foundational understanding of AWS cloud services, architecture, and security best practices.', credentialUrl: 'https://www.aws.amazon.com/verification/XXXXX' },
  { id: 'c8', name: 'Machine Learning Specialization', issuer: 'Stanford', year: '2024', description: 'In-depth study of supervised and unsupervised learning, neural networks, and practical ML model building.', credentialUrl: '#' },
  { id: 'c9', name: 'Data Structures & Algorithms', issuer: 'Coursera', year: '2024', description: 'Strengthened problem-solving skills through trees, graphs, dynamic programming, and complexity analysis.', credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/XXXXX' },
  { id: 'c10', name: 'MongoDB Developer Certification', issuer: 'MongoDB University', year: '2024', description: 'Proficient in building applications with MongoDB, aggregation pipelines, and schema design.', credentialUrl: 'https://university.mongodb.com/certification/XXXXX' },
];
