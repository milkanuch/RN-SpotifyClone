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
