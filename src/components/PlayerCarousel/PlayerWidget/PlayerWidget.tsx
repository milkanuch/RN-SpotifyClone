import React, { FC } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import TrackPlayer, { useProgress } from 'react-native-track-player';

import IconButton from 'components/IconButton/IconButton';
import ProgressBar from 'components/ProgressBar/ProgressBar';

import { iconImages } from 'constants/icons';

import {
  handleLike,
  selectIsSongLikedById,
} from 'store/favoriteSongSlice/favoriteSong';
import { useAppDispatch, useAppSelector } from 'store/index';
import {
  selectIsBuffering,
  selectIsPlaying,
  setIsPlaying,
  setIsWidgetShown,
} from 'store/playlistSlice/playlist';

import { SongProps } from 'types/song';

import styles from './playerWidget.styles';
import {
  AppStackNavigationTypes,
  SongNavigationProps,
} from 'navigation/AppStackNavigation/appStackNavigator.types';

const PlayerWidget: FC<SongProps> = ({ title, artist, artwork, id, url }) => {
  const { navigate } = useNavigation<SongNavigationProps>();

  const { position, duration } = useProgress();
  const isBuffering = useAppSelector(selectIsBuffering);
  const isPlaying = useAppSelector(selectIsPlaying);
  const isLiked = useAppSelector(selectIsSongLikedById(id));

  const dispatch = useAppDispatch();

  const playerButtonIcon =
    !isPlaying && !isBuffering ? iconImages.FilledPlay : iconImages.Pause;

  const imageSource =
    typeof artwork === 'string' ? { uri: artwork } : { source: artwork };

  const iconName = isLiked ? iconImages.FilledHeart : iconImages.StrokedHeart;

  const iconStyle = isLiked ? styles.activeButton : undefined;

  const handleWidgetPress = () => {
    navigate(AppStackNavigationTypes.PlayerScreen, {});
    dispatch(setIsWidgetShown(false));
  };

  const handlePlayPause = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
      dispatch(setIsPlaying(false));
      return;
    }

    await TrackPlayer.play();
    dispatch(setIsPlaying(true));
  };

  const handleLikeSong = async () => {
    const item = { artist, id, artwork, title, url };
    await dispatch(handleLike(item));
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
            iconName={iconName}
            iconStyle={iconStyle}
            onPress={handleLikeSong}
          />
          <IconButton iconName={playerButtonIcon} onPress={handlePlayPause} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlayerWidget;
