import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

// Display face — carries the personality of the headline. Used with
// restraint (hero + section headings only).
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "WONK"],
});

// System/data face — dates, labels, status lines, nav. Reinforces the
// "engineering log" register throughout the page.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Body face — everything else. Quiet and readable.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heiroll Sunga — Full Stack Developer",
  description:
    "Portfolio of Heiroll Iane Sunga — a Full Stack Developer and Computer Science student at Emilio Aguinaldo College, building real-time, automated web applications with React, Next.js, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jetbrainsMono.variable} ${inter.variable}`}
    >
      <body className="antialiased bg-[#0c0a08] font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}