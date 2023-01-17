import React, { FC } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import TrackPlayer, { useProgress } from 'react-native-track-player';

import IconButton from 'components/IconButton/IconButton';
import ProgressBar from 'components/ProgressBar/ProgressBar';

import { iconImages } from 'constants/icons';

import { useAppDispatch, useAppSelector } from 'store/index';
import {
  selectIsBuffering,
  selectIsPlaying,
  setIsWidgetShown,
} from 'store/playlistSlice/playlist';

import styles from './playerWidget.styles';
import { PlayerWidgetProps } from './playerWidget.types';
import {
  AppStackNavigationTypes,
  SongNavigationProps,
} from 'navigation/AppStackNavigation/appStackNavigator.types';

const PlayerWidget: FC<PlayerWidgetProps> = ({ title, artist, artwork }) => {
  const { navigate } = useNavigation<SongNavigationProps>();

  const { position, duration } = useProgress();
  const isBuffering = useAppSelector(selectIsBuffering);
  const isPlaying = useAppSelector(selectIsPlaying);

  const playerButtonIcon =
    !isPlaying && !isBuffering ? iconImages.FilledPlay : iconImages.Pause;

  const dispatch = useAppDispatch();

  const imageSource = {
    uri: artwork,
  };

  const handleWidgetPress = () => {
    navigate(AppStackNavigationTypes.PlayerScreen, {});
    dispatch(setIsWidgetShown(false));
  };

  const handlePlayPause = () =>
    isPlaying ? TrackPlayer.pause() : TrackPlayer.play();

  const handleLikePress = () => {
    //TODO: add favorites song
  };

  return (
    <TouchableOpacity onPress={handleWidgetPress} style={styles.container}>
      <ProgressBar currentValue={position} limitValue={duration} />
      <View style={styles.row}>
        <View style={styles.titleContainer}>
          <Image source={imageSource} style={styles.image} />
          <View>
            <Text style={styles.songName}>{title}</Text>
            <Text style={styles.songArtist}>{artist}</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <IconButton iconName={iconImages.Devices} onPress={handlePlayPause} />
          <IconButton
            iconName={iconImages.StrokedHeart}
            onPress={handleLikePress}
          />
          <IconButton iconName={playerButtonIcon} onPress={handlePlayPause} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlayerWidget;
