import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from 'store/index';

import { SongProps } from 'types/song';

import { PlaylistProps } from './playlist.types';

const initialState: PlaylistProps = {
  isWidgetShown: false,
  songIndex: 0,
  playlistTitle: 'Once Twice Melody',
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
    setIsWidgetShown: (state, action: PayloadAction<boolean>) => {
      state.isWidgetShown = action.payload;
    },
    setSongIndex: (state, action: PayloadAction<number>) => {
      state.songIndex = action.payload;
    },
    setPlaylist: (state, action: PayloadAction<SongProps[]>) => {
      state.playlist = [...action.payload];
    },
    setPlaylistTitle: (state, action: PayloadAction<string>) => {
      state.playlistTitle = action.payload;
    },
  },
});

export const { setPlaylist, setIsWidgetShown, setSongIndex, setPlaylistTitle } =
  playlistSlice.actions;

export const selectIsShown = (state: AppState) => state.playlist.isWidgetShown;

export const selectPlaylist = (state: AppState) => state.playlist.playlist;

export const selectSongIndex = (state: AppState) => state.playlist.songIndex;

export const selectPlaylistTitle = (state: AppState) =>
  state.playlist.playlistTitle;

export default playlistSlice.reducer;
