import axios, { AxiosInstance } from 'axios';
import { Config } from 'react-native-config';

import {
  AlbumDetailResponseProps,
  AlbumCategoriesResponseProps,
  LastPlayedAlbumsResponseProps,
  AlbumResponseProps,
} from 'types/album';

const instance: AxiosInstance = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const getAlbums = async () => {
  try {
    const { data } = await instance.get<AlbumResponseProps>('/albums');
    return data;
  } catch {
    throw new Error('There are no albums');
  }
};

export const getLastPlayedAlbums = async () => {
  try {
    const { data } = await instance.get<LastPlayedAlbumsResponseProps[]>(
      '/albums/lastplayed',
    );

    return data;
  } catch {
    throw new Error('There are no last played albums');
  }
};

export const getAlbumsCategories = async () => {
  try {
    const { data } = await instance.get<AlbumCategoriesResponseProps>(
      '/albums/categorized',
    );
    return data;
  } catch {
    throw new Error('There are no albums categories');
  }
};

export const getAlbumDetails = async () => {
  try {
    const { data } = await instance.get<AlbumDetailResponseProps[]>(
      'albums/details',
    );
    return data;
  } catch {
    throw new Error('There are no albums details');
  }
};
