import { SharedValue } from 'react-native-reanimated';

export interface AlbumTitleProps {
  name: string;
  artistHeadline: string;
  scrollY: SharedValue<number>;
}
