import React, { FC } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import IconButton from 'components/IconButton/IconButton';
import ProgressBar from 'components/ProgressBar/ProgressBar';

import { iconImages } from 'constants/icons';

import { useAppDispatch, useAppSelector } from 'store/index';
import {
  selectPlaylist,
  selectSongIndex,
  setIsWidgetShown,
} from 'store/playlistSlice/playlist';

import { song } from '../../../classes/Sound';

import styles from './playerWidget.styles';
import { PlayerWidgetProps } from './playerWidget.types';
import {
  AppStackNavigationTypes,
  SongNavigationProps,
} from 'navigation/AppStackNavigation/appStackNavigator.types';

const PlayerWidget: FC<PlayerWidgetProps> = () => {
  const playlist = useAppSelector(selectPlaylist);
  const songIndex = useAppSelector(selectSongIndex);

  const { navigate } = useNavigation<SongNavigationProps>();

  const dispatch = useAppDispatch();

  const imageSource = {
    uri: playlist[songIndex].imageUri,
  };

  const handleWidgetPress = () => {
    navigate(AppStackNavigationTypes.PlayerScreen);
    dispatch(setIsWidgetShown(false));
  };

  const handleLikePress = () => {
    //TODO: add favorites song
  };

  return (
    <TouchableOpacity onPress={handleWidgetPress} style={styles.container}>
      <View style={styles.row}>
        <View style={styles.titleContainer}>
          <Image source={imageSource} style={styles.image} />
          <View>
            <Text style={styles.songName}>{playlist[songIndex].title}</Text>
            <Text style={styles.songArtist}>{playlist[songIndex].artist}</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <IconButton
            iconName={iconImages.Devices}
            onPress={song.handlePlayPause}
          />
          <IconButton
            iconName={iconImages.StrokedHeart}
            onPress={handleLikePress}
          />
          <IconButton
            iconName={song.isPlaying ? iconImages.Pause : iconImages.StrokePlay}
            onPress={handleLikePress}
          />
        </View>
      </View>
      <ProgressBar currentValue={song.position} limitValue={song.duration} />
    </TouchableOpacity>
  );
};

export default PlayerWidget;
