'use client'

import { AboutWindow } from '@/components/overlays/about-window'
import { ContactWindow } from '@/components/overlays/contact-window'
import { MusicWindow } from '@/components/overlays/music-window'
import { PosterWindow } from '@/components/overlays/poster-window'
import { ProjectsWindow } from '@/components/overlays/projects-window'
import { ResumeWindow } from '@/components/overlays/resume-window'
import { EnterScreen } from '@/components/room/enter-screen'
import { ExperienceWindow } from '@/components/overlays/experience-window'
import { RoomProvider, useRoom } from '@/components/room/room-provider'
import { RoomScene } from '@/components/room/room-scene'

function Portfolio() {
  const { entered, activeView, toast } = useRoom()

  return (
    <main className="min-h-[100dvh] bg-background">
      {!entered && <EnterScreen />}
      {entered && <RoomScene />}
      {activeView === 'about' && <AboutWindow />}
      {activeView === 'contact' && <ContactWindow />}
      {activeView === 'music' && <MusicWindow />}
      {activeView === 'poster' && <PosterWindow />}
      {activeView === 'projects' && <ProjectsWindow />}
      {activeView === 'experience' && <ExperienceWindow />}
      {activeView === 'resume' && <ResumeWindow />}
      {toast && (
        <div role="status" className="pixel-panel fixed bottom-5 left-1/2 z-50 -translate-x-1/2 px-4 py-3 text-xs text-foreground">
          {toast}
        </div>
      )}
    </main>
  )
}

export default function Page() {
  return (
    <RoomProvider>
      <Portfolio />
    </RoomProvider>
  )
}
