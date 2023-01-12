import {
  INTERPOLATION_END_OUTPUT_VALUE,
  INTERPOLATION_START_OUTPUT_VALUE,
} from 'constants/animation';
import { height } from 'constants/scale';

const HEIGHT_START_DIVIDER_VALUE = 3;

const HEIGHT_END_DIVIDER_VALUE = 2;

export const OPACITY_END_VALUE = 1;

export const OPACITY_INPUT_RANGE = [
  height / HEIGHT_START_DIVIDER_VALUE,
  height / HEIGHT_END_DIVIDER_VALUE,
];

//NOTE: here we need to use inverted values
export const OPACITY_OUTPUT_RANGE = [
  INTERPOLATION_END_OUTPUT_VALUE,
  INTERPOLATION_START_OUTPUT_VALUE,
];
