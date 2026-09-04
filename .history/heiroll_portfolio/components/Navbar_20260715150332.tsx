import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center text-[#F8F9FA]">
      {/* Left Side: Your Logo/Name */}
      <div className="text-xl font-bold tracking-wider">
        HEIROLL<span className="text-[#E63946]">.</span>
      </div>

      {/* Right Side: Links and Resume Button */}
      <div className="flex gap-8 items-center font-medium">
        <Link href="#experience" className="hover:text-[#E63946] transition-colors">
          Experience
        </Link>
        <Link href="#projects" className="hover:text-[#E63946] transition-colors">
          Projects
        </Link>
        <a 
          href="https://www.linkedin.com/in/heirollsunga" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#E63946] text-white px-5 py-2 rounded-md hover:bg-red-700 transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}