export interface ExperienceItem {
  title: string;
  organization: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Java Developer",
    organization: "TCS",
    duration: "March 2026 – ongoing",
    location: "Mumbai, India",
    responsibilities: [
      "Working with CCIL to maintain and switch from .NET applications to Java-based applications.",
      "Developing and maintaining Java applications for financial services.",
      "Collaborating with cross-functional teams to define, design, and ship new features.",
      "Troubleshooting and debugging applications to optimize performance.",
    ],
  },
  {
    title: "Software Developer Intern",
    organization: "Blozum",
    duration: "July 2024 – August 2024",
    location: "New Delhi, India",
    responsibilities: [
      "Developed a client-facing web application, covering both front-end and back-end work.",
      "Implemented digital signature generation and related document workflows.",
      "Built a scheduled Lambda job to refresh the database on a 24-hour cycle.",
      "Designed database schemas and optimized queries for performance.",
    ],
  },
  {
    title: "Core Intern",
    organization: "Vodafone Idea Ltd.",
    duration: "June 2024 – July 2024",
    location: "New Delhi, India",
    responsibilities: [
      "Used Wireshark to trace and analyze call flow.",
      "Gained hands-on exposure to 2G, 3G, and 4G network protocols and telecom systems.",
      "Studied 5G technology and its applications in modern telecommunications.",
    ],
  },
  {
    title: "Core Member",
    organization: "Freelance, NSUT",
    duration: "January 2022 – August 2023",
    location: "New Delhi, India",
    responsibilities: [
      "Collaborated with a team of developers to design and build web applications using React and Node.js.",
    ],
  },
  {
    title: "Member",
    organization: "CodeChef NSUT",
    duration: "January 2022 – April 2023",
    location: "New Delhi, India",
    responsibilities: [
      "Participated in competitive programming contests and coding challenges.",
      "Contributed to educational content and resources for the community.",
      "Took part in peer-to-peer learning and mentorship within the chapter.",
    ],
  },
];
