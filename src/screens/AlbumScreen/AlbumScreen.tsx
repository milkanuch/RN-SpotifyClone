import React, { FC, useCallback, useEffect, useState } from 'react';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import Header from 'components/Header/Header';

import { iconImages } from 'constants/icons';

import { getAlbumDetails } from 'services/index';

import AlbumInfo from './AlbumInfo/AlbumInfo';
import AlbumSong from './AlbumSong/AlbumSong';
import { getAlbumDetailsById } from './albumScreen.utils';

import { AlbumDetailResponseProps } from 'types/album';

import styles from './albumScreen.styles';
import { IAlbumScreenProps } from 'navigation/HomeStackNavigation/homeStackNavigation.types';

const AlbumScreen: FC<IAlbumScreenProps> = ({ route }) => {
  const [albumDetails, setAlbumDetails] = useState<AlbumDetailResponseProps>();
  const [isLoading, setIsLoading] = useState(true);

  const scrollY = useSharedValue(0);

  const { id } = route.params;

  const setAlbumDetailData = useCallback(async () => {
    const data = await getAlbumDetails();
    setAlbumDetails(getAlbumDetailsById(data, id));
    setIsLoading(false);
  }, [id]);

  const handleScroll = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  useEffect(() => {
    setAlbumDetailData();
  }, [setAlbumDetailData]);

  if (isLoading) {
    return null;
  }

  return (
    <Animated.ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={1}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]}
      style={styles.screen}>
      <Header
        iconName={iconImages.Left}
        scrollY={scrollY}
        title={albumDetails?.name}
      />
      {albumDetails ? (
        <>
          <AlbumInfo
            artistHeadline={albumDetails.artistsHeadline}
            imageUri={albumDetails.imageUri}
            likes={albumDetails.numberOfLikes}
            name={albumDetails.name}
            scrollY={scrollY}
          />
          {albumDetails.songs.map((item, index) => (
            <AlbumSong
              artist={item.artist}
              imageUri={item.imageUri}
              key={index}
              title={item.title}
            />
          ))}
        </>
      ) : null}
    </Animated.ScrollView>
  );
};

export default AlbumScreen;
