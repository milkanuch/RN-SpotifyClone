import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import {
  responsiveHeight,
  responsiveWidth,
  SCREEN_PADDING,
} from 'constants/scale';

const MARGIN_PERCENTAGE = 3;

const IMAGE_HEIGHT_PERCENTAGE = 50;

const IMAGE_WIDTH_PERCENTAGE = 50;

const SLIDER_HEIGHT_PERCENTAGE = 5;

const SLIDER_WIDTH_PERCENTAGE = 98;

const MARGIN = responsiveHeight(MARGIN_PERCENTAGE);

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
    height: responsiveHeight(IMAGE_HEIGHT_PERCENTAGE),
    marginTop: MARGIN,
    width: responsiveHeight(IMAGE_WIDTH_PERCENTAGE),
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
    height: responsiveHeight(SLIDER_HEIGHT_PERCENTAGE),
    width: responsiveWidth(SLIDER_WIDTH_PERCENTAGE),
  },
});

export default styles;
