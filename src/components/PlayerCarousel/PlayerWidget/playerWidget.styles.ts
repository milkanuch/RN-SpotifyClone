import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { OPEN_SANS } from 'constants/fonts';
import { responsiveWidth } from 'constants/scale';

const BORDER_RADIUS = 10;

const CONTAINER_WIDTH_PERCENTAGE = 100;

const styles = StyleSheet.create({
  activeButton: {
    tintColor: COLORS.greenBrand,
  },
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%',
  },
  container: {
    backgroundColor: COLORS.darkGray,
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: responsiveWidth(CONTAINER_WIDTH_PERCENTAGE),
  },
  image: {
    borderRadius: BORDER_RADIUS,
    height: 56,
    width: 56,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  songArtist: {
    color: COLORS.lightGray,
    fontFamily: OPEN_SANS.medium,
    fontSize: 14,
    paddingHorizontal: 10,
  },
  songName: {
    color: COLORS.greenBrand,
    fontFamily: OPEN_SANS.bold,
    fontSize: 16,
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    flexShrink: 1,
    textAlign: 'center',
  },
});

export default styles;
