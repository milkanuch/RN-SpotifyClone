import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  ViewToken,
} from 'react-native';

import TrackPlayer, { Track } from 'react-native-track-player';

import { COLORS } from 'constants/colors';
import { responsiveWidth } from 'constants/scale';

import PlayerWidget from './PlayerWidget/PlayerWidget';

import { viewConfig } from './playerCarousel.settings';
import styles from './playerCarousel.styles';

const keyExtractor = (item: Track, index: number) => index + ' ' + item.title;

const renderItem: ListRenderItem<Track> = ({ item }) => (
  <PlayerWidget
    artist={item.artist}
    artwork={item.artwork}
    title={item.title}
  />
);

const getItemLayout = (_: Track[] | null | undefined, index: number) => {
  const ITEM_WIDTH_PERCENTAGE = 100;

  return {
    length: responsiveWidth(ITEM_WIDTH_PERCENTAGE),
    offset: responsiveWidth(ITEM_WIDTH_PERCENTAGE) * index,
    index,
  };
};

const PlayerCarousel = () => {
  const [queue, setQueue] = useState<Track[]>();
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getQueue = useCallback(async () => {
    const currentQueue = await TrackPlayer.getQueue();
    const currentTrack = await TrackPlayer.getCurrentTrack();

    setCurrentTrackIndex(currentTrack ? currentTrack : 0);
    setQueue(currentQueue);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getQueue();
  }, [getQueue]);

  const viewConfigRef = useRef(viewConfig);

  const handleViewChange = async ({ changed }: { changed: ViewToken[] }) => {
    if (changed[0].isViewable && changed[0].index !== null) {
      await TrackPlayer.skip(changed[0].index);
    }
  };

  const handleViewChangeRef = useRef(handleViewChange);

  if (isLoading) {
    return (
      <ActivityIndicator color={COLORS.greenBrand} style={styles.container} />
    );
  }

  return (
    <FlatList
      data={queue}
      getItemLayout={getItemLayout}
      horizontal={true}
      initialScrollIndex={currentTrackIndex}
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
