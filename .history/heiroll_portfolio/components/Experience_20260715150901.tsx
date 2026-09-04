export default function Experience() {
  const jobs = [
    {
      id: 1,
      role: "Software Engineer Intern",
      company: "Microgenesis Business Systems",
      date: "Jun 2025 — Jul 2025",
      metrics:
        "Engineered responsive UIs for the Mgenius LMS. Resolved over 25 frontend tickets by spearheading mobile-responsive redesigns for admin dashboards. Achieved a 4.0/4.0 'Outstanding' rating for resolving integration issues.",
    },
    {
      id: 2,
      role: "English Test Assessor",
      company: "GNGN Inc.",
      date: "Jul 2022 — Sep 2022",
      metrics:
        "Evaluated exactly 4,817 proficiency tests in a remote environment, demonstrating rigorous attention to detail, strict adherence to scoring guidelines, and high-volume data processing reliability.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-8 max-w-4xl mx-auto">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-3">
        // track record
      </p>
      <h2 className="text-3xl md:text-4xl font-display font-medium text-[#f2ece1] mb-14 pb-4 border-b border-[#2a2118]">
        Experience<span className="text-[#e63946]">.</span>
      </h2>

      <div className="relative pl-8 md:pl-10 space-y-14 before:content-[''] before:absolute before:left-[7px] md:before:left-[9px] before:top-2 before:bottom-2 before:w-px before:bg-[#2a2118]">
        {jobs.map((job) => (
          <div key={job.id} className="relative">
            <span className="absolute -left-8 md:-left-10 top-1.5 h-3.5 w-3.5 rounded-full bg-[#0c0a08] border-2 border-[#e63946]" />

            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 md:gap-4 mb-3">
              <div>
                <h3 className="font-display text-xl md:text-2xl text-[#f2ece1]">
                  {job.role}
                </h3>
                <p className="text-[#e63946] font-medium text-sm md:text-base">
                  {job.company}
                </p>
              </div>
              <span className="font-mono text-xs text-[#93897a] whitespace-nowrap">
                {job.date}
              </span>
            </div>

            <p className="text-[#93897a] leading-relaxed text-sm md:text-base max-w-2xl">
              {job.metrics}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}