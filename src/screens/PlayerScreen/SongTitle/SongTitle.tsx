import React from 'react';
import { View, Text } from 'react-native';

import IconButton from 'components/IconButton/IconButton';

import { iconImages } from 'constants/icons';

import styles from './songTitle.styles';

const SongTitle = () => {
  const handleLike = () => {
    //TODO: add favorite handle
  };

  return (
    <View style={styles.titleContainer}>
      <View>
        <Text style={styles.songName}>Once Twice Melody</Text>
        <Text style={styles.artist}>Beach House</Text>
      </View>
      <IconButton iconName={iconImages.StrokedHeart} onPress={handleLike} />
    </View>
  );
};

export default SongTitle;
