import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BottomTabNavigation from 'navigation/BottomTabNavigation/BottomTabNavigation';

import { appTheme } from './appNavigation.settings';

const AppNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={appTheme}>
        <BottomTabNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
