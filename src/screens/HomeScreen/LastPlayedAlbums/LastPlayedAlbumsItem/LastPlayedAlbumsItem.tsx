import React, { FC } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import { LastPlayedAlbumsItemProps } from './lastPlayedAlbums.types';
import styles from './lastPlayedAlbumsItem.styles';

const LastPlayedAlbumsItem: FC<LastPlayedAlbumsItemProps> = ({
  imageUri,
  title,
}) => {
  const imageSource = {
    uri: imageUri,
  };

  const handleAlbumPress = () => {
    //TODO: make navigation to album screen
  };

  return (
    <TouchableOpacity onPress={handleAlbumPress} style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LastPlayedAlbumsItem;
