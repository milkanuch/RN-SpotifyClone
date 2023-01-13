import { AVPlaybackStatus } from 'expo-av';
import { Sound } from 'expo-av/build/Audio/Sound';

class Song {
  public sound: Sound;
  public position: number;
  public duration: number | undefined;
  public isPlaying: boolean;
  public isRepeat: boolean;
  public isLoading: boolean;

  private static _instance: Song;

  constructor() {
    if (Song._instance) {
      throw new Error('New instance cannot be created!!');
    }

    Song._instance = this;
    this.position = 0;
    this.duration = 0;
    this.isPlaying = false;
    this.isRepeat = false;
    this.isLoading = true;
    this.sound = new Sound();
  }

  onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      if (!status.isBuffering) this.setIsPlaying(status.isPlaying);
      this.setDuration(status.durationMillis);
      this.setPosition(status.positionMillis);
    } else if (status.error) {
      throw new Error(status.error);
    }
  };

  playCurrentSong = async () => {
    try {
      const { sound: newSound } = await Sound.createAsync(
        require('assets/sound/once-twice-melody.mp3'),
        { shouldPlay: true },
        this.onPlaybackStatusUpdate,
      );
      this.setSound(newSound);
      this.setIsLoading(false);
    } catch (error) {
      throw new Error("There's no song yet");
    }
  };

  handlePlayPause = async () => {
    if (this.isPlaying) {
      await this.sound.pauseAsync();
      this.setIsPlaying(false);
    } else {
      await this.sound.playAsync();
      this.setIsPlaying(true);
    }
  };

  handleRepeat = async () => {
    if (!this.sound) {
      return;
    }
    if (!this.isRepeat) {
      await this.sound.setIsLoopingAsync(true);
      this.setIsRepeat(true);
    } else {
      await this.sound.setIsLoopingAsync(false);
      this.setIsRepeat(false);
    }
  };

  handleChangeValue = (value: number) => {
    if (this.sound) {
      this.setPosition(value);
      this.sound.setPositionAsync(value);
    }
  };

  setSound(sound: Sound) {
    this.sound = sound;
  }

  setPosition(position: number) {
    this.position = position;
  }

  setDuration(duration: number | undefined) {
    this.duration = duration;
  }

  setIsPlaying(isPlaying: boolean) {
    this.isPlaying = isPlaying;
  }

  setIsRepeat(isRepeat: boolean) {
    this.isRepeat = isRepeat;
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}

export const song = Object.freeze(new Song());
