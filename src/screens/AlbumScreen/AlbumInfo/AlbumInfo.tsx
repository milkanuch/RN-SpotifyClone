import React, { FC } from 'react';
import { View } from 'react-native';

import IconButton from 'components/IconButton/IconButton';

import { iconImages } from 'constants/icons';

import AlbumImage from '../AlbumImage/AlbumImage';
import AlbumTitle from '../AlbumTitle/AlbumTitle';

import styles from './albumInfo.styles';
import { AlbumInfoProps } from './albumInfo.types';

const AlbumInfo: FC<AlbumInfoProps> = ({
  name,
  artistHeadline,
  imageUri,
  scrollY,
}) => {
  const handleHeartPress = () => {
    //TODO: add favorites albums
  };

  const handleMenuPress = () => {
    //TODO: add menu press
  };

  const handlePlayPress = () => {
    //TODO: add play press
  };

  return (
    <View style={styles.container}>
      <AlbumImage imageUri={imageUri} scrollY={scrollY} />
      <AlbumTitle
        artistHeadline={artistHeadline}
        name={name}
        scrollY={scrollY}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.twoButtonContainer}>
          <IconButton
            iconName={iconImages.StrokedHeart}
            onPress={handleHeartPress}
          />
          <IconButton
            iconName={iconImages.MenuDots}
            onPress={handleMenuPress}
          />
        </View>
        <IconButton
          iconName={iconImages.GreenPlay}
          iconStyle={styles.playIcon}
          onPress={handlePlayPress}
        />
      </View>
    </View>
  );
};

export default AlbumInfo;
