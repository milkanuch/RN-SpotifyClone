import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigation from '../HomeStackNavigation/HomeStackNavigation';
import LibraryStackNavigation from '../LibraryStackNavigation/LibraryStackNavigation';
import SearchStackNavigation from '../SearchStackNavigation/SearchStackNavigation';

import {
  BOTTOM_TAB_NAVIGATOR_OPTIONS,
  HOME_STACK_OPTIONS,
  SEARCH_STACK_OPTIONS,
  LIBRARY_STACK_OPTIONS,
} from './bottomTabNavigation.settings';
import {
  BottomTabNavigationParamsList,
  BottomTabNavigationTypes,
} from './bottomTabNavigation.types';

const BottomTab = createBottomTabNavigator<BottomTabNavigationParamsList>();

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator screenOptions={BOTTOM_TAB_NAVIGATOR_OPTIONS}>
      <BottomTab.Screen
        component={HomeStackNavigation}
        name={BottomTabNavigationTypes.HomeStack}
        options={HOME_STACK_OPTIONS}
      />
      <BottomTab.Screen
        component={SearchStackNavigation}
        name={BottomTabNavigationTypes.SearchStack}
        options={SEARCH_STACK_OPTIONS}
      />
      <BottomTab.Screen
        component={LibraryStackNavigation}
        name={BottomTabNavigationTypes.LibraryStack}
        options={LIBRARY_STACK_OPTIONS}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
