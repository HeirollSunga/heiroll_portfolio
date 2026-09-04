export default function Contact() {
  return (
    <footer
      id="contact"
      className="py-20 px-6 md:px-8 max-w-3xl mx-auto text-center border-t border-[#2a2118] mt-12"
    >
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-4">
      </p>

      <h2 className="text-3xl md:text-4xl font-display font-medium text-[#f2ece1] mb-6">
        Let&apos;s Build Something<span className="text-[#e63946]">.</span>
      </h2>

      <p className="text-[#93897a] mb-10 leading-relaxed max-w-xl mx-auto">
        I&apos;m on the hunt for junior software engineering roles starting mid-2026 —
        ideally somewhere that cares about correctness as much as speed. If that
        sounds like your team, or you just want to talk through a constraint
        satisfaction problem, my inbox is open.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <a
          href="mailto:heirollsunga24@gmail.com"
          className="bg-[#e63946] text-[#f2ece1] px-8 py-3 rounded-md font-medium hover:bg-[#c72d39] transition-colors"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/heirollsunga"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#f2ece1] text-[#f2ece1] px-8 py-3 rounded-md font-medium hover:bg-[#f2ece1] hover:text-[#0c0a08] transition-colors"
        >
          LinkedIn
        </a>
      </div>

      <p className="font-mono text-xs text-[#5c544a] tracking-wide">
       · built with Next.js &amp; Tailwind · © {new Date().getFullYear()} Heiroll Sunga
      </p>
    </footer>
  );
}