/**
 * Traditional Indian Wedding Shehnai & Cinematic Audio Engine
 * Plays authentic wedding tracks via HTML5 Audio with fallback to Web Audio synthesizer.
 */

const NOTES = {
  SA_LOW: 138.59,
  PA_LOW: 207.65,
  DHA_LOW: 233.08,
  NI_LOW: 261.63,
  SA: 277.18, // C#4
  RE: 311.13, // D#4
  GA: 349.23, // F4
  MA: 369.99, // F#4
  PA: 415.30, // G#4
  DHA: 466.16, // A#4
  NI: 523.25, // C5
  SA_HIGH: 554.37, // C#5
  RE_HIGH: 622.25, // D#5
  GA_HIGH: 698.46, // F5
};

const WEDDING_MELODY: Array<{ note: number; duration: number; slideTo?: number }> = [
  { note: NOTES.SA, duration: 0.8 },
  { note: NOTES.GA, duration: 0.8, slideTo: NOTES.MA },
  { note: NOTES.PA, duration: 1.2 },
  { note: NOTES.PA, duration: 0.6 },
  { note: NOTES.DHA, duration: 0.6 },
  { note: NOTES.PA, duration: 1.0 },
  { note: NOTES.MA, duration: 0.6 },
  { note: NOTES.GA, duration: 1.0 },
  { note: NOTES.RE, duration: 0.6 },
  { note: NOTES.SA, duration: 1.4 },
  { note: NOTES.PA, duration: 0.8 },
  { note: NOTES.DHA, duration: 0.6 },
  { note: NOTES.NI, duration: 0.8 },
  { note: NOTES.SA_HIGH, duration: 1.4 },
  { note: NOTES.NI, duration: 0.5 },
  { note: NOTES.DHA, duration: 0.5 },
  { note: NOTES.PA, duration: 1.2 },
  { note: NOTES.MA, duration: 0.6, slideTo: NOTES.GA },
  { note: NOTES.RE, duration: 0.8 },
  { note: NOTES.SA, duration: 2.0 },
];

export class ShehnaiEngine {
  private ctx: AudioContext | null = null;
  private isSynthesizing = false;
  private currentStep = 0;
  private timer: NodeJS.Timeout | null = null;
  private masterGain: GainNode | null = null;
  private isMuted = false;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private audioEl: HTMLAudioElement | null = null;
  private useSynthFallback = false;

  constructor() {
    // Lazy initialized on first user gesture
  }

