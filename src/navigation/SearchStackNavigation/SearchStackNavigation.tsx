import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from 'screens/SearchScreen/SearchScreen';

import { SEARCH_SCREEN_OPTIONS } from './searchStackNavigation.settings';
import {
  SearchStackNavigationParamsList,
  SearchStackNavigationTypes,
} from './searchStackNavigation.types';

const Stack = createStackNavigator<SearchStackNavigationParamsList>();

const SearchStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={SearchScreen}
        name={SearchStackNavigationTypes.SearchScreen}
        options={SEARCH_SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};

export default SearchStackNavigation;
