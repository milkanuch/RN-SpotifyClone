import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { OPEN_SANS_BOLD } from 'constants/fonts';

const BORDER_RADIUS = 4;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.darkGray,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    margin: 5,
    width: '48%',
  },
  image: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS,
    height: 64,
    width: 64,
  },
  title: {
    color: COLORS.white,
    flexShrink: 1,
    fontFamily: OPEN_SANS_BOLD,
    padding: 5,
  },
});

export default styles;
