// app/page.tsx
'use client';

import Nav from "@/component/navbar";
import Profile from "@/component/profile";
import Projects from "@/component/projects";
import About from "@/component/about";
import Experience from "@/component/experience";
import Skills from "@/component/skils";
import { Button } from "@heroui/react";

export default function HomePage() {
  return (
    <main>
      <Nav />
      {/* <Button color="success">hello</Button> */}
      <Profile />
      <About />
      <Projects />
      <Experience />
      <Skills />
    </main>
  );
}
