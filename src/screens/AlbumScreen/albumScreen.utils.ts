import { AlbumDetailResponseProps } from 'types/album';

export const getAlbumDetailsById = (
  data: AlbumDetailResponseProps[],
  id: number,
): AlbumDetailResponseProps | undefined => data.find(item => item.id === id);
