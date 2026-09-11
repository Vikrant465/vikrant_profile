"use client";

import dynamic from "next/dynamic";
import { SkillsGrid } from "@/component/ui/skills-grid";

const SkillsVisual = dynamic(
  () => import("@/component/ui/skills-background").then((mod) => mod.SkillsVisual),
  { ssr: false },
);

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">Skills</h2>
      <p className="mx-auto mb-10 max-w-md text-center text-sm text-muted">
        Drag your eyes around — or filter the list by category.
      </p>

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-6">
        <SkillsVisual />
        <SkillsGrid />
      </div>
    </section>
  );
}