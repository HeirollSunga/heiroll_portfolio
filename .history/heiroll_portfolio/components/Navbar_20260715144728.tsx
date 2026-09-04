"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-8 py-5">
        <Link href="#top" className="font-mono text-sm tracking-[0.15em] text-ink">
          HEIROLL<span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative font-mono text-xs uppercase tracking-[0.12em] text-ink-soft hover:text-ink transition-colors"
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  active === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-ink hover:border-accent hover:text-accent transition-colors"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}