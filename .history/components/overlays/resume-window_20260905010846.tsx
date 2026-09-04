"use client"

import { useRoom } from "@/components/room/room-provider"
import { OverlayFrame } from "@/components/overlays/overlay-frame"
import { profile } from "@/lib/data/profile"
import { experience } from "@/src/data/experience"
import { Download } from "lucide-react"

export function ResumeWindow() {
  const { activeOverlay, closeOverlay } = useRoom()
  const open = activeOverlay === "resume"

  return (
    <OverlayFrame
      open={open}
      onClose={closeOverlay}
      title="resume.pdf"
      accent="var(--accent-paper)"
      headerActions={
        <a
          href={profile.resumeUrl}
          download="HEIROLL SUNGA (CV).pdf"
          className="pixel-border inline-flex items-center gap-2 bg-var(--accent-paper) px-2 py-1 font-pixel text-[8px] text-[#f2f1fa] transition-transform hover:-translate-y-0.5 sm:text-[10px]"
        >
          <Download className="h-3.5 w-3.5" />
          DOWNLOAD
        </a>
      }
    >
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col gap-2 border-b-2 border-dashed border-border pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-lg text-foreground sm:text-xl">{profile.name}</h2>
            <p className="mt-1 text-xs text-muted-foreground">{profile.title}</p>
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{profile.summary}</p>

        <Section title="EXPERIENCE">
          <div className="flex flex-col gap-4">
            {experience.map((job) => (
              <div key={job.company} className="border-l-2 border-var(--accent-monitor) pl-3">
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h4 className="text-xs text-foreground">{job.position}</h4>
                  <span className="text-[10px] text-muted-foreground">{job.date}</span>
                </div>
                <p className="text-[11px] text-[var(--accent-monitor)]">{job.company}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="EDUCATION">
          {profile.education.map((ed) => (
            <div key={ed.school}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <div>
                  <h4 className="text-xs text-foreground">{ed.degree}</h4>
                  <p className="text-[11px] text-[var(--accent-monitor)]">{ed.school}</p>
                </div>
                <span className="text-[10px] text-muted-foreground">{ed.period}</span>
              </div>
              {ed.details && (
                <ul className="mt-3 space-y-1 border-l-2 border-border pl-3">
                  {ed.details.map((detail) => (
                    <li key={detail} className="text-[11px] leading-relaxed text-muted-foreground">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Section>

        <Section title="SKILLS">
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="pixel-border bg-muted px-2 py-1 text-[10px] text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>
      </div>
    </OverlayFrame>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="mb-3 font-display text-[11px] tracking-wider text-[var(--accent-paper)]">{title}</h3>
      {children}
    </div>
  )
}
