export default function Experience() {
  // This is our "Database" Array
  const jobs = [
    {
      id: 1,
      role: "Software Engineer Intern",
      company: "Microgenesis Business Systems",
      date: "Jun 2025 - Jul 2025",
      metrics: "Engineered responsive UIs for the Mgenius LMS. Resolved over 25 frontend tickets by spearheading mobile-responsive redesigns for admin dashboards. Achieved a 4.0/4.0 'Outstanding' rating for resolving integration issues."
    },
    {
      id: 2,
      role: "English Test Assessor",
      company: "GNGN Inc.",
      date: "Jul 2022 - Sep 2022",
      metrics: "Evaluated exactly 4,817 proficiency tests in a remote environment, demonstrating rigorous attention to detail, strict adherence to scoring guidelines, and high-volume data processing reliability."
    }
  ];

  return (
    <section id="experience" className="py-20 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#F8F9FA] mb-12 border-b border-[#333333] pb-4">
        Experience<span className="text-[#E63946]">.</span>
      </h2>

      <div className="space-y-8">
        {/* Here is the magic map() function */}
        {jobs.map((job) => (
          <div key={job.id} className="bg-[#111111] border border-[#222222] p-8 rounded-lg hover:border-[#E63946] transition-colors duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#F8F9FA]">{job.role}</h3>
                <p className="text-[#E63946] font-medium">{job.company}</p>
              </div>
              <span className="text-gray-500 text-sm mt-2 md:mt-0">{job.date}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {job.metrics}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}