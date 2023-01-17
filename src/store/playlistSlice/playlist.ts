import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from 'react-native-track-player';

import { AppState } from 'store/index';

import { PlaylistProps } from './playlist.types';

const initialState: PlaylistProps = {
  isWidgetShown: false,
  isPlaying: false,
  isBuffering: false,
  currentTrack: 0,
  songs: [
    {
      url: require('assets/sound/once-twice-melody.mp3'),
    },
  ],
};

export const playlistSlice = createSlice({
  name: 'Playlist',
  initialState,
  reducers: {
    setIsWidgetShown: (state, action: PayloadAction<boolean>) => {
      state.isWidgetShown = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setIsBuffering: (state, action: PayloadAction<boolean>) => {
      state.isBuffering = action.payload;
    },
    setCurrentTrack: (state, action: PayloadAction<number>) => {
      state.currentTrack = action.payload;
    },
    setSongs: (state, action: PayloadAction<Track[]>) => {
      state.songs = [...action.payload];
    },
  },
});

export const {
  setCurrentTrack,
  setIsWidgetShown,
  setIsPlaying,
  setIsBuffering,
  setSongs,
} = playlistSlice.actions;

export const selectIsShown = (state: AppState) => state.playlist.isWidgetShown;

export const selectIsPlaying = (state: AppState) => state.playlist.isPlaying;

export const selectSongs = (state: AppState) => state.playlist.songs;

export const selectIsBuffering = (state: AppState) =>
  state.playlist.isBuffering;

export const selectCurrentTrack = (state: AppState) =>
  state.playlist.currentTrack;

export default playlistSlice.reducer;
