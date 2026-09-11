"use client";

import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

const SkillsScene = dynamic(
  () => import("./skills-scene").then((mod) => mod.SkillsScene),
  { ssr: false },
);

const LIGHT_ACCENT = "#2563eb";
const DARK_ACCENT = "#5b9dfb";

export function SkillsVisual() {
  const [shouldRender, setShouldRender] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setShouldRender(!reducedMotion);
    setIsDark(document.documentElement.classList.contains("dark"));

    const themeObserver = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => themeObserver.disconnect();
  }, []);

  if (!shouldRender) return null;

  return (
    <div className="h-[360px] w-full sm:h-[420px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]} gl={{ alpha: true }}>
        <Suspense fallback={null}>
          <SkillsScene accentColor={isDark ? DARK_ACCENT : LIGHT_ACCENT} />
        </Suspense>
      </Canvas>
    </div>
  );
}