import { Track } from 'react-native-track-player';

export interface PlaylistProps {
  isWidgetShown: boolean;
  isPlaying: boolean;
  isBuffering: boolean;
  currentTrack: number;
  songs: Track[];
}
