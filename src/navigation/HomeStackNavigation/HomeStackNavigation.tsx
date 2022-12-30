import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from 'screens/HomeScreen/HomeScreen';

import { HOME_SCREEN_OPTIONS } from './homeStackNavigation.settings';
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
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
