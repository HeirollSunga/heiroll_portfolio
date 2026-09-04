import CodeWindow from "../components/CodeWindow";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <main id="top" className="max-w-6xl mx-auto px-8 pt-20 pb-32 md:pt-28">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-16 items-start">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-ink-faint mb-6">
              SYS // PORTFOLIO.V1
            </p>

            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-accent" />
              <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Software Engineer
              </p>
            </div>

            <h1 className="font-display text-5xl md:text-6xl leading-[1.1] text-ink mb-6 max-w-xl">
              I build software that makes complex systems simple.
            </h1>

            <p className="text-base text-ink-soft leading-relaxed max-w-md mb-10">
              Computer Science student and full-stack engineer focused on
              real-time systems — algorithmic scheduling, live data sync, and
              interfaces production teams can actually rely on.
            </p>

            <div className="flex items-center gap-8 border-t border-line pt-6">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ink hover:text-accent transition-colors"
              >
                View work
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft hover:text-ink transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          <CodeWindow />
        </div>
      </main>

      <Experience />
      <Projects />
      <Contact />
    </>
  );
}