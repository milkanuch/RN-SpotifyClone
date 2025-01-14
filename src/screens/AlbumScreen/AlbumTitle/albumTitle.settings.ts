import {
  INTERPOLATION_END_OUTPUT_VALUE,
  INTERPOLATION_START_INPUT_VALUE,
  INTERPOLATION_START_OUTPUT_VALUE,
} from 'constants/animation';
import { height } from 'constants/scale';

const HALF_HEIGHT_DIVIDER = 2;

export const OPACITY_INPUT_RANGE = [
  INTERPOLATION_START_INPUT_VALUE,
  height / HALF_HEIGHT_DIVIDER,
];

export const OPACITY_OUTPUT_RANGE = [
  INTERPOLATION_START_OUTPUT_VALUE,
  INTERPOLATION_END_OUTPUT_VALUE,
];
