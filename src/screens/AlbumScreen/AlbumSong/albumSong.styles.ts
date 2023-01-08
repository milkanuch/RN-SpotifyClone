import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { OPEN_SANS } from 'constants/fonts';

const PADDING_HORIZONTAL = 10;
const BORDER_RADIUS = 5;

const styles = StyleSheet.create({
  artist: {
    color: COLORS.lightGray,
    fontFamily: OPEN_SANS.regular,
    fontSize: 16,
  },
  container: {
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  favorites: {
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  image: {
    borderRadius: BORDER_RADIUS,
    height: 64,
    width: 64,
  },
  songContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  songInfo: {
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  title: {
    color: COLORS.white,
    fontFamily: OPEN_SANS.semiBold,
    fontSize: 18,
  },
});

export default styles;
