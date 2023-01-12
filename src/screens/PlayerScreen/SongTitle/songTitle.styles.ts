import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { OPEN_SANS } from 'constants/fonts';
import { responsiveHeight } from 'constants/scale';

const TITLE_CONTAINER_MARGIN_TOP_PERCENTAGE = 10;

const styles = StyleSheet.create({
  artist: {
    color: COLORS.lightGray,
    fontFamily: OPEN_SANS.semiBold,
    fontSize: 16,
  },
  songName: {
    color: COLORS.white,
    fontFamily: OPEN_SANS.bold,
    fontSize: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    flex: 1.5,
    justifyContent: 'space-between',
    marginTop: responsiveHeight(TITLE_CONTAINER_MARGIN_TOP_PERCENTAGE),
  },
});

export default styles;
