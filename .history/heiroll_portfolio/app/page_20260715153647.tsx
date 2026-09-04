import Link from "next/link";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <main className="relative px-6 md:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          {/* Text column */}
          <div className="space-y-7 text-center lg:text-left">
            {/* Status line */}
            <div className="inline-flex items-center gap-2 font-mono text-xs md:text-sm uppercase tracking-[0.15em] text-[#d4af37]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4af37]" />
              </span>
              status: open to work
            </div>

            {/* Name as a small identifier tag, not the headline */}
            <p className="font-mono text-xs md:text-sm tracking-[0.2em] text-[#93897a] uppercase">
              Heiroll Iane Sunga
            </p>

            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-[#f2ece1]">
              Building software that{" "}
              <span className="italic text-[#e63946]">resolves its own conflicts.</span>
            </h1>

            <p className="font-display italic text-xl md:text-2xl text-[#93897a] max-w-xl mx-auto lg:mx-0">
              Software Developer
            </p>

            <p className="text-base md:text-lg text-[#93897a] leading-relaxed max-w-xl mx-auto lg:mx-0">
               Software Developer with a strong foundation in Computer Science and hands-on internship experience. I am skilled in web development and team collaboration, with a passion for solving technical problems and building user-friendly applications. A fast learner and adaptable professional, I am eager to launch my career in the tech industry
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                href="#projects"
                className="bg-[#e63946] text-[#f2ece1] px-8 py-3 rounded-md font-medium hover:bg-[#c72d39] transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="border border-[#f2ece1] text-[#f2ece1] px-8 py-3 rounded-md font-medium hover:bg-[#f2ece1] hover:text-[#0c0a08] transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Experience />
      <Projects />
      <Contact />
    </>
  );
}