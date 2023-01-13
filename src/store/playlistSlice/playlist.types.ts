import { SongProps } from 'types/song';

export interface PlaylistProps {
  isWidgetShown: boolean;
  songIndex: number;
  playlistTitle: string;
  playlist: SongProps[];
}
