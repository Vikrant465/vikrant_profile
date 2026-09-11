import { Navbar } from "@/component/layout/navbar";
import { Footer } from "@/component/layout/footer";
import { Hero } from "@/component/sections/hero";
import { About } from "@/component/sections/about";
import { Projects } from "@/component/sections/projects";
import { Experience } from "@/component/sections/experience";
import { Skills } from "@/component/sections/skills";
import { Contact } from "@/component/sections/contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
