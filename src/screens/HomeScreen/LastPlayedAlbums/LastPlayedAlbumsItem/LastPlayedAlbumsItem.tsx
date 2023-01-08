import React, { FC } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { LastPlayedAlbumsItemProps } from './lastPlayedAlbums.types';
import styles from './lastPlayedAlbumsItem.styles';
import {
  HomeStackNavigationTypes,
  LastPlayedAlbumsNavigationProps,
} from 'navigation/HomeStackNavigation/homeStackNavigation.types';

const LastPlayedAlbumsItem: FC<LastPlayedAlbumsItemProps> = ({
  imageUri,
  title,
  albumId,
}) => {
  const { navigate } = useNavigation<LastPlayedAlbumsNavigationProps>();

  const imageSource = {
    uri: imageUri,
  };

  const handleAlbumPress = () => {
    navigate(HomeStackNavigationTypes.AlbumScreen, { id: albumId });
  };

  return (
    <TouchableOpacity onPress={handleAlbumPress} style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LastPlayedAlbumsItem;
