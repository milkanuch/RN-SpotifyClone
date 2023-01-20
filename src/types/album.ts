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

export interface AlbumDetailResponseProps {
  id: number;
  name: string;
  numberOfLikes: number;
  imageUri: string;
  artistsHeadline: string;
  songs: SongProps[];
}

export interface AlbumCategoriesResponseProps {
  id: number;
  title: string;
  albums: AlbumResponseProps[];
}

export interface LikedAlbumProps extends AlbumResponseProps {
  name: string;
}
