
export default function Projects() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Automated Room Scheduling System",
      description:
        "An automated web-based facility management application. It integrates a Constraint Satisfaction Problem (CSP) algorithm for zero-conflict scheduling and utilizes WebSockets for real-time availability tracking.",
      techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "WebSockets"],
      liveLink: "https://room-scheduling-system-room-finder.vercel.app/auth/login",
      featured: true,
      preview: "grid" as const,
    },
    {
      id: 2,
      title: "Data Analytics Dashboard",
      description:
        "A full-stack data visualization platform that processes and displays complex metrics through an interactive user interface, deployed via Vercel.",
      techStack: ["Next.js", "Tailwind CSS", "Supabase", "Recharts"],
      liveLink: "#",
      featured: false,
      preview: "bars" as const,
    },
  ];

  const barHeights = [40, 65, 30, 80, 55, 90, 45];

  return (
    <section id="projects" className="py-20 px-6 md:px-8 max-w-5xl mx-auto">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-3">
      </p>
      <h2 className="text-3xl md:text-4xl font-display font-medium text-[#f2ece1] mb-12 pb-4 border-b border-[#2a2118]">
        Projects<span className="text-[#e63946]">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#15120e] border border-[#2a2118] rounded-lg overflow-hidden flex flex-col hover:border-[#e63946] transition-colors duration-300"
          >
            {/* Preview: reuses the scheduling-grid motif for the CSP project so
                the thumbnail actually shows what the project does, rather than
                a placeholder box. */}
            {project.preview === "grid" ? (
              <div className="h-48 w-full border-b border-[#2a2118] bg-[#110e0a] flex items-center justify-center p-6">
              </div>
            ) : (
              <div className="h-48 w-full border-b border-[#2a2118] bg-[#110e0a] flex items-end justify-center gap-2 p-8">
                {barHeights.map((h, i) => (
                  <div
                    key={i}
                    className="w-4 rounded-t-sm bg-linear-to-t from-[#e63946] to-[#d4af37]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            )}

            <div className="p-6 flex flex-col grow">
              <div className="flex justify-between items-start mb-4 gap-3">
                <h3 className="text-xl font-display font-medium text-[#f2ece1]">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-wide text-[#0c0a08] bg-[#d4af37] px-2 py-1 rounded-sm">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-[#93897a] mb-6 grow text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="font-mono text-[11px] text-[#93897a] bg-[#1c170f] border border-[#2a2118] px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto border-t border-[#2a2118] pt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#f2ece1] hover:text-[#e63946] transition-colors"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}