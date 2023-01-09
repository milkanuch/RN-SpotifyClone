import React, { useCallback, useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import Slider from '@react-native-community/slider';
import { AVPlaybackStatus } from 'expo-av/build/AV';
import { Sound } from 'expo-av/build/Audio';

import Header from 'components/Header/Header';
import IconButton from 'components/IconButton/IconButton';

import { COLORS } from 'constants/colors';
import { iconImages } from 'constants/icons';

import SongDuration from './SongDuration/SongDuration';
import SongTitle from './SongTitle/SongTitle';

import styles from './playerScreen.styles';

const PlayerScreen = () => {
  const [sound, setSound] = useState<Sound>();

  const [duration, setDuration] = useState<number | undefined>(0);
  const [position, setPosition] = useState<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [repeat, setRepeat] = useState<boolean>(false);

  const imageSource = {
    uri: 'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
  };

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setIsPlaying(status.isPlaying);
      setDuration(status.durationMillis);
      setPosition(status.positionMillis);
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
        { shouldPlay: true },
        onPlaybackStatusUpdate,
      );
      setSound(newSound);
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
      setIsPlaying(false);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const handleChangeValue = async (value: number) => {
    if (sound) {
      setPosition(value);
      await sound.setPositionAsync(value);
    }
  };

  const handleShuffle = () => {
    //TODO: add shuffle
  };

  const handleBack = () => {
    //TODO: add handle back
  };

  const handleSkipSong = () => {
    //TODO: add song skip
  };

  const handleRepeat = async () => {
    if (!sound) {
      return;
    }

    if (!repeat) {
      setRepeat(true);
      await sound.setIsLoopingAsync(true);
    } else {
      setRepeat(false);
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
    return null;
  }

  return (
    <View style={styles.screen}>
      <Header iconName={iconImages.Down} title="Once Twice Melody" />
      <Image source={imageSource} style={styles.image} />
      <SongTitle />
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
