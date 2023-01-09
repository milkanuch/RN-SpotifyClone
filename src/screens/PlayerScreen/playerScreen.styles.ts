import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import {
  responsiveHeight,
  responsiveWidth,
  SCREEN_PADDING,
} from 'constants/scale';

const MARGIN = responsiveHeight(3);

const styles = StyleSheet.create({
  activeButton: {
    tintColor: COLORS.greenBrand,
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: MARGIN,
  },
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'space-around',
  },
  image: {
    alignSelf: 'center',
    height: responsiveHeight(50),
    marginTop: MARGIN,
    width: responsiveHeight(45),
  },
  playButton: {
    tintColor: COLORS.black,
  },
  playButtonContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 360,
    height: 64,
    justifyContent: 'center',
    width: 64,
  },
  screen: {
    flex: 1,
    paddingHorizontal: SCREEN_PADDING,
  },
  slider: {
    height: responsiveHeight(5),
    width: responsiveWidth(98),
  },
});

export default styles;
