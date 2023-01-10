import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ListRenderItem } from 'react-native';

import { getLastPlayedAlbums } from 'services/index';

import LastPlayedAlbumsItem from './LastPlayedAlbumsItem/LastPlayedAlbumsItem';
import { prepareData } from './lastPlayedAlbums.utils';

import { LastPlayedAlbumsResponseProps } from 'types/album';

import { numberOfColumns } from './lastPlayedAlbums.settings';
import styles from './lastPlayedAlbums.styles';

const renderItem: ListRenderItem<LastPlayedAlbumsResponseProps> = ({
  item,
}) => (
  <LastPlayedAlbumsItem
    albumId={item.id}
    imageUri={item.imageUri}
    title={item.title}
  />
);

const keyExtractor = (item: LastPlayedAlbumsResponseProps) =>
  item.id.toString();

const LastPlayedAlbums = () => {
  const [lastPlayedAlbums, setLastPlayedAlbums] =
    useState<LastPlayedAlbumsResponseProps[]>();

  const [isLoading, setIsLoading] = useState(true);

  const setAlbumData = useCallback(async () => {
    const data = await getLastPlayedAlbums();
    setLastPlayedAlbums(prepareData(data));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setAlbumData();
  }, [setAlbumData]);

  if (isLoading) {
    return <ActivityIndicator style={styles.screen} />;
  }

  return (
    <FlatList
      data={lastPlayedAlbums}
      keyExtractor={keyExtractor}
      numColumns={numberOfColumns}
      renderItem={renderItem}
    />
  );
};

export default LastPlayedAlbums;
