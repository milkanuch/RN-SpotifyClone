import { SharedValue } from 'react-native-reanimated';

export interface AlbumHeaderProps {
  title?: string;
  scrollY: SharedValue<number>;
}
