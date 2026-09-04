"use client"

import { useRef } from "react"
import Image from "next/image"
import { useRoom } from "@/components/room/room-provider"
import { OverlayFrame } from "@/components/overlays/overlay-frame"
import { posters } from "@/lib/data/posters"
import { Upload, RotateCcw, ImageOff } from "lucide-react"

export function PosterWindow() {
  const {
    activeView,
    close,
    focusedPoster,
    posterOverrides,
    setPosterOverride,
    clearPosterOverride,
    showToast,
  } = useRoom()
  const open = activeView === "poster"
  const fileRef = useRef<HTMLInputElement | null>(null)

  const idx = focusedPoster ?? 0
  const poster = posters[idx]
  const override = posterOverrides[idx]
  const src = override || poster?.image

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith("image/")) {
      showToast("That is not an image file")
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      setPosterOverride(idx, reader.result as string)
      showToast("Poster updated for this session")
    }
    reader.readAsDataURL(file)
  }

  if (!poster) return null

  return (
    <OverlayFrame open={open} onClose={close} title={`frame-${idx + 1}`} accent="var(--accent-poster)">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 md:flex-row md:items-start">
        <div className="pixel-border relative mx-auto aspect-[3/4] w-56 shrink-0 overflow-hidden bg-muted">
          {src ? (
            <Image
              src={src || "/placeholder.svg"}
              alt={poster.title}
              fill
              className="object-cover [image-rendering:pixelated]"
              sizes="224px"
              unoptimized={!!override}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-muted-foreground">
              <ImageOff className="h-8 w-8" />
              <span className="px-4 text-center text-[10px]">Empty frame</span>
            </div>
          )}
        </div>

        <div className="flex-1">
          <h2 className="font-display text-base text-foreground sm:text-lg">{poster.title}</h2>
          {poster.caption && (
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{poster.caption}</p>
          )}

          <div className="mt-5 rounded-none border-2 border-dashed border-border p-4">
            <h3 className="font-display text-[11px] tracking-wider text-[var(--accent-poster)]">
              MAKE IT YOURS
            </h3>
            <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
              Hang your own art in this frame. Upload an image to preview it on the wall right now, or
              drop a file into <span className="text-foreground">/public/assets/posters/</span> and edit{" "}
              <span className="text-foreground">lib/data/posters.ts</span> to keep it permanently.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => fileRef.current?.click()}
                className="pixel-border inline-flex items-center gap-2 bg-[var(--accent-poster)] px-3 py-2 text-[10px] text-[#1a1533] transition-transform hover:-translate-y-0.5"
              >
                <Upload className="h-3.5 w-3.5" />
                UPLOAD IMAGE
              </button>
              {override && (
                <button
                  onClick={() => {
                    clearPosterOverride(idx)
                    showToast("Reverted to default")
                  }}
                  className="pixel-border inline-flex items-center gap-2 bg-muted px-3 py-2 text-[10px] text-foreground transition-transform hover:-translate-y-0.5"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  RESET
                </button>
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </OverlayFrame>
  )
}
