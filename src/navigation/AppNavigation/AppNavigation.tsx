import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import PlayerCarousel from 'components/PlayerCarousel/PlayerCarousel';

import { useAppSelector } from 'store/index';
import { selectIsShown } from 'store/playlistSlice/playlist';

import AppStackNavigation from 'navigation/AppStackNavigation/AppStackNavigation';

import { appTheme } from './appNavigation.settings';

const AppNavigation = () => {
  const isWidgetShown = useAppSelector(selectIsShown);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={appTheme}>
        <AppStackNavigation />
        {isWidgetShown ? <PlayerCarousel /> : null}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
