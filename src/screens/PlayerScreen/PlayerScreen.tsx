import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';

import Slider from '@react-native-community/slider';
import { AVPlaybackStatus } from 'expo-av/build/AV';
import { Sound } from 'expo-av/build/Audio';

import Header from 'components/Header/Header';
import IconButton from 'components/IconButton/IconButton';

import { COLORS } from 'constants/colors';
import { iconImages } from 'constants/icons';

import { useAppDispatch, useAppSelector } from 'store/index';
import {
  selectDuration,
  selectIsPlaying,
  selectIsRepeat,
  selectPlaylist,
  selectPlaylistTitle,
  selectPosition,
  selectSongIndex,
  selectSound,
  setDuration,
  setIsPlaying,
  setPosition,
  setRepeat,
  setSongIndex,
  setSound,
} from 'store/playlistSlice/playlist';

import SongDuration from './SongDuration/SongDuration';
import SongTitle from './SongTitle/SongTitle';
import { getRandomSong } from './playerScreen.utils';

import styles from './playerScreen.styles';

const PlayerScreen = () => {
  const sound = useAppSelector(selectSound);

  const position = useAppSelector(selectPosition);
  const duration = useAppSelector(selectDuration);
  const isPlaying = useAppSelector(selectIsPlaying);
  const playlist = useAppSelector(selectPlaylist);
  const songIndex = useAppSelector(selectSongIndex);
  const playlistTitle = useAppSelector(selectPlaylistTitle);

  const repeat = useAppSelector(selectIsRepeat);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const imageSource = {
    uri: playlist[songIndex].imageUri,
  };

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      if (!status.isBuffering) dispatch(setIsPlaying(status.isPlaying));
      dispatch(setDuration(status.durationMillis));
      dispatch(setPosition(status.positionMillis));
    } else if (status.error) {
      throw new Error(status.error);
    }
  };

  const playCurrentSong = useCallback(async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    try {
      const { sound: newSound } = await Sound.createAsync(
        require('assets/sound/once-twice-melody.mp3'),
        { shouldPlay: false },
        onPlaybackStatusUpdate,
      );
      dispatch(setSound(newSound));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    playCurrentSong();
  }, [playCurrentSong]);

  const handlePlayPausePress = async () => {
    if (!sound) {
      return;
    }

    if (isPlaying) {
      await sound.pauseAsync();
      dispatch(setIsPlaying(false));
    } else {
      await sound.playAsync();
      dispatch(setIsPlaying(true));
    }
  };

  const handleChangeValue = (value: number) => {
    if (sound) {
      dispatch(setPosition(value));
      sound.setPositionAsync(value);
    }
  };

  const handleShuffle = () => {
    dispatch(setSongIndex(getRandomSong(0, playlist.length - 1)));
  };

  const handleBack = () => {
    dispatch(setSongIndex(songIndex - 1 < 0 ? songIndex : songIndex - 1));
  };

  const handleSkipSong = () => {
    dispatch(
      setSongIndex(
        songIndex + 1 >= playlist.length ? songIndex : songIndex + 1,
      ),
    );
  };

  const handleRepeat = async () => {
    if (!sound) {
      return;
    }

    if (!repeat) {
      dispatch(setRepeat(true));
      await sound.setIsLoopingAsync(true);
    } else {
      dispatch(setRepeat(false));
      await sound.setIsLoopingAsync(false);
    }
  };

  const handleDevices = () => {
    //TODO: add handle devices
  };

  const handleListPlaying = () => {
    //TODO: add list playing
  };

  if (isLoading) {
    return <ActivityIndicator style={styles.screen} />;
  }

  return (
    <View style={styles.screen}>
      <Header iconName={iconImages.Down} title={playlistTitle} />
      <Image source={imageSource} style={styles.image} />
      <SongTitle
        songArtist={playlist[songIndex].artist}
        songName={playlist[songIndex].title}
      />
      <Slider
        maximumTrackTintColor={COLORS.white}
        maximumValue={duration}
        minimumTrackTintColor={COLORS.greenBrand}
        minimumValue={0}
        onSlidingComplete={handleChangeValue}
        style={styles.slider}
        thumbTintColor={COLORS.white}
        value={position}
      />
      <SongDuration duration={duration} position={position} />
      <View style={styles.buttonsContainer}>
        <IconButton iconName={iconImages.Shuffle} onPress={handleShuffle} />
        <IconButton iconName={iconImages.Back} onPress={handleBack} />
        <IconButton
          containerStyle={styles.playButtonContainer}
          iconName={isPlaying ? iconImages.Pause : iconImages.FilledPlay}
          iconStyle={styles.playButton}
          onPress={handlePlayPausePress}
        />
        <IconButton iconName={iconImages.Skip} onPress={handleSkipSong} />
        <IconButton
          iconName={iconImages.Repeat}
          iconStyle={repeat ? styles.activeButton : undefined}
          onPress={handleRepeat}
        />
      </View>
      <View style={styles.bottomButtonContainer}>
        <IconButton iconName={iconImages.Devices} onPress={handleDevices} />
        <IconButton
          iconName={iconImages.ListPlaying}
          onPress={handleListPlaying}
        />
      </View>
    </View>
  );
};

export default PlayerScreen;
