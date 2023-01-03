import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { OPEN_SANS } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    color: COLORS.white,
    fontFamily: OPEN_SANS.bold,
    fontSize: 24,
  },
});

export default styles;
