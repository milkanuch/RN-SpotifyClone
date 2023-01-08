import { AlbumDetailResponseProps } from 'types/album';

export const getAlbumDetailsById = (
  data: AlbumDetailResponseProps[],
  id: number,
): AlbumDetailResponseProps => data.filter(item => item.id === id)[0];
