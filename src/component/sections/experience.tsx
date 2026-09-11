"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { EXPERIENCE, type ExperienceItem } from "@/data/experience";

function ExperienceCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="relative pl-8"
    >
      <span className="absolute left-0 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent" />

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="w-full rounded-xl border border-border bg-surface p-6 text-left transition-shadow hover:shadow-md"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="mt-1 text-sm text-muted">
              {exp.organization} &middot; {exp.duration} &middot; {exp.location}
            </p>
          </div>
          <FaChevronDown
            className={`mt-1 shrink-0 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
            size={14}
          />
        </div>

        {isOpen && (
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
            {exp.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </button>
    </motion.li>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">Experience</h2>
      <ol className="flex flex-col gap-6 border-l-2 border-border">
        {EXPERIENCE.map((exp, index) => (
          <ExperienceCard key={exp.title + exp.organization} exp={exp} index={index} />
        ))}
      </ol>
    </section>
  );
}
