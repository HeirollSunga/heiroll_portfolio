"use client"

import { useRoom } from "@/components/room/room-provider"
import { OverlayFrame } from "@/components/overlays/overlay-frame"
import { profile } from "@/lib/data/profile"
import { Mail, Phone } from "lucide-react"

export function ContactWindow() {
  const { activeOverlay, closeOverlay } = useRoom()
  const open = activeOverlay === "contact"
  return (
    <OverlayFrame open={open} onClose={closeOverlay} title="sticky-notes" accent="var(--accent-note)">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 md:flex-row md:gap-16">
        <div className="flex-1 py-2">
          <h2 className="font-display text-base text-foreground sm:text-lg">Contact me here</h2>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            I&apos;d love to hear from you. Choose a contact option to get in touch.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:w-64">
          <a
            href={`mailto:${profile.contact.email}`}
            className="pixel-border flex items-center gap-3 bg-muted px-4 py-3 text-[10px] text-foreground transition-colors hover:bg-(--accent-monitor) hover:text-[#f9f9f9]"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span className="truncate">{profile.contact.email}</span>
          </a>
          <a
            href={`tel:${profile.contact.number}`}
            className="pixel-border flex items-center gap-3 bg-muted px-4 py-3 text-[10px] text-foreground transition-colors hover:bg-(--accent-monitor) hover:text-[#f9f9f9]"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span className="truncate">{profile.contact.number}</span>
          </a>
          {Object.entries(profile.contact)
            .filter(([label]) => label !== "email" && label !== "number")
            .map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="pixel-border flex items-center justify-between gap-3 bg-muted px-4 py-3 text-[10px] text-foreground transition-transform hover:-translate-y-0.5"
            >
              <span>{label.toUpperCase()}</span>
              <span className="text-muted-foreground">OPEN</span>
            </a>
            ))}
        </div>
      </div>
    </OverlayFrame>
  )
}
