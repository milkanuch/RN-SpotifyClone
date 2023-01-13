import React, { useEffect } from 'react';
import { Image, View } from 'react-native';

import Slider from '@react-native-community/slider';

import Header from 'components/Header/Header';
import IconButton from 'components/IconButton/IconButton';

import { COLORS } from 'constants/colors';
import { iconImages } from 'constants/icons';

import { useAppSelector, useAppDispatch } from 'store/index';
import {
  selectPlaylist,
  selectSongIndex,
  selectPlaylistTitle,
  setSongIndex,
} from 'store/playlistSlice/playlist';

import { song } from '../../classes/Sound';

import SongDuration from './SongDuration/SongDuration';
import SongTitle from './SongTitle/SongTitle';
import { getRandomSong } from './playerScreen.utils';

import styles from './playerScreen.styles';

const PlayerScreen = () => {
  const playlist = useAppSelector(selectPlaylist);
  const songIndex = useAppSelector(selectSongIndex);
  const playlistTitle = useAppSelector(selectPlaylistTitle);

  const dispatch = useAppDispatch();

  const imageSource = {
    uri: playlist[songIndex].imageUri,
  };

  useEffect(() => {
    song.playCurrentSong();
  }, []);

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

  const handleDevices = () => {
    //TODO: add handle devices
  };

  const handleListPlaying = () => {
    //TODO: add list playing
  };

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
        maximumValue={song.duration}
        minimumTrackTintColor={COLORS.greenBrand}
        minimumValue={0}
        onSlidingComplete={song.handleChangeValue}
        style={styles.slider}
        thumbTintColor={COLORS.white}
        value={song.position}
      />
      <SongDuration duration={song.duration} position={song.position} />
      <View style={styles.buttonsContainer}>
        <IconButton iconName={iconImages.Shuffle} onPress={handleShuffle} />
        <IconButton iconName={iconImages.Back} onPress={handleBack} />
        <IconButton
          containerStyle={styles.playButtonContainer}
          iconName={song.isPlaying ? iconImages.Pause : iconImages.FilledPlay}
          iconStyle={styles.playButton}
          onPress={song.handlePlayPause}
        />
        <IconButton iconName={iconImages.Skip} onPress={handleSkipSong} />
        <IconButton
          iconName={iconImages.Repeat}
          iconStyle={song.isRepeat ? styles.activeButton : undefined}
          onPress={song.handleRepeat}
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
