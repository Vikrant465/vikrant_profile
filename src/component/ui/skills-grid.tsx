"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SKILLS } from "@/data/skils";

const ALL = "All";

export function SkillsGrid() {
  const [active, setActive] = useState<string>(ALL);
  const prefersReducedMotion = useReducedMotion();

  const tabs = useMemo(() => [ALL, ...SKILLS.map((g) => g.category)], []);

  const visibleItems = useMemo(() => {
    return SKILLS.flatMap((group) =>
      group.items
        .filter(() => active === ALL || active === group.category)
        .map((name) => ({ name, category: group.category, color: group.color })),
    );
  }, [active]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter skills by category"
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {tabs.map((tab) => {
          const isActive = tab === active;
          return (
            <button
              key={tab}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(tab)}
              className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
            >
              {isActive && (
                <motion.span
                  layoutId="active-skill-tab"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={
                    prefersReducedMotion ? { duration: 0 } : { type: "spring", bounce: 0.2, duration: 0.5 }
                  }
                />
              )}
              <span className={`relative z-10 ${isActive ? "text-accent-foreground" : "text-muted"}`}>
                {tab}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout={!prefersReducedMotion} className="flex flex-wrap justify-center gap-3">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item) => (
            <motion.span
              key={item.name}
              layout={!prefersReducedMotion}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.7, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.7, y: -8 }}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.08, y: -3 }}
              transition={{ type: "spring", bounce: 0.35, duration: 0.4 }}
              className="cursor-default rounded-full border px-4 py-2 text-sm font-medium shadow-sm"
              style={{
                borderColor: item.color,
                color: item.color,
                backgroundColor: "color-mix(in srgb, var(--surface) 85%, transparent)",
              }}
            >
              {item.name}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}