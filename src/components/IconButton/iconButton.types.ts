import {
  ImageSourcePropType,
  ImageStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export interface IconButtonProps {
  iconName: ImageSourcePropType;
  onPress: TouchableOpacityProps['onPress'];
  containerStyle?: ViewStyle;
  iconStyle?: ImageStyle;
}
