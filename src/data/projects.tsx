export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  liveNote?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Text-based Emotion Prediction Chatbot",
    description:
      "A chatbot that uses a machine learning model to analyze user input and predict emotion, useful for mental-health support, customer service, and similar use cases.",
    technologies: ["Next.js", "FastAPI", "Machine Learning", "GenAI", "MongoDB"],
    image: "/images/project1.png",
    githubUrl: "https://github.com/Vikrant465/Optimizing-Emotion-Recognition-in-Web-Chatbots",
    liveUrl: "https://btp-emotion1.vercel.app/",
  },
  {
    title: "Remotely Accessible Control Car",
    description:
      "A remote-control car that can be driven from anywhere with an internet connection, combining an ESP32-CAM stream with a cloud-hosted control server.",
    technologies: ["HTML", "Arduino IDE", "Express", "AWS EC2", "ESP32-CAM"],
    image: "/images/project2.png",
    githubUrl: "https://github.com/Vikrant465/remote-control-car",
    liveNote: "Hardware project — no live demo available.",
  },
  {
    title: "KBC-style Quiz App",
    description:
      "A fully functional quiz game with a timer, sound effects, and animations for a rich, game-show-style experience.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    image: "/images/project3.png",
    githubUrl: "https://github.com/Vikrant465/image-resizer-app",
    liveUrl: "https://verdant-capybara-9b39f3.netlify.app/",
  },
  {
    title: "Multi-Purpose App",
    description:
      "A utility app bundling several tools in one place: image resizing, a teleprompter, and a PDF-to-text converter.",
    technologies: ["Next.js", "HeroUI", "Tailwind CSS"],
    image: "/images/project4.png",
    githubUrl: "https://github.com/Vikrant465/remote-control-car",
    liveUrl: "https://image-resizer-app-pi.vercel.app/",
  },
  {
    title: "Task Diary",
    description:
      "A task-management app for creating, editing, and deleting tasks through a clean, user-friendly interface.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    image: "/images/project5.png",
    liveUrl: "https://taskdiarytut.netlify.app/",
  },
  {
    title: "News Nukkad",
    description:
      "A news web app that pulls in the latest articles across categories, built with a clean and responsive reading experience.",
    technologies: ["Next.js", "HeroUI", "Tailwind CSS", "AWS S3", "MongoDB"],
    image: "/images/project6.png",
    githubUrl: "https://github.com/Vikrant465/News_nukkad",
    liveUrl: "https://newscharchaofficial.com/",
  },
];
