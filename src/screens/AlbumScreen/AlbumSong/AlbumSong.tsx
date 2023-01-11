import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import IconButton from 'components/IconButton/IconButton';

import { iconImages } from 'constants/icons';

import { useAppDispatch } from 'store/index';
import { setIsWidgetShown } from 'store/playlistSlice/playlist';

import styles from './albumSong.styles';
import AlbumSongProps from './albumSong.types';
import {
  AppStackNavigationTypes,
  SongNavigationProps,
} from 'navigation/AppStackNavigation/appStackNavigator.types';

const AlbumSong: FC<AlbumSongProps> = ({ imageUri, artist, title }) => {
  const { navigate } = useNavigation<SongNavigationProps>();
  const dispacth = useAppDispatch();

  const imageSource = {
    uri: imageUri,
  };

  const handleFavoriteSong = () => {
    //TODO: add favorite song
  };

  const handleSongPlay = () => {
    navigate(AppStackNavigationTypes.PlayerScreen);
    dispacth(setIsWidgetShown(false));
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
