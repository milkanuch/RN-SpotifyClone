import { DefaultTheme } from '@react-navigation/native';

import { COLORS } from 'constants/colors';

export const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.darkGray,
  },
};
