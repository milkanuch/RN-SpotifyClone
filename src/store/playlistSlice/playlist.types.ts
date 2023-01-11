import { Sound } from 'expo-av/build/Audio/Sound';

import { SongProps } from 'types/song';

export interface PlaylistProps {
  isWidgetShown: boolean;
  repeat: boolean;
  isPlaying: boolean;
  duration: number | undefined;
  position: number;
  songIndex: number;
  playlistTitle: string;
  sound: Sound;
  playlist: SongProps[];
}
