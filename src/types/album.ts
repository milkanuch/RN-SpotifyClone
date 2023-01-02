import { SongProps } from './song';

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

export interface AlbumDetailProps {
  id: number;
  name: string;
  numberOfLikes: string;
  imageUri: string;
  artistsHeadline: string;
  songs: SongProps[];
}

export interface AlbumCategoriesResponseProps {
  id: number;
  title: string;
  albums: AlbumResponseProps[];
}
