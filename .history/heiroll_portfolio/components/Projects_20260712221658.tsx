import Link from "next/link";

export default function Projects() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Automated Room Scheduling System",
      description: "An automated web-based facility management application. It integrates a Constraint Satisfaction Problem (CSP) algorithm for zero-conflict scheduling and utilizes WebSockets for real-time availability tracking.",
      techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "WebSockets"],
      githubLink: "#",
      liveLink: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Data Analytics Dashboard",
      description: "A full-stack data visualization platform that processes and displays complex metrics through an interactive user interface, deployed via Vercel.",
      techStack: ["Next.js", "Tailwind CSS", "Supabase", "Recharts"],
      githubLink: "#",
      liveLink: "#",
      featured: false,
    }
  ];

  return (
    <section id="projects" className="py-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#F8F9FA] mb-12 border-b border-[#333333] pb-4">
        Projects<span className="text-[#E63946]">.</span>
      </h2>

      {/* Here is our CSS Grid: 1 column on mobile, 2 columns on medium screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioProjects.map((project) => (
          <div key={project.id} className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden flex flex-col hover:border-[#E63946] transition-colors duration-300">
            
            {/* Image Placeholder (We will replace this with real images later) */}
            <div className="h-48 bg-[#1A1A1A] w-full border-b border-[#222222] flex items-center justify-center">
              <span className="text-gray-600 font-medium">Project Image</span>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-[#F8F9FA]">{project.title}</h3>
                {project.featured && (
                  <span className="text-xs font-bold text-[#0A0A0A] bg-[#D4AF37] px-2 py-1 rounded-sm">
                    FEATURED
                  </span>
                )}
              </div>
              
              <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="text-xs font-medium text-gray-300 bg-[#222222] px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex gap-4 mt-auto border-t border-[#222222] pt-4">
                <Link href={project.githubLink} className="text-sm font-medium text-[#F8F9FA] hover:text-[#E63946] transition-colors">
                  View Code →
                </Link>
                <Link href={project.liveLink} className="text-sm font-medium text-[#F8F9FA] hover:text-[#E63946] transition-colors">
                  Live Demo →
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}