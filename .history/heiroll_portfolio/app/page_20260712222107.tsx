import Link from "next/link";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-[85vh] px-8 text-center">
        <div className="max-w-3xl space-y-6">
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#F8F9FA] tracking-tight">
            Hi, I'm <span className="text-[#E63946]">Heiroll Sunga</span>.
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-400">
            A Full Stack Developer building modern, responsive, and automated web applications.
          </h2>

          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Computer Science student at Emilio Aguinaldo College specializing in React, Next.js, and modern UI/UX design. I transform complex problems into clean, high-performance digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link 
              href="#projects" 
              className="bg-[#E63946] text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              View My Work
            </Link>
            <Link 
              href="#contact" 
              className="border border-[#F8F9FA] text-[#F8F9FA] px-8 py-3 rounded-md font-medium hover:bg-[#F8F9FA] hover:text-[#0A0A0A] transition-colors"
            >
              Contact Me
            </Link>
          </div>

        </div>
      </main>

      <Experience />
      <Projects />
      <Contact />
    </>
  );
}