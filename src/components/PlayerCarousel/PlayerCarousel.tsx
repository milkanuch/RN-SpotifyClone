import React, { useRef } from 'react';
import { FlatList, ListRenderItem, ViewToken } from 'react-native';

import { useAppDispatch, useAppSelector } from 'store/index';
import { selectPlaylist, setSongIndex } from 'store/playlistSlice/playlist';

import PlayerWidget from './PlayerWidget/PlayerWidget';
import { PlayerWidgetProps } from './PlayerWidget/playerWidget.types';

import { viewConfig } from './playerCarousel.settings';
import styles from './playerCarousel.styles';

const keyExtractor = (item: PlayerWidgetProps) => item.id + '';

const renderItem: ListRenderItem<PlayerWidgetProps> = ({ item }) => (
  <PlayerWidget
    artist={item.artist}
    imageUri={item.imageUri}
    title={item.title}
  />
);

const PlayerCarousel = () => {
  const playlist = useAppSelector(selectPlaylist);
  const dispatch = useAppDispatch();

  const viewConfigRef = useRef(viewConfig);

  const handleViewChange = ({ changed }: { changed: ViewToken[] }) => {
    if (changed[0].isViewable && changed[0].index !== null) {
      dispatch(setSongIndex(changed[0].index));
    }
  };

  const handleViewChangeRef = useRef(handleViewChange);

  return (
    <FlatList
      data={playlist}
      horizontal={true}
      keyExtractor={keyExtractor}
      onViewableItemsChanged={handleViewChangeRef.current}
      pagingEnabled={true}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      viewabilityConfig={viewConfigRef.current}
    />
  );
};

export default PlayerCarousel;
