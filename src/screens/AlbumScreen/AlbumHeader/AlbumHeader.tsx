import React, { FC } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

import IconButton from 'components/IconButton/IconButton';

import { iconImages } from 'constants/icons';

import {
  OPACITY_INPUT_RANGE,
  OPACITY_OUTPUT_RANGE,
} from './albumHeader.settings';
import styles from './albumHeader.styles';
import { AlbumHeaderProps } from './albumHeader.types';
import { AlbumNavigationHeaderProps } from 'navigation/HomeStackNavigation/homeStackNavigation.types';

const AlbumHeader: FC<AlbumHeaderProps> = ({ title, scrollY }) => {
  const { goBack } = useNavigation<AlbumNavigationHeaderProps>();

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

  const handleLeftPress = () => {
    goBack();
  };

  return (
    <View style={styles.container}>
      <IconButton iconName={iconImages.Left} onPress={handleLeftPress} />
      <View style={styles.textContainer}>
        {title ? (
          <Animated.Text style={[styles.title, animatedStyles]}>
            {title}
          </Animated.Text>
        ) : null}
      </View>
    </View>
  );
};

export default AlbumHeader;
