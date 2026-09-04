export default function Contact() {
  return (
    <footer id="contact" className="py-20 px-8 max-w-3xl mx-auto text-center border-t border-[#222222] mt-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#F8F9FA] mb-6">
        Let&apos;s Build Something<span className="text-[#E63946]">.</span>
      </h2>
      
      <p className="text-gray-400 mb-10 leading-relaxed">
        I am currently seeking full-time junior software engineering roles starting in mid-2026. Whether you have an opportunity or just want to connect, my inbox is always open.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        {/* The Native Email Link */}
        <a 
          href="mailto:heirollsunga24@gmail.com" 
          className="bg-[#E63946] text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
        >
          Email Me
        </a>
        
        {/* The External LinkedIn Link */}
        <a 
          href="https://www.linkedin.com/in/heirollsunga" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-[#F8F9FA] text-[#F8F9FA] px-8 py-3 rounded-md font-medium hover:bg-[#F8F9FA] hover:text-[#0A0A0A] transition-colors"
        >
          LinkedIn
        </a>
      </div>

      <div className="text-sm text-gray-600 font-medium">
        <p>© {new Date().getFullYear()} Heiroll Sunga. Built with Next.js & Tailwind.</p>
      </div>
    </footer>
  );
}