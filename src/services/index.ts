import axios from 'axios';
import { Config } from 'react-native-config';

import {
  AlbumDetailResponseProps,
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

export const getAlbumDetails = async () => {
  try {
    const { data } = await axios.get<AlbumDetailResponseProps[]>(
      `${Config.API_URL}/albums/details`,
    );
    return data;
  } catch {
    throw new Error('There are no albums details');
  }
};
