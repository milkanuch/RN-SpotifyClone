import { LastPlayedAlbumsResponseProps } from 'types/album';

export const prepareData = (
  data: LastPlayedAlbumsResponseProps[],
): LastPlayedAlbumsResponseProps[] => {
  const sortedData = data.sort((a, b) => {
    const timeA = new Date(a.timeStamp);
    const timeB = new Date(b.timeStamp);

    return timeA > timeB ? -1 : timeA < timeB ? 1 : 0;
  });

  sortedData.length = 6;
  return sortedData;
};
