import { SongProps } from 'types/song';

export interface PlaylistProps {
  isWidgetShown: boolean;
  isPlaying: boolean;
  isBuffering: boolean;
  currentTrack: number;
  songs: SongProps[];
}
