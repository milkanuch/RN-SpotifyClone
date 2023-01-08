import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { SCREEN_PADDING } from 'constants/scale';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: SCREEN_PADDING,
  },
  song: {
    color: COLORS.white,
    fontSize: 24,
  },
});

export default styles;
