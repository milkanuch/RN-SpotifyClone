import { combineReducers } from '@reduxjs/toolkit';

import albumDetails from './albumDetailsSlice/albumDetails';
import playlist from './playlistSlice/playlist';

export const rootReducer = combineReducers({
  playlist: playlist,
  albumDetails: albumDetails,
});
