import { combineReducers } from '@reduxjs/toolkit';

import albumDetails from './albumDetailsSlice/albumDetails';
import favoriteAlbums from './favoriteAlbumsSlice/favoriteAlbums';
import favoriteSong from './favoriteSongSlice/favoriteSong';
import playlist from './playlistSlice/playlist';

export const rootReducer = combineReducers({
  playlist: playlist,
  favoriteAlbums: favoriteAlbums,
  albumDetails: albumDetails,
  favoriteSongs: favoriteSong,
});
