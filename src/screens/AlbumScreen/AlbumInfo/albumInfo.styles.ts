import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { OPEN_SANS } from 'constants/fonts';
import { SCREEN_PADDING, responsiveWidth } from 'constants/scale';

const TWO_BUTTONS_WIDTH_PERCENTAGE = 15;

const styles = StyleSheet.create({
  activeButton: {
    tintColor: COLORS.greenBrand,
  },
  artistHeadline: {
    fontFamily: OPEN_SANS.semiBold,
    fontSize: 18,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SCREEN_PADDING,
  },
  container: {
    flex: 1,
    paddingVertical: SCREEN_PADDING,
  },
  playIcon: {
    tintColor: undefined,
  },
  twoButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(TWO_BUTTONS_WIDTH_PERCENTAGE),
  },
});

export default styles;
