import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { OPEN_SANS } from 'constants/fonts';

const PADDING = 16;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.greenBrand,
    borderRadius: 50,
    padding: PADDING,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: OPEN_SANS.semiBold,
    textAlign: 'center',
  },
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: PADDING,
  },
  error: {
    color: COLORS.white,
    fontFamily: OPEN_SANS.bold,
    fontSize: 18,
    paddingVertical: PADDING,
  },
  subtitle: {
    color: COLORS.lightGray,
    fontFamily: OPEN_SANS.extraBold,
    fontSize: 32,
  },
  title: {
    color: COLORS.darkGray,
    fontFamily: OPEN_SANS.bold,
    fontSize: 48,
    paddingBottom: PADDING,
  },
});

export default styles;
