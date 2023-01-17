import { Track } from 'react-native-track-player';

export interface AlbumResponseProps {
  id: number;
  imageUri: string;
  artistHeadline: string;
}

export interface LastPlayedAlbumsResponseProps {
  id: number;
  imageUri: string;
  title: string;
  timeStamp: string;
}

export interface AlbumDetailResponseProps {
  id: number;
  name: string;
  numberOfLikes: number;
  imageUri: string;
  artistsHeadline: string;
  songs: Track[];
}

export interface AlbumCategoriesResponseProps {
  id: number;
  title: string;
  albums: AlbumResponseProps[];
}
