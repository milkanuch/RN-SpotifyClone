import { ViewStyle, ImageSourcePropType } from 'react-native';

import { SharedValue } from 'react-native-reanimated';

export interface AlbumHeaderProps {
  title?: string;
  scrollY?: SharedValue<number>;
  iconName: ImageSourcePropType;
  containerStyle?: ViewStyle;
}
