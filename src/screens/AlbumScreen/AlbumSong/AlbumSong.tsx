import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import IconButton from 'components/IconButton/IconButton';

import { iconImages } from 'constants/icons';

import { QueueInitialTracksService } from 'services/player/InitialTracksService';
import {
  handleLike,
  selectIsSongLikedById,
} from 'store/favoriteSongSlice/favoriteSong';
import { useAppDispatch, useAppSelector } from 'store/index';
import { selectSongs, setIsWidgetShown } from 'store/playlistSlice/playlist';

import styles from './albumSong.styles';
import AlbumSongProps from './albumSong.types';
import {
  AppStackNavigationTypes,
  SongNavigationProps,
} from 'navigation/AppStackNavigation/appStackNavigator.types';

const AlbumSong: FC<AlbumSongProps> = ({
  imageUri,
  artist,
  title,
  trackIndex,
  id,
  url,
}) => {
  const dispatch = useAppDispatch();
  const playlist = useAppSelector(selectSongs);

  const { navigate } = useNavigation<SongNavigationProps>();

  const isLiked = useAppSelector(selectIsSongLikedById(id));

  const imageSource =
    typeof imageUri === 'string' ? { uri: imageUri } : { source: imageUri };

  const iconStyle = isLiked ? styles.activeButton : undefined;

  const iconName = isLiked ? iconImages.FilledHeart : iconImages.StrokedHeart;

  const handleSongPlay = async () => {
    dispatch(setIsWidgetShown(false));
    await QueueInitialTracksService(playlist);
    navigate(AppStackNavigationTypes.PlayerScreen, {
      trackIndex,
    });
  };

  const handleLikeSong = async () => {
    const item = { artist, id, imageUri, title, url };
    await dispatch(handleLike(item));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSongPlay} style={styles.songContainer}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.songInfo}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </TouchableOpacity>
      <IconButton
        containerStyle={styles.favorites}
        iconName={iconName}
        iconStyle={iconStyle}
        onPress={handleLikeSong}
      />
    </View>
  );
};

export default AlbumSong;
