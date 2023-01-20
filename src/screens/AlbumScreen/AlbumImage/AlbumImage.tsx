import React, { FC } from 'react';
import { Image } from 'react-native';

import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {
  OPACITY_INPUT_RANGE,
  OPACITY_OUTPUT_RANGE,
  SCALE_INPUT_RANGE,
  SCALE_OUTPUT_RANGE,
} from './albumImage.settings';
import styles from './albumImage.styles';
import { AlbumImageProps } from './albumImage.types';

const AlbumImage: FC<AlbumImageProps> = ({ imageUri, scrollY }) => {
  const imageSource = {
    uri: imageUri,
  };

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollY.value,
      SCALE_INPUT_RANGE,
      SCALE_OUTPUT_RANGE,
      {
        extrapolateRight: Extrapolation.CLAMP,
        extrapolateLeft: Extrapolation.IDENTITY,
      },
    );

    const opacity = interpolate(
      scrollY.value,
      OPACITY_INPUT_RANGE,
      OPACITY_OUTPUT_RANGE,
      {
        extrapolateRight: Extrapolation.CLAMP,
        extrapolateLeft: Extrapolation.IDENTITY,
      },
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Image source={imageSource} style={styles.image} />
    </Animated.View>
  );
};

export default AlbumImage;
