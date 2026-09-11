export interface SkillGroup {
  category: string;
  color: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    color: "#f97316",
    items: ["JavaScript", "TypeScript", "Python", "C++", "Java", "C"],
  },
  {
    category: "Web Technologies",
    color: "#38bdf8",
    items: ["React.js", "Next.js", "Express.js","angular","spring boot"],
  },
  {
    category: "Databases",
    color: "#a78bfa",
    items: ["MongoDB", "MySQL", "Firebase", "Appwrite", "oracle"],
  },
  {
    category: "Python Frameworks",
    color: "#34d399",
    items: ["FastAPI", "Selenium"],
  },
  {
    category: "APIs & Integrations",
    color: "#f472b6",
    items: ["Telegram API", "Discord Bot API"],
  },
];