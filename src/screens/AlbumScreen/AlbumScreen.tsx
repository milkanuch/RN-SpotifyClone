import React, { FC, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import Header from 'components/Header/Header';

import { iconImages } from 'constants/icons';

import { selectAlbumDetails } from 'store/albumDetailsSlice/albumDetails';
import { useAppDispatch, useAppSelector } from 'store/index';
import { setSongs } from 'store/playlistSlice/playlist';

import AlbumInfo from './AlbumInfo/AlbumInfo';
import AlbumSong from './AlbumSong/AlbumSong';
import { getAlbumDetailsById } from './albumScreen.utils';

import { AlbumDetailResponseProps } from 'types/album';

import styles from './albumScreen.styles';
import { IAlbumScreenProps } from 'navigation/HomeStackNavigation/homeStackNavigation.types';

const AlbumScreen: FC<IAlbumScreenProps> = ({ route }) => {
  const [albumDetails, setAlbumDetails] = useState<AlbumDetailResponseProps>();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  const data = useAppSelector(selectAlbumDetails);

  const scrollY = useSharedValue(0);

  const { id } = route.params;

  const setAlbumDetailData = useCallback(() => {
    setAlbumDetails(getAlbumDetailsById(data, id));

    if (albumDetails?.songs) {
      dispatch(setSongs(albumDetails?.songs));
    }

    setIsLoading(false);
  }, [data, id, albumDetails, dispatch]);

  const handleScroll = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  useEffect(() => {
    setAlbumDetailData();
  }, [setAlbumDetailData]);

  if (isLoading) {
    return <ActivityIndicator style={styles.screen} />;
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
              imageUri={item.artwork}
              index={index}
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
