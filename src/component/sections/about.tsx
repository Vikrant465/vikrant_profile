import Image from "next/image";
import { EDUCATION } from "@/data/education";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="flex justify-center">
          <Image
            src="/images/profile1.png"
            alt="Vikrant Singh"
            width={340}
            height={420}
            className="h-[620px] w-[320px] rounded-2xl object-cover shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m a B.Tech graduate in Electronics and Communication Engineering, specialized
            in the Internet of Things, from Netaji Subhas University of Technology. I have
            hands-on experience building software solutions, automating workflows, and shipping
            web applications end to end.
          </p>

          <div>
            <h3 className="mb-4 text-2xl font-semibold">Education</h3>
            <ol className="flex flex-col gap-5 border-l-2 border-border pl-6">
              {EDUCATION.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-accent" />
                  <h4 className="text-lg font-medium">{item.title}</h4>
                  <p className="text-sm text-muted">{item.institution}</p>
                  {item.detail && <p className="text-sm text-muted">{item.detail}</p>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
