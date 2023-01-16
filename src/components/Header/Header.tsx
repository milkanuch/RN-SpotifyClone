import React, { FC } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

import IconButton from 'components/IconButton/IconButton';

import { useAppDispatch, useAppSelector } from 'store/index';
import {
  selectIsPlaying,
  selectIsShown,
  setIsWidgetShown,
} from 'store/playlistSlice/playlist';

import {
  OPACITY_END_VALUE,
  OPACITY_INPUT_RANGE,
  OPACITY_OUTPUT_RANGE,
} from './header.settings';
import styles from './header.styles';
import { AlbumHeaderProps } from './header.types';
import { AlbumNavigationHeaderProps } from 'navigation/HomeStackNavigation/homeStackNavigation.types';

const Header: FC<AlbumHeaderProps> = ({
  title,
  scrollY,
  containerStyle,
  iconName,
}) => {
  const { goBack } = useNavigation<AlbumNavigationHeaderProps>();

  const isPlaying = useAppSelector(selectIsPlaying);

  const isWidgetShown = useAppSelector(selectIsShown);
  const dispacth = useAppDispatch();

  const animatedStyles = useAnimatedStyle(() => {
    const opacity = scrollY
      ? interpolate(scrollY.value, OPACITY_INPUT_RANGE, OPACITY_OUTPUT_RANGE, {
          extrapolateLeft: Extrapolation.CLAMP,
          extrapolateRight: Extrapolation.IDENTITY,
        })
      : OPACITY_END_VALUE;

    return {
      opacity,
    };
  });

  const handleLeftPress = () => {
    goBack();
    if (isPlaying && !isWidgetShown) dispacth(setIsWidgetShown(true));
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <IconButton iconName={iconName} onPress={handleLeftPress} />
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

export default Header;
