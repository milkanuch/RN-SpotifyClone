import axios from 'axios';
import { Config } from 'react-native-config';

import {
  AlbumCategoriesResponseProps,
  LastPlayedAlbumsResponseProps,
  AlbumResponseProps,
} from 'types/album';

export const getAlbums = async () => {
  try {
    const { data } = await axios.get<AlbumResponseProps>(
      `${Config.API_URL}/albums`,
    );
    return data;
  } catch {
    throw new Error('There are no albums');
  }
};

export const getLastPlayedAlbums = async () => {
  try {
    const { data } = await axios.get<LastPlayedAlbumsResponseProps[]>(
      `${Config.API_URL}/albums/lastplayed`,
    );
    return data;
  } catch {
    throw new Error('There are no last played albums');
  }
};

export const getAlbumsCategories = async () => {
  try {
    const { data } = await axios.get<AlbumCategoriesResponseProps>(
      `${Config.API_URL}/albums/categorized`,
    );
    return data;
  } catch {
    throw new Error('There are no albums categories');
  }
};