  private initContext() {
    if (typeof window === "undefined") return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.28, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  public async startAudio(
    audioSrc: string = "https://ik.imagekit.io/gaurxverse/Wedding/cinematic.opus?updatedAt=1794936404217"
  ): Promise<boolean> {
    if (typeof window === "undefined") return false;

    const sourcesToTry = [audioSrc].filter(Boolean);

    for (const src of sourcesToTry) {
      try {
        if (!this.audioEl) {
          this.audioEl = new Audio();
          this.audioEl.loop = true;
          this.audioEl.volume = 0.65;
        }
        if (this.audioEl.src !== src && !this.audioEl.src.endsWith(src)) {
          this.audioEl.src = src;
        }
        await this.audioEl.play();
        this.useSynthFallback = false;
        return true;
      } catch (err) {
        console.warn(`Audio playback failed for ${src}, falling back...`, err);
      }
    }

    try {
      this.initContext();
      if (this.ctx && this.ctx.state === "suspended") {
        await this.ctx.resume();
      }
      this.startShehnaiMelody();
      this.useSynthFallback = true;
      return true;
    } catch (e) {
      console.error("Audio engine failed to start:", e);
      return false;
    }
  }

  public pause() {
    if (this.audioEl && !this.audioEl.paused) {
      this.audioEl.pause();
    }
    this.stopShehnaiMelody();
  }

  public resume() {
    if (this.audioEl && !this.useSynthFallback) {
      this.audioEl.play().catch(() => {
        this.startShehnaiMelody();
      });
    } else {
      this.startShehnaiMelody();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.audioEl) {
      this.audioEl.muted = this.isMuted;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(
        this.isMuted ? 0 : 0.28,
        this.ctx.currentTime,
        0.05
      );
    }
    return this.isMuted;
  }

  public isMute(): boolean {
    return this.isMuted;
  }

  private startShehnaiMelody() {
    if (!this.ctx || this.isSynthesizing) return;
    this.isSynthesizing = true;
    this.currentStep = 0;
    this.startTanpuraDrone();
    this.playNextNote();
  }

  private stopShehnaiMelody() {
    this.isSynthesizing = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.stopTanpuraDrone();
  }

  private startTanpuraDrone() {
    if (!this.ctx || !this.masterGain) return;
    try {
      this.stopTanpuraDrone();
      const droneGain = this.ctx.createGain();
      droneGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      droneGain.connect(this.masterGain);

      this.droneOsc1 = this.ctx.createOscillator();
      this.droneOsc1.type = "sawtooth";
      this.droneOsc1.frequency.setValueAtTime(NOTES.SA_LOW, this.ctx.currentTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, this.ctx.currentTime);
      this.droneOsc1.connect(filter);

      this.droneOsc2 = this.ctx.createOscillator();
      this.droneOsc2.type = "triangle";
      this.droneOsc2.frequency.setValueAtTime(NOTES.PA_LOW, this.ctx.currentTime);
      this.droneOsc2.connect(filter);

      filter.connect(droneGain);
      this.droneOsc1.start();
      this.droneOsc2.start();
    } catch {
      // Ignored
    }
  }

  private stopTanpuraDrone() {
    try {
      if (this.droneOsc1) {
        this.droneOsc1.stop();
        this.droneOsc1.disconnect();
        this.droneOsc1 = null;
      }
      if (this.droneOsc2) {
        this.droneOsc2.stop();
        this.droneOsc2.disconnect();
        this.droneOsc2 = null;
      }
    } catch {
      // Ignored
    }
  }

  private playNextNote() {
    if (!this.isSynthesizing || !this.ctx || !this.masterGain) return;

    const melodyItem = WEDDING_MELODY[this.currentStep];
    const duration = melodyItem.duration;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    osc1.type = "sawtooth";
    osc2.type = "square";

    const bandpass = this.ctx.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.setValueAtTime(1400, now);
    bandpass.Q.setValueAtTime(3.5, now);

    const vibrato = this.ctx.createOscillator();
    const vibratoGain = this.ctx.createGain();
    vibrato.frequency.setValueAtTime(5.8, now);
    vibratoGain.gain.setValueAtTime(5.5, now);
    vibrato.connect(osc1.frequency);
    vibrato.connect(osc2.frequency);
    vibrato.start(now);

    osc1.frequency.setValueAtTime(melodyItem.note, now);
    osc2.frequency.setValueAtTime(melodyItem.note * 1.002, now);

    if (melodyItem.slideTo) {
      osc1.frequency.exponentialRampToValueAtTime(melodyItem.slideTo, now + duration * 0.85);
      osc2.frequency.exponentialRampToValueAtTime(melodyItem.slideTo * 1.002, now + duration * 0.85);
    }

    const noteGain = this.ctx.createGain();
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.exponentialRampToValueAtTime(0.45, now + 0.12);
    noteGain.gain.setValueAtTime(0.40, now + duration - 0.15);
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc1.connect(bandpass);
    osc2.connect(bandpass);
    bandpass.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);

    const stopTime = now + duration + 0.05;
    osc1.stop(stopTime);
    osc2.stop(stopTime);
    vibrato.stop(stopTime);

    this.currentStep = (this.currentStep + 1) % WEDDING_MELODY.length;
    this.timer = setTimeout(() => {
      this.playNextNote();
    }, duration * 950);
  }
}

export const globalShehnaiPlayer = typeof window !== "undefined" ? new ShehnaiEngine() : null;