import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { OPEN_SANS_BOLD } from 'constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    color: COLORS.white,
    fontFamily: OPEN_SANS_BOLD,
    fontSize: 24,
  },
});

export default styles;
