import { SharedValue } from 'react-native-reanimated';

export interface AlbumInfoProps {
  artistHeadline: string;
  likes: number;
  name: string;
  imageUri: string;
  scrollY: SharedValue<number>;
}
