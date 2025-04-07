import * as THREE from 'three';

class AudioManager {
  private listener: THREE.AudioListener;
  private audioLoader: THREE.AudioLoader;
  private buffers: Map<string, AudioBuffer>;
  private activeSounds: Map<string, THREE.Audio>;

  constructor() {
    this.listener = new THREE.AudioListener();
    this.audioLoader = new THREE.AudioLoader();
    this.buffers = new Map();
    this.activeSounds = new Map();
  }

  getListener() {
    return this.listener;
  }

  async load(name: string, url: string): Promise<void> {
    if (this.buffers.has(name)) return;

    const buffer = await this.audioLoader.loadAsync(url);
    this.buffers.set(name, buffer);
  }

  play(name: string, options?: { loop?: boolean; volume?: number; playbackRate?: number }) {
    const buffer = this.buffers.get(name);
    if (!buffer) {
      console.warn(`Sound "${name}" not loaded`);
      return;
    }
  
    const existing = this.activeSounds.get(name);
    if (existing && options?.loop) {
      return;
    }
    if (this.activeSounds.has(name)) {
      return;
    }
  
    const sound = new THREE.Audio(this.listener);
    sound.setBuffer(buffer);
    sound.setLoop(options?.loop ?? false);
    sound.setVolume(options?.volume ?? 0.5);
    sound.setPlaybackRate(options?.playbackRate ?? 1.0);
    sound.play();
  
    this.activeSounds.set(name, sound); // <-- always store it
  
    if (!options?.loop) {
      sound.source.onended = () => {
        this.activeSounds.delete(name);
      };
    }
  }
  

  stop(name: string) {
    const sound = this.activeSounds.get(name);
    if (sound) {
      sound.stop();
      this.activeSounds.delete(name);
    }
  }

  getVolume(name: string) {
    const sound = this.activeSounds.get(name);
    if (!sound) return 0;
    return sound.getVolume();
  }
  
  update(name: string, updates: { volume?: number; playbackRate?: number }) {
    const sound = this.activeSounds.get(name);
    if (!sound) return;

    if (updates.volume !== undefined) {
      sound.setVolume(updates.volume);
    }
    if (updates.playbackRate !== undefined) {
      sound.setPlaybackRate(updates.playbackRate);
    }
  }

  isPlaying(name: string) {
    const sound = this.activeSounds.get(name);
    return !!sound?.isPlaying;
  }
}

export const audioManager = new AudioManager();
