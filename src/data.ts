import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  profile: {
    name: "VEERESWARAN S",
    title: "BCA Student & Aspiring Web Developer",
    email: "veeresveeres29@gmail.com",
    phone: "9342432028",
    avatarUrl: "F:\\Downloads\\veereswaran-s-portfolio\\src\\assets\\images\\image.png",
    location: "Tamil Nadu, India",
    objective: "To obtain a challenging position where I can apply my skills, learn new technologies, and contribute to organizational growth."
  },
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Arulmigu Arthanareeswarar Arts and Science College",
      duration: "2025 - 2028 (Currently in 1st Year)",
      status: "Pursuing",
      details: "Gaining fundamental knowledge in computer systems, object-oriented programming, data structures, and web technologies. Actively participating in system design clubs."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Government Boys Higher Secondary School",
      duration: "Completed 2025",
      status: "Completed",
      details: "Focused on Computer Science, Mathematics, Physics, and Chemistry. Developed initial passion for computer programming."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Government Boys Higher Secondary School",
      duration: "Completed 2023",
      status: "Completed",
      details: "Academic foundation with high performance in technological and mathematical courses."
    }
  ],
  skills: [
    { name: "HTML5", category: "frontend", proficiency: 90, iconName: "HtmlIcon" },
    { name: "CSS3", category: "frontend", proficiency: 85, iconName: "CssIcon" },
    { name: "Java", category: "languages", proficiency: 75, iconName: "JavaIcon" },
    { name: "Python", category: "languages", proficiency: 70, iconName: "PythonIcon" },
    { name: "JavaScript", category: "frontend", proficiency: 80, iconName: "JsIcon" },
    { name: "Web Development", category: "frontend", proficiency: 82, iconName: "WebIcon" }
  ],
  projects: [
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      description: "A fully responsive personal portfolio designed to highlight personal achievements, educational milestones, and programming skills. Beautifully structured using modern HTML, interactive CSS transitions, and core JavaScript logic.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "Frontend",
      link: "#"
    },
    {
      id: "algos-playground",
      title: "Java & Python Algorithm Visualizers",
      description: "A collection of mathematical solver scripts and sorting visualizers implemented during coursework to master OOP principles, sorting runtimes, and recursive paradigms in code.",
      technologies: ["Java", "Python"],
      category: "Algorithms",
      link: "#"
    }
  ],
  languages: ["Tamil (Native)", "English (Professional)"],
  hobbies: ["Cricket (Active Player)", "Web Development", "Self-Teaching Tech", "Open Source Contribution"]
};
