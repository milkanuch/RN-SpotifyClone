import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { OPEN_SANS } from 'constants/fonts';

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
    alignItems: 'center',
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'space-between',
  },
});

export default styles;
