import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { OPEN_SANS } from 'constants/fonts';
import { responsiveWidth } from 'constants/scale';

const BORDER_RADIUS = 10;

const styles = StyleSheet.create({
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%',
  },
  container: {
    backgroundColor: COLORS.darkGray,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'space-around',
    marginHorizontal: 10,
    overflow: 'hidden',
    width: responsiveWidth(95),
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
