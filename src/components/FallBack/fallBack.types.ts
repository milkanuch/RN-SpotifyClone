import { TouchableOpacityProps } from 'react-native';

export interface FallBackProps {
  error: Error;
  onPress: TouchableOpacityProps['onPress'];
}
