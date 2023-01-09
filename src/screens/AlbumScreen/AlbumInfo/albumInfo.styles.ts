import { StyleSheet } from 'react-native';

import { OPEN_SANS } from 'constants/fonts';
import { SCREEN_PADDING, responsiveWidth } from 'constants/scale';

const styles = StyleSheet.create({
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
    width: responsiveWidth(15),
  },
});

export default styles;
