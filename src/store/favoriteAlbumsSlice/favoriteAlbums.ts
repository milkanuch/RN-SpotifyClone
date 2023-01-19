import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from 'store/index';

import { LikedAlbumProps } from 'types/album';

import { FavoriteAlbumsState } from './favoriteAlbums.types';

const initialState: FavoriteAlbumsState = {
  favoritesAlbums: [],
};

const favoriteAlbums = createSlice({
  name: 'favoriteAlbums',
  initialState,
  reducers: {
    setLikedAlbum: (state, action: PayloadAction<LikedAlbumProps>) => {
      state.favoritesAlbums.push(action.payload);
    },
    removeLikedAlbum: (state, action: PayloadAction<number>) => {
      state.favoritesAlbums = state.favoritesAlbums.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const { setLikedAlbum, removeLikedAlbum } = favoriteAlbums.actions;

export const selectFavoriteAlbumById =
  (id: number) =>
  (state: AppState): boolean =>
    state.favoriteAlbums.favoritesAlbums
      ? !!state.favoriteAlbums.favoritesAlbums.find(item => item.id === id)
      : false;

export default favoriteAlbums.reducer;
