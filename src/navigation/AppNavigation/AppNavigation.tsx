import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppStackNavigation from 'navigation/AppStackNavigation/AppStackNavigation';

import { appTheme } from './appNavigation.settings';

const AppNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={appTheme}>
        <AppStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
