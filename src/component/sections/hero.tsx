"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const HeroBackground = dynamic(
  () => import("@/component/ui/hero-background").then((mod) => mod.HeroBackground),
  { ssr: false },
);

export function Hero() {
  const [text] = useTypewriter({
    words: [
      "Vikrant Singh",
      "a Full Stack Developer",
      "a member of CodeChef NSUT",
      "a passionate learner",
      "a tech enthusiast",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] w-full flex-col items-center justify-center gap-6 overflow-hidden px-4 text-center"
    >
      <HeroBackground />

      <Image
        src="/images/profile2.jpeg"
        alt="Portrait of Vikrant Singh"
        width={220}
        height={220}
        priority
        className="relative z-10 h-[220px] w-[220px] rounded-full object-cover shadow-lg ring-4 ring-border"
      />
      <div className="relative z-10">
        <h2 className="pb-3 text-xs font-semibold uppercase tracking-[0.4em] text-muted sm:tracking-[0.5em]">
          Web Developer
        </h2>
        <h1 className="text-3xl font-semibold sm:text-5xl lg:text-6xl">
          Hi, I&apos;m {text}
          <Cursor cursorColor="#5b9dfb" />
        </h1>
      </div>
      
      <a  href="#contact"
        className="relative z-10 mt-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
      >
        Get in touch
      </a>
    </section>
  );
}