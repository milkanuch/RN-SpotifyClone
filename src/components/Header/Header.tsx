import React, { FC } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

import IconButton from 'components/IconButton/IconButton';

import { OPACITY_INPUT_RANGE, OPACITY_OUTPUT_RANGE } from './header.settings';
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

  const animatedStyles = useAnimatedStyle(() => {
    const opacity = scrollY
      ? interpolate(scrollY.value, OPACITY_INPUT_RANGE, OPACITY_OUTPUT_RANGE, {
          extrapolateLeft: Extrapolation.CLAMP,
          extrapolateRight: Extrapolation.IDENTITY,
        })
      : 1;

    return {
      opacity,
    };
  });

  const handleLeftPress = () => {
    goBack();
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
