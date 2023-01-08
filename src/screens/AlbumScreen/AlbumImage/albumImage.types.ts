import { SharedValue } from 'react-native-reanimated';

export interface AlbumImageProps {
  imageUri: string;
  scrollY: SharedValue<number>;
}
