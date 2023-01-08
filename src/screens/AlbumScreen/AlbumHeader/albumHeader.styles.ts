import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { OPEN_SANS } from 'constants/fonts';
import { SCREEN_PADDING } from 'constants/scale';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.black,
    flexDirection: 'row',
    padding: SCREEN_PADDING,
  },
  textContainer: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: COLORS.white,
    fontFamily: OPEN_SANS.semiBold,
    fontSize: 18,
  },
});

export default styles;
