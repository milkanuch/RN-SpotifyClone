import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LibraryScreen from '../../screens/LibraryScreen/LibraryScreen';

import { LIBRARY_SCREEN_OPTIONS } from './libraryStackNavigation.settings';
import {
  LibraryStackNavigationParamsList,
  LibraryStackNavigationTypes,
} from './libraryStackNavigation.types';

const Stack = createStackNavigator<LibraryStackNavigationParamsList>();
const YourLibraryStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={LibraryScreen}
        name={LibraryStackNavigationTypes.LibraryScreen}
        options={LIBRARY_SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};

export default YourLibraryStackNavigation;
