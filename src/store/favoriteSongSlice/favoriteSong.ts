import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from 'store/index';

import { SongProps } from 'types/song';

import { FavoriteSongState } from './favoriteSong.types';

const initialState: FavoriteSongState = {
  favoritesSongs: [],
};

export const handleLike = createAsyncThunk<
  void,
  SongProps,
  { state: AppState }
>('FavoriteSong/likes', async (item, { dispatch, getState }) => {
  try {
    const state = getState();
    const isLiked = selectIsSongLikedById(item.id)(state);

    if (isLiked && item.id) {
      dispatch(removeLikedSong(item.id));
      return;
    }

    dispatch(setLikedSong(item));
  } catch (error) {
    throw new Error('Probably hard to like this song, ' + error);
  }
});

const favoriteSong = createSlice({
  name: 'FavoriteSong',
  initialState,
  reducers: {
    setLikedSong: (state, action: PayloadAction<SongProps>) => {
      state.favoritesSongs.push(action.payload);
    },
    removeLikedSong: (state, action: PayloadAction<number>) => {
      state.favoritesSongs = state.favoritesSongs.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const { setLikedSong, removeLikedSong } = favoriteSong.actions;

export const selectIsSongLikedById =
  (id: number | undefined) =>
  (state: AppState): boolean =>
    !!state.favoriteSong.favoritesSongs.find(item => item.id === id);

export default favoriteSong.reducer;
