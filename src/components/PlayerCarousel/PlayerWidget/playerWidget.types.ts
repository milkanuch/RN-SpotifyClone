import { SongProps } from 'types/song';

export type PlayerWidgetProps = Omit<SongProps, 'id'> & { id?: number };
