import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { OPEN_SANS } from 'constants/fonts';
import { responsiveWidth } from 'constants/scale';

const BORDER_RADIUS = 4;

const CONTAINER_WIDTH_PERCENTAGE = 46;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.darkGray,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    margin: 5,
    width: responsiveWidth(CONTAINER_WIDTH_PERCENTAGE),
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
    fontFamily: OPEN_SANS.bold,
    padding: 5,
  },
});

export default styles;
