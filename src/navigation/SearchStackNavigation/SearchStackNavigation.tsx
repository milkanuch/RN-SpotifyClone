import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from '../../screens/SearchScreen/SearchScreen';

import { SEARCH_SCREEN_OPTIONS } from './searchStackNavigation.settings';
import {
  SeacrhStackNavigationParamsList,
  SeacrhStackNavigationTypes,
} from './searchStackNavigation.types';

const Stack = createStackNavigator<SeacrhStackNavigationParamsList>();

const SearchStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={SearchScreen}
        name={SeacrhStackNavigationTypes.SearchScreen}
        options={SEARCH_SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};

export default SearchStackNavigation;
