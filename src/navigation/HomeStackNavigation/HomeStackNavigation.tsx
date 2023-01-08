import { createStackNavigator } from '@react-navigation/stack';

import AlbumScreen from 'screens/AlbumScreen/AlbumScreen';
import HomeScreen from 'screens/HomeScreen/HomeScreen';

import {
  ALBUM_SCREEN_OPTIONS,
  HOME_SCREEN_OPTIONS,
} from './homeStackNavigation.settings';
import {
  HomeStackNavigationParamsList,
  HomeStackNavigationTypes,
} from './homeStackNavigation.types';

const Stack = createStackNavigator<HomeStackNavigationParamsList>();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name={HomeStackNavigationTypes.HomeScreen}
        options={HOME_SCREEN_OPTIONS}
      />
      <Stack.Screen
        component={AlbumScreen}
        name={HomeStackNavigationTypes.AlbumScreen}
        options={ALBUM_SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
