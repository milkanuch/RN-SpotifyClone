import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import PlayerScreen from 'screens/PlayerScreen/PlayerScreen';

import BottomTabNavigation from 'navigation/BottomTabNavigation/BottomTabNavigation';

import {
  BOTTOM_TAB_OPTIONS,
  PLAYER_SCREEN_OPTIONS,
} from './appStackNavigation.settings';
import {
  AppStackNavigationParamsList,
  AppStackNavigationTypes,
} from './appStackNavigator.types';

const Stack = createStackNavigator<AppStackNavigationParamsList>();
const AppStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={BottomTabNavigation}
        name={AppStackNavigationTypes.BottomTab}
        options={BOTTOM_TAB_OPTIONS}
      />
      <Stack.Screen
        component={PlayerScreen}
        name={AppStackNavigationTypes.PlayerScreen}
        options={PLAYER_SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
