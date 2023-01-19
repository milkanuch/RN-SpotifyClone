import React, { FC } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import IconButton from 'components/IconButton/IconButton';

import { iconImages } from 'constants/icons';

import { QueueInitialTracksService } from 'services/player/InitialTracksService';
import {
  removeLikedAlbum,
  selectFavoriteAlbumById,
  setLikedAlbum,
} from 'store/favoriteAlbumsSlice/favoriteAlbums';
import { useAppDispatch, useAppSelector } from 'store/index';
import { selectSongs, setIsWidgetShown } from 'store/playlistSlice/playlist';

import AlbumImage from '../AlbumImage/AlbumImage';
import AlbumTitle from '../AlbumTitle/AlbumTitle';

import { LikedAlbumProps } from 'types/album';

import styles from './albumInfo.styles';
import { AlbumInfoProps } from './albumInfo.types';
import {
  AppStackNavigationTypes,
  SongNavigationProps,
} from 'navigation/AppStackNavigation/appStackNavigator.types';

const AlbumInfo: FC<AlbumInfoProps> = ({
  id,
  name,
  artistHeadline,
  imageUri,
  scrollY,
}) => {
  const playlist = useAppSelector(selectSongs);
  const dispacth = useAppDispatch();

  const isLiked = useAppSelector(selectFavoriteAlbumById(id));

  const iconName = isLiked ? iconImages.FilledHeart : iconImages.StrokedHeart;

  const { navigate } = useNavigation<SongNavigationProps>();

  const handleLikePress = () => {
    const likedAlbum: LikedAlbumProps = {
      id,
      name,
      artistHeadline,
      imageUri,
    };

    if (isLiked) {
      dispacth(removeLikedAlbum(id));
      return;
    }

    dispacth(setLikedAlbum(likedAlbum));
  };

  const handleMenuPress = () => {
    //TODO: add menu press
  };

  const handlePlayPress = async () => {
    dispacth(setIsWidgetShown(false));
    await QueueInitialTracksService(playlist);
    navigate(AppStackNavigationTypes.PlayerScreen, {});
  };

  return (
    <View style={styles.container}>
      <AlbumImage imageUri={imageUri} scrollY={scrollY} />
      <AlbumTitle
        artistHeadline={artistHeadline}
        name={name}
        scrollY={scrollY}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.twoButtonContainer}>
          <IconButton
            iconName={iconName}
            iconStyle={isLiked ? styles.activeButton : undefined}
            onPress={handleLikePress}
          />
          <IconButton
            iconName={iconImages.MenuDots}
            onPress={handleMenuPress}
          />
        </View>
        <IconButton
          iconName={iconImages.GreenPlay}
          iconStyle={styles.playIcon}
          onPress={handlePlayPress}
        />
      </View>
    </View>
  );
};

export default AlbumInfo;
