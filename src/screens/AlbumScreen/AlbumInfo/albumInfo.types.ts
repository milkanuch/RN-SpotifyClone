import { SharedValue } from 'react-native-reanimated';

export interface AlbumInfoProps {
  id: number;
  artistHeadline: string;
  name: string;
  imageUri: string;
  scrollY: SharedValue<number>;
}
