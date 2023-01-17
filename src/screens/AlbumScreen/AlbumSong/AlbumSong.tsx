import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import IconButton from 'components/IconButton/IconButton';

import { iconImages } from 'constants/icons';

import { QueueInitialTracksService } from 'services/player/InitialTracksService';
import { useAppDispatch, useAppSelector } from 'store/index';
import { selectSongs, setIsWidgetShown } from 'store/playlistSlice/playlist';

import styles from './albumSong.styles';
import AlbumSongProps from './albumSong.types';
import {
  AppStackNavigationTypes,
  SongNavigationProps,
} from 'navigation/AppStackNavigation/appStackNavigator.types';

const AlbumSong: FC<AlbumSongProps> = ({ imageUri, artist, title, index }) => {
  const dispacth = useAppDispatch();
  const playlist = useAppSelector(selectSongs);

  const { navigate } = useNavigation<SongNavigationProps>();

  const imageSource =
    typeof imageUri === 'string' ? { uri: imageUri } : { source: imageUri };

  const handleFavoriteSong = () => {
    //TODO: add favorite song
  };

  const handleSongPlay = async () => {
    dispacth(setIsWidgetShown(false));
    await QueueInitialTracksService(playlist);
    navigate(AppStackNavigationTypes.PlayerScreen, {
      songId: index,
    });
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
        iconName={iconImages.StrokedHeart}
        onPress={handleFavoriteSong}
      />
    </View>
  );
};

export default AlbumSong;
