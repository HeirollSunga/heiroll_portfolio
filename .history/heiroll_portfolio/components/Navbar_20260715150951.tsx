import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#2a2118]/70 bg-[#0c0a08]/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-8 py-5">
        {/* Logo styled like a terminal prompt */}
        <Link
          href="#"
          className="font-mono text-sm md:text-base text-[#f2ece1] tracking-tight"
        >
          heiroll<span className="text-[#e63946]">.</span>dev
          <span className="text-[#d4af37] animate-blink">_</span>
        </Link>

        {/* Links styled like file paths — this is the "codebase" being navigated */}
        <div className="flex items-center gap-5 md:gap-8">
          <Link
            href="#experience"
            className="font-mono text-xs md:text-sm text-[#93897a] hover:text-[#f2ece1] transition-colors"
          >
            ./experience
          </Link>
          <Link
            href="#projects"
            className="font-mono text-xs md:text-sm text-[#93897a] hover:text-[#f2ece1] transition-colors"
          >
            ./projects
          </Link>
          {/* Add resume.pdf to /public to make this a real download */}
          <a
            href="https://drive.google.com/file/d/1i-8H8YXC05Os73J6DkIY-zHRSgJgNL3M/view?usp=sharing"
            download
            className="bg-[#e63946] text-[#f2ece1] px-4 md:px-5 py-2 rounded-sm font-medium text-xs md:text-sm hover:bg-[#c72d39] transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}