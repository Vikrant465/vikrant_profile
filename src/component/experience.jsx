// components/Experience.jsx
import { motion } from "framer-motion";
import { FaBriefcase, FaUniversity } from "react-icons/fa";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const experiences = [
  {
    title: "Core Member",
    organization: "FreeLance NSUT",
    duration: "January 2022 - August 2023",
    location: "New Delhi, Delhi, India",
    responsibilities: [
      "Collaborated with a team of developers to design and implement web applications using React.js and Node.js.",
    ],
    icon: <FaUniversity size={20} color="#FBBF24" />,
  },
  {
    title: "member",
    organization: "CodeChef NSUT",
    duration: "January 2022 - april 2023",
    location: "New Delhi, Delhi, India",
    responsibilities: [
      "Participated in competitive programming contests and coding challenges.",
      "Contributed to the development of educational content and resources for the community.",
      "Engaged in peer-to-peer learning and mentorship within the organization.",
    ],
    icon: <FaUniversity size={20} color="#FBBF24" />,
  },
  
  {
    title: "core intern",
    organization: "Vodafone Idea Ltd.",
    duration: "June 2024 - July 2024",
    location: "New Delhi, Delhi, India",
    responsibilities: [
      "Learned to used WireShark to track the call flow.",
      "Engaged in hands-on experience with network protocols and telecommunications systems like 2G, 3G, and 4G.",
      "Gained insights into 5g technology and its applications in modern telecommunications.",
    ],
    icon: <FaUniversity size={20} color="#FBBF24" />,
  },
  {
    title: "Software Developer Intern",
    organization: "Blozum",
    duration: "July 2024 - August 2024",
    location: "New Delhi, India",
    responsibilities: [
      "Developed a web application for a client, focusing on both front-end and back-end development.",
      "Implemented features such as digital signature generation, ",
      "Created a CronJob using lambda function to update database every 24 hours.",
      "Designed and implemented database schemas and optimized queries for performance.",
    ],
    icon: <FaBriefcase size={20} color="#14B8A6" />,
  },
];

const ExperienceItem = ({ exp, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Determine if the item should be centered (for odd items)
  const isCentered = false;
  return (
    <motion.div
      className={`flex flex-col md:flex-row items-start ${
        isCentered ? "md:flex-row" : index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
      initial={{ opacity: 0, x: index % 2 === 1 ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Connector Dot with Expand/Collapse */}
      <div className="relative flex flex-col items-center h-full">
        {/* Connector Line */}
        <div className={`hidden md:block absolute top-0 ${isCentered ? "h-full" : "h-full"} border-l-2 border-accent`}></div>

        {/* Connector Dot */}
        <div
          className="w-8 h-8 bg-accent rounded-full flex items-center justify-center z-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          tabIndex={0}
          role="button"
          aria-expanded={isOpen}
          aria-label={`Toggle details for ${exp.title}`}
          onPress={(e) => {
            if (e.key === "Enter") setIsOpen(!isOpen);
          }}
        >
          {/* {exp.icon} */}
          {isOpen ? (
            <FaChevronUp
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
              size={12}
            />
          ) : (
            <FaChevronDown
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
              size={12}
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div onClick={()=>{
        setIsOpen(!isOpen);
      }} className={`z-10 mt-4 cursor-pointer md:mt-0 md:px-6 lg:px-12 w-full ${isCentered ? "md:w-1/2" : "md:w-1/2"}`}>
        <div className="bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-3xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-text-light">{exp.title}</h3>
          <span className="text-gray-400">
            {exp.organization} | {exp.duration} | {exp.location}
          </span>
          <ul className={`mt-4 list-disc list-inside text-text ${isOpen ? "block" : "hidden"}`}>
            {exp.responsibilities.map((item, idx) => (
              <li key={idx} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col justify-center bg-background text-text py-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Example: Floating Dots */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-secondary rounded-full opacity-50 animate-bounce"></div>
        {/* Add more decorative elements as desired */}
      </motion.div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-semibold mb-12 text-text-light text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          My Experience
        </motion.h2>

        {/* Experiences Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-accent"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                exp={exp}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;