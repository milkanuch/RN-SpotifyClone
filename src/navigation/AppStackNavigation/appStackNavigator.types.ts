import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import { PlayerProps } from 'screens/PlayerScreen/playerScreen.types';

import { BottomTabProps } from 'navigation/BottomTabNavigation/bottomTabNavigation.types';

export enum AppStackNavigationTypes {
  BottomTab = 'BottomTab',
  PlayerScreen = 'PlayerScreen',
}

export type AppStackNavigationParamsList = {
  [AppStackNavigationTypes.BottomTab]: undefined;
  [AppStackNavigationTypes.PlayerScreen]: PlayerProps;
};

export type PlayerScreenProps = StackScreenProps<
  AppStackNavigationParamsList,
  AppStackNavigationTypes.PlayerScreen
>;

export type SongNavigationProps = CompositeNavigationProp<
  StackNavigationProp<AppStackNavigationParamsList>,
  BottomTabProps
>;
