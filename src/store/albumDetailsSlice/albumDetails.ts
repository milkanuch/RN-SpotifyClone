import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from 'store/index';

import { AlbumDetailResponseProps } from 'types/album';

import { AlbumDetailsState } from './albumDetails.types';

const initialState: AlbumDetailsState = {
  details: [],
};

const albumDetails = createSlice({
  name: 'AlbumDetails',
  initialState,
  reducers: {
    setAlbumDetails: (
      state,
      action: PayloadAction<AlbumDetailResponseProps[]>,
    ) => {
      state.details.push(...action.payload);
    },
  },
});

export const { setAlbumDetails } = albumDetails.actions;

export const selectAlbumDetails = (state: AppState) =>
  state.albumDetails.details;
export default albumDetails.reducer;
