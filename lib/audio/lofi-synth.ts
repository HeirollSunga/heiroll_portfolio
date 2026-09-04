// -----------------------------------------------------------------------------
// LOFI SYNTH ENGINE
// Generates gentle ambient chord loops with the Web Audio API so the vinyl
// player produces real sound even without any mp3 files. Each track gets its
// own chord progression + tempo derived from its id, so they sound distinct.
// -----------------------------------------------------------------------------

// Note name -> frequency (A4 = 440)
const NOTE_FREQ: Record<string, number> = {
  C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.0, A3: 220.0, B3: 246.94,
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.0, A4: 440.0, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.0,
}

type Progression = { chords: string[][]; bpm: number }

const PROGRESSIONS: Record<string, Progression> = {
  "midnight-run": {
    bpm: 96,
    chords: [
      ["A3", "C4", "E4"],
      ["F3", "A3", "C4"],
      ["C4", "E4", "G4"],
      ["G3", "B3", "D4"],
    ],
  },
  "neon-tears": {
    bpm: 78,
    chords: [
      ["D3", "F3", "A3"],
      ["A3", "C4", "E4"],
      ["B3", "D4", "F4"],
      ["G3", "B3", "D4"],
    ],
  },
  "after-hours": {
    bpm: 68,
    chords: [
      ["C3", "E3", "G3"],
      ["E3", "G3", "B3"],
      ["F3", "A3", "C4"],
      ["G3", "B3", "D4"],
    ],
  },
  "pixel-dreams": {
    bpm: 110,
    chords: [
      ["E3", "G3", "B3"],
      ["C4", "E4", "G4"],
      ["A3", "C4", "E4"],
      ["D4", "F4", "A4"],
    ],
  },
}

const DEFAULT: Progression = PROGRESSIONS["after-hours"]

export class LofiSynth {
  private ctx: AudioContext | null = null
  private master: GainNode | null = null
  private timer: ReturnType<typeof setTimeout> | null = null
  private step = 0
  private prog: Progression = DEFAULT
  private _volume = 0.6
  playing = false

  private ensureContext() {
    if (this.ctx) return
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    this.ctx = new AC()
    this.master = this.ctx.createGain()
    this.master.gain.value = this._volume
    this.master.connect(this.ctx.destination)
  }

  setTrack(id: string) {
    this.prog = PROGRESSIONS[id] ?? DEFAULT
    this.step = 0
  }

  setVolume(v: number) {
    this._volume = v
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05)
    }
  }

  async start(id?: string) {
    this.ensureContext()
    if (!this.ctx || !this.master) return
    if (id) this.setTrack(id)
    if (this.ctx.state === "suspended") await this.ctx.resume()
    this.playing = true
    this.loop()
  }

  stop() {
    this.playing = false
    if (this.timer) clearTimeout(this.timer)
    this.timer = null
  }

  private loop() {
    if (!this.playing || !this.ctx || !this.master) return
    const beat = 60 / this.prog.bpm
    const barLen = beat * 2 // each chord lasts two beats
    const chord = this.prog.chords[this.step % this.prog.chords.length]
    this.playChord(chord, barLen)
    // soft bass root an octave down
    this.playBass(chord[0], barLen)
    this.step++
    this.timer = setTimeout(() => this.loop(), barLen * 1000)
  }

  private playChord(notes: string[], dur: number) {
    if (!this.ctx || !this.master) return
    const now = this.ctx.currentTime
    notes.forEach((n) => {
      const freq = NOTE_FREQ[n]
      if (!freq) return
      const osc = this.ctx!.createOscillator()
      const gain = this.ctx!.createGain()
      osc.type = "triangle"
      osc.frequency.value = freq
      // gentle attack + release envelope
      gain.gain.setValueAtTime(0, now)
      gain.gain.linearRampToValueAtTime(0.12, now + 0.08)
      gain.gain.linearRampToValueAtTime(0.001, now + dur * 0.95)
      osc.connect(gain)
      gain.connect(this.master!)
      osc.start(now)
      osc.stop(now + dur)
    })
  }

  private playBass(note: string, dur: number) {
    if (!this.ctx || !this.master) return
    const freq = NOTE_FREQ[note]
    if (!freq) return
    const now = this.ctx.currentTime
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    osc.type = "sine"
    osc.frequency.value = freq / 2
    gain.gain.setValueAtTime(0, now)
    gain.gain.linearRampToValueAtTime(0.18, now + 0.05)
    gain.gain.linearRampToValueAtTime(0.001, now + dur * 0.9)
    osc.connect(gain)
    gain.connect(this.master)
    osc.start(now)
    osc.stop(now + dur)
  }
}

let singleton: LofiSynth | null = null
export function getSynth(): LofiSynth {
  if (!singleton) singleton = new LofiSynth()
  return singleton
}
