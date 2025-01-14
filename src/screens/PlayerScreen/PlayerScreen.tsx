import React, { FC, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';

import Slider from '@react-native-community/slider';
import TrackPlayer, {
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import Header from 'components/Header/Header';
import IconButton from 'components/IconButton/IconButton';

import { COLORS } from 'constants/colors';
import { iconImages } from 'constants/icons';

import { handleLike } from 'store/favoriteSongSlice/favoriteSong';
import { useAppDispatch, useAppSelector } from 'store/index';
import {
  selectIsBuffering,
  selectIsPlaying,
  setIsBuffering,
  setIsPlaying,
} from 'store/playlistSlice/playlist';

import SongDuration from './SongDuration/SongDuration';
import SongTitle from './SongTitle/SongTitle';
import { getRandomSong } from './playerScreen.utils';

import { SongProps } from 'types/song';

import styles from './playerScreen.styles';
import { PlayerScreenProps } from 'navigation/AppStackNavigation/appStackNavigator.types';

const PlayerScreen: FC<PlayerScreenProps> = ({ route }) => {
  const [queue, setQueue] = useState<SongProps[]>([]);

  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);

  const playerState = usePlaybackState();

  const isBuffering = useAppSelector(selectIsBuffering);
  const isPlaying = useAppSelector(selectIsPlaying);

  const { position, duration } = useProgress();

  const dispatch = useAppDispatch();

  const playerButtonIcon =
    !isPlaying && !isBuffering ? iconImages.FilledPlay : iconImages.Pause;

  const runPlayer = useCallback(async () => {
    if (!isPlaying && !isBuffering) {
      const queue = await TrackPlayer.getQueue();
      setQueue(queue);
      const { trackIndex } = route.params;
      TrackPlayer.skip(trackIndex ? trackIndex : 0);

      setIsPlayerReady(true);
    }
  }, [isPlaying, isBuffering, route]);

  useEffect(() => {
    runPlayer();
  }, [runPlayer]);

  useEffect(() => {
    const isPlaying = playerState === State.Playing;
    const isBuffering = playerState === State.Buffering;

    dispatch(setIsPlaying(isPlaying));
    dispatch(setIsBuffering(isBuffering));
  }, [dispatch, playerState]);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.nextTrack) {
      const index = await TrackPlayer.getCurrentTrack();
      setCurrentTrack(index ? index : 0);
    }
  });

  const handlePlayPause = () =>
    isPlaying ? TrackPlayer.pause() : TrackPlayer.play();

  const handleShuffle = () => setIsShuffle(!isShuffle);

  const handleBack = () => TrackPlayer.skipToPrevious();

  const handleSkipSong = () =>
    isShuffle
      ? TrackPlayer.skip(getRandomSong(0, queue.length - 1))
      : TrackPlayer.skipToNext();

  const handleRepeat = () => {
    if (!isRepeat) {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setIsRepeat(true);
    } else {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setIsRepeat(false);
    }
  };

  const handleChangeValue = async (value: number) => {
    await TrackPlayer.seekTo(value);
  };

  const handleLikeSong = async () => {
    const item = {
      artist: queue[currentTrack].artist,
      id: queue[currentTrack].id,
      artwork: queue[currentTrack].artwork,
      title: queue[currentTrack].title,
      url: queue[currentTrack].url,
    };

    await dispatch(handleLike(item));
  };

  const handleDevices = () => {
    //TODO: add handle devices
  };

  const handleListPlaying = () => {
    //TODO: add list playing
  };

  if (!isPlayerReady) {
    return (
      <ActivityIndicator color={COLORS.greenBrand} style={styles.screen} />
    );
  }

  const imageSource =
    queue[currentTrack] && typeof queue[currentTrack]?.artwork === 'string'
      ? { uri: queue[currentTrack].artwork as string }
      : { source: queue[currentTrack].artwork };

  return (
    <>
      <Header iconName={iconImages.Down} title={queue[currentTrack].album} />
      {queue[currentTrack] ? (
        <View style={styles.screen}>
          <Image source={imageSource} style={styles.image} />
          <SongTitle
            onPress={handleLikeSong}
            songArtist={queue[currentTrack].artist}
            songId={queue[currentTrack].id}
            songName={queue[currentTrack].title}
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
            <IconButton
              iconName={iconImages.Shuffle}
              iconStyle={isShuffle ? styles.activeButton : undefined}
              onPress={handleShuffle}
            />
            <IconButton iconName={iconImages.Back} onPress={handleBack} />
            <IconButton
              containerStyle={styles.playButtonContainer}
              iconName={playerButtonIcon}
              iconStyle={styles.playButton}
              onPress={handlePlayPause}
            />
            <IconButton iconName={iconImages.Skip} onPress={handleSkipSong} />
            <IconButton
              iconName={iconImages.Repeat}
              iconStyle={isRepeat ? styles.activeButton : undefined}
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
      ) : (
        <Text>Something went wrong</Text>
      )}
    </>
  );
};

export default PlayerScreen;
