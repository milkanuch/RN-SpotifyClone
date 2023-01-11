import React, { FC } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import IconButton from 'components/IconButton/IconButton';
import ProgressBar from 'components/ProgressBar/ProgressBar';

import { iconImages } from 'constants/icons';

import { useAppDispatch, useAppSelector } from 'store/index';
import {
  selectDuration,
  selectIsPlaying,
  selectPlaylist,
  selectPosition,
  selectSongIndex,
  selectSound,
  setIsPlaying,
  setIsWidgetShown,
} from 'store/playlistSlice/playlist';

import styles from './playerWidget.styles';
import { PlayerWidgetProps } from './playerWidget.types';
import {
  AppStackNavigationTypes,
  SongNavigationProps,
} from 'navigation/AppStackNavigation/appStackNavigator.types';

const PlayerWidget: FC<PlayerWidgetProps> = () => {
  const sound = useAppSelector(selectSound);

  const position = useAppSelector(selectPosition);
  const duration = useAppSelector(selectDuration);
  const isPlaying = useAppSelector(selectIsPlaying);

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

  const handlePlayPausePress = async () => {
    if (isPlaying) {
      await sound.pauseAsync();
      dispatch(setIsPlaying(false));
    } else {
      await sound.playAsync();
      dispatch(setIsPlaying(true));
    }
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
            onPress={handlePlayPausePress}
          />
          <IconButton
            iconName={iconImages.StrokedHeart}
            onPress={handlePlayPausePress}
          />
          <IconButton
            iconName={isPlaying ? iconImages.Pause : iconImages.StrokePlay}
            onPress={handlePlayPausePress}
          />
        </View>
      </View>
      <ProgressBar currentValue={position} limitValue={duration} />
    </TouchableOpacity>
  );
};

export default PlayerWidget;
