import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export enum BottomTabNavigationTypes {
  HomeStack = 'HomeStack',
  SearchStack = 'SearchStack',
  LibraryStack = 'LibraryStack',
}

export type BottomTabNavigationParamsList = {
  [BottomTabNavigationTypes.HomeStack]: undefined;
  [BottomTabNavigationTypes.SearchStack]: undefined;
  [BottomTabNavigationTypes.LibraryStack]: undefined;
};

export type BottomTabProps = BottomTabNavigationProp<
  BottomTabNavigationParamsList,
  BottomTabNavigationTypes.HomeStack
>;
