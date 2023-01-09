import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { BottomTabProps } from 'navigation/BottomTabNavigation/bottomTabNavigation.types';

export enum AppStackNavigationTypes {
  BottomTab = 'BottomTab',
  PlayerScreen = 'PlayerScreen',
}

export type AppStackNavigationParamsList = {
  [AppStackNavigationTypes.BottomTab]: undefined;
  [AppStackNavigationTypes.PlayerScreen]: undefined;
};

export type SongNavigationProps = CompositeNavigationProp<
  StackNavigationProp<AppStackNavigationParamsList>,
  BottomTabProps
>;
