import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { OPEN_SANS } from 'constants/fonts';

const styles = StyleSheet.create({
  artistHeadline: {
    color: COLORS.white,
    fontFamily: OPEN_SANS.semiBold,
    fontSize: 16,
  },
  name: {
    color: COLORS.white,
    fontFamily: OPEN_SANS.bold,
    fontSize: 20,
  },
});

export default styles;
