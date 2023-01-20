import { SongProps } from 'types/song';

export interface PlaylistState {
  isWidgetShown: boolean;
  isPlaying: boolean;
  isBuffering: boolean;
  currentTrack: number;
  songs: SongProps[];
}
