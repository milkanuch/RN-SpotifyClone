import { AlbumDetailResponseProps } from 'types/album';
import { Maybe } from 'types/maybe';

export const getAlbumDetailsById = (
  data: AlbumDetailResponseProps[],
  id: number,
): Maybe<AlbumDetailResponseProps> => data.find(item => item.id === id);
