import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { OPEN_SANS } from 'constants/fonts';

const styles = StyleSheet.create({
  duration: {
    color: COLORS.white,
    fontFamily: OPEN_SANS.regular,
    fontSize: 12,
  },
  durationContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
