import React, { FC } from 'react';

import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {
  OPACITY_INPUT_RANGE,
  OPACITY_OUTPUT_RANGE,
} from './albumTitle.settings';
import styles from './albumTitle.styles';
import { AlbumTitleProps } from './albumTitle.types';

const AlbumTitle: FC<AlbumTitleProps> = ({ artistHeadline, name, scrollY }) => {
  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      OPACITY_INPUT_RANGE,
      OPACITY_OUTPUT_RANGE,
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.IDENTITY,
      },
    );

    return {
      opacity,
    };
  });

  return (
    <Animated.View>
      <Animated.Text style={[styles.name, animatedStyles]}>
        {name}
      </Animated.Text>
      <Animated.Text style={styles.artistHeadline}>
        {artistHeadline}
      </Animated.Text>
    </Animated.View>
  );
};

export default AlbumTitle;
