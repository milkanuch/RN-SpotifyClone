import React, { FC } from 'react';
import { View, Text } from 'react-native';

import IconButton from 'components/IconButton/IconButton';

import { iconImages } from 'constants/icons';

import styles from './songTitle.styles';
import { SongTitleProps } from './songTitle.types';

const SongTitle: FC<SongTitleProps> = ({ songArtist, songName }) => {
  const handleLike = () => {
    //TODO: add favorite handle
  };

  return (
    <View style={styles.titleContainer}>
      <View>
        <Text style={styles.songName}>{songName}</Text>
        <Text style={styles.artist}>{songArtist}</Text>
      </View>
      <IconButton iconName={iconImages.StrokedHeart} onPress={handleLike} />
    </View>
  );
};

export default SongTitle;
