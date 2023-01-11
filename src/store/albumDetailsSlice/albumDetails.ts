import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from 'store/index';

import { AlbumDetailResponseProps } from 'types/album';

const initialState: AlbumDetailResponseProps[] = [
  {
    id: 0,
    artistsHeadline: '',
    imageUri: '',
    name: '',
    numberOfLikes: 0,
    songs: [],
  },
];

const albumDetails = createSlice({
  name: 'AlbumDetails',
  initialState,
  reducers: {
    setAlbumDetails: (
      state,
      action: PayloadAction<AlbumDetailResponseProps[]>,
    ) => {
      state.push(...action.payload);
    },
  },
});

export const { setAlbumDetails } = albumDetails.actions;

export const selectAlbumDetails = (state: AppState) => state.albumDetails;
export default albumDetails.reducer;
