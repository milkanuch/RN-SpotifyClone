import { Dimensions } from 'react-native';

import Constants from 'expo-constants';

export const { height, width } = Dimensions.get('window');

export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const STATUS_BAR_HEIGHT = Constants.statusBarHeight ?? 0;

export const SCREEN_PADDING = 15;

export const CORRECT_WIDTH = width - SCREEN_PADDING;

const DEVICE_NAV_BAR_HEIGHT = 48;

export const CORRECT_HEIGHT =
  height -
  STATUS_BAR_HEIGHT +
  Math.abs(SCREEN_HEIGHT - height) -
  DEVICE_NAV_BAR_HEIGHT;

export const PERCENTAGE = 100;

export const responsiveWidth = (value: number): number =>
  CORRECT_WIDTH * (value / PERCENTAGE);

export const responsiveHeight = (value: number): number =>
  CORRECT_HEIGHT * (value / PERCENTAGE);
