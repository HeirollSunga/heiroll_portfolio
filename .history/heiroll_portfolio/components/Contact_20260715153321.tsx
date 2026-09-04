"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = `
Name: ${form.name}
Email: ${form.email}

${form.message}
`;

    const mailto = `mailto:heirollsunga24@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <footer
      id="contact"
      className="py-20 px-6 md:px-8 max-w-3xl mx-auto border-t border-[#2a2118] mt-12"
    >
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-4 text-center">
        CONTACT
      </p>

      <h2 className="text-3xl md:text-4xl font-display font-medium text-[#f2ece1] text-center mb-6">
        Let's Build Something
        <span className="text-[#e63946]">.</span>
      </h2>

      <p className="text-[#93897a] leading-relaxed max-w-xl mx-auto text-center mb-12">
        Have a project, internship, or job opportunity? Fill out the form below
        and your email app will open with everything ready to send.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm text-[#f2ece1] mb-2">
            Your Name
          </label>

          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-md bg-[#16120d] border border-[#2a2118] px-4 py-3 text-[#f2ece1] focus:border-[#d4af37] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-[#f2ece1] mb-2">
            Your Email
          </label>

          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md bg-[#16120d] border border-[#2a2118] px-4 py-3 text-[#f2ece1] focus:border-[#d4af37] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-[#f2ece1] mb-2">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="w-full rounded-md bg-[#16120d] border border-[#2a2118] px-4 py-3 text-[#f2ece1] focus:border-[#d4af37] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-[#f2ece1] mb-2">
            Message
          </label>

          <textarea
            name="message"
            rows={6}
            required
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-md bg-[#16120d] border border-[#2a2118] px-4 py-3 text-[#f2ece1] focus:border-[#d4af37] focus:outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#e63946] hover:bg-[#c72d39] transition-colors text-white font-medium py-3 rounded-md"
        >
          Send Email
        </button>
      </form>

      <p className="font-mono text-xs text-[#5c544a] tracking-wide text-center mt-16">
        · built with Next.js & Tailwind · ©{" "}
        {new Date().getFullYear()} Heiroll Sunga
      </p>
    </footer>
  );
}