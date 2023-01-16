import { ResourceObject, Track } from 'react-native-track-player';

export type PlayerWidgetProps = Omit<Track, 'url'> & {
  url?: string | ResourceObject;
};
