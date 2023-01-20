import React, { FC } from 'react';
import { View, Text } from 'react-native';

import IconButton from 'components/IconButton/IconButton';

import { iconImages } from 'constants/icons';

import { selectIsSongLikedById } from 'store/favoriteSongSlice/favoriteSong';
import { useAppSelector } from 'store/index';

import styles from './songTitle.styles';
import { SongTitleProps } from './songTitle.types';

const SongTitle: FC<SongTitleProps> = ({
  songArtist,
  songName,
  onPress: handleLike,
  songId,
}) => {
  const isLiked = useAppSelector(selectIsSongLikedById(songId));

  const heartIconStyle = isLiked ? styles.activeButton : undefined;

  const heartIconName = isLiked
    ? iconImages.FilledHeart
    : iconImages.StrokedHeart;

  return (
    <View style={styles.titleContainer}>
      <View>
        <Text style={styles.songName}>{songName}</Text>
        <Text style={styles.artist}>{songArtist}</Text>
      </View>
      <IconButton
        iconName={heartIconName}
        iconStyle={heartIconStyle}
        onPress={handleLike}
      />
    </View>
  );
};

export default SongTitle;
