import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import albumDetails from './albumDetailsSlice/albumDetails';
import playlist from './playlistSlice/playlist';

export const store = configureStore({
  reducer: {
    playlist: playlist,
    albumDetails: albumDetails,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
