import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';

export interface IconButtonProps {
  iconName: ImageSourcePropType;
  onPress: TouchableOpacityProps['onPress'];
}
