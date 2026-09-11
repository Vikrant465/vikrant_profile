"use client";

import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

const Scene = dynamic(() => import("./hero-scene").then((mod) => mod.Scene), {
  ssr: false,
});

const LIGHT_ACCENT = "#2563eb";
const DARK_ACCENT = "#5b9dfb";

export function HeroBackground() {
  const [shouldRender, setShouldRender] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setShouldRender(!reducedMotion);
    setIsDark(document.documentElement.classList.contains("dark"));
    setIsCompact(window.innerWidth < 768);

    const themeObserver = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const handleResize = () => setIsCompact(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => {
      themeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, isCompact ? 1.5 : 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene
            particleCount={isCompact ? 220 : 500}
            accentColor={isDark ? DARK_ACCENT : LIGHT_ACCENT}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}