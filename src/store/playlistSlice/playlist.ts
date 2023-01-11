import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sound } from 'expo-av/build/Audio';

import { AppState } from 'store/index';

import { SongProps } from 'types/song';

import { PlaylistProps } from './playlist.types';

const initialState: PlaylistProps = {
  isWidgetShown: false,
  isPlaying: false,
  repeat: false,
  duration: 0,
  position: 0,
  songIndex: 0,
  playlistTitle: 'Once Twice Melody',
  sound: new Sound(),
  playlist: [
    {
      artist: 'Pierce the Veil',
      id: 11,
      imageUri:
        'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
      title: 'King for a day',
    },
    {
      artist: 'Pierce the Veil',
      id: 12,
      imageUri:
        'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
      title: 'Props & Mayhem',
    },
    {
      artist: 'Pierce the Veil',
      id: 13,
      imageUri:
        'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
      title: 'The First Punch',
    },
    {
      artist: 'Pierce the Veil',
      id: 14,
      imageUri:
        'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
      title: 'Hold On Till May',
    },
    {
      artist: 'Pierce the Veil',
      id: 15,
      imageUri:
        'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
      title: 'A Match Into Water',
    },
    {
      artist: 'Pierce the Veil',
      id: 16,
      imageUri:
        'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
      title: 'Hell Above',
    },
    {
      artist: 'Pierce the Veil',
      id: 17,
      imageUri:
        'https://i.scdn.co/image/ab67616d00001e02ea27a9e38db1ec66119356af',
      title: 'Bulls In The Brox',
    },
  ],
};

export const playlistSlice = createSlice({
  name: 'Playlist',
  initialState,
  reducers: {
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setIsWidgetShown: (state, action: PayloadAction<boolean>) => {
      state.isWidgetShown = action.payload;
    },
    setRepeat: (state, action: PayloadAction<boolean>) => {
      state.repeat = action.payload;
    },
    setPosition: (state, action: PayloadAction<number>) => {
      state.position = action.payload;
    },
    setSongIndex: (state, action: PayloadAction<number>) => {
      state.songIndex = action.payload;
    },
    setDuration: (state, action: PayloadAction<number | undefined>) => {
      state.duration = action.payload;
    },
    setSound: (state, action: PayloadAction<Sound>) => {
      state.sound = action.payload;
    },
    setPlaylist: (state, action: PayloadAction<SongProps[]>) => {
      state.playlist = [...action.payload];
    },
    setPlaylistTitle: (state, action: PayloadAction<string>) => {
      state.playlistTitle = action.payload;
    },
  },
});

export const {
  setPlaylist,
  setIsWidgetShown,
  setIsPlaying,
  setPosition,
  setDuration,
  setSound,
  setRepeat,
  setSongIndex,
  setPlaylistTitle,
} = playlistSlice.actions;

export const selectIsShown = (state: AppState) => state.playlist.isWidgetShown;

export const selectIsPlaying = (state: AppState) => state.playlist.isPlaying;

export const selectDuration = (state: AppState) => state.playlist.duration;

export const selectPosition = (state: AppState) => state.playlist.position;

export const selectSound = (state: AppState) => state.playlist.sound;

export const selectPlaylist = (state: AppState) => state.playlist.playlist;

export const selectIsRepeat = (state: AppState) => state.playlist.repeat;

export const selectSongIndex = (state: AppState) => state.playlist.songIndex;

export const selectPlaylistTitle = (state: AppState) =>
  state.playlist.playlistTitle;

export default playlistSlice.reducer;
