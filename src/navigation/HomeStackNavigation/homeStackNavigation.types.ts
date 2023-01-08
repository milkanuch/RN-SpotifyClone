import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import { BottomTabProps } from 'navigation/BottomTabNavigation/bottomTabNavigation.types';

export enum HomeStackNavigationTypes {
  HomeScreen = 'HomeScreen',
  AlbumScreen = 'AlbumScreen',
}

export type HomeStackNavigationParamsList = {
  [HomeStackNavigationTypes.HomeScreen]: undefined;
  [HomeStackNavigationTypes.AlbumScreen]: AlbumProps;
};

interface AlbumProps {
  id: number;
}

export type IAlbumScreenProps = StackScreenProps<
  HomeStackNavigationParamsList,
  HomeStackNavigationTypes.AlbumScreen
>;

export type LastPlayedAlbumsNavigationProps = CompositeNavigationProp<
  BottomTabProps,
  StackNavigationProp<HomeStackNavigationParamsList>
>;

export type AlbumNavigationHeaderProps = CompositeNavigationProp<
  BottomTabProps,
  StackNavigationProp<HomeStackNavigationParamsList>
>;
