import { TouchableOpacityProps } from 'react-native';

export interface SongTitleProps {
  songName?: string;
  songArtist?: string;
  songId?: number;
  onPress: TouchableOpacityProps['onPress'];
}
