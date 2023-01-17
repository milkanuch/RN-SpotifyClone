import React, { useCallback, useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';

import AppNavigation from './src/navigation/AppNavigation/AppNavigation';
import { getAlbumDetails } from './src/services/index';
import { SetupService } from './src/services/player/SetupService';
import { setAlbumDetails } from './src/store/albumDetailsSlice/albumDetails';
import { useAppDispatch } from './src/store/index';

const App = () => {
  const dispatch = useAppDispatch();

  const loadApp = useCallback(async () => {
    const data = await getAlbumDetails();
    dispatch(setAlbumDetails(data));
    await SetupService();
    SplashScreen.hide();
  }, [dispatch]);

  useEffect(() => {
    loadApp();
  }, [loadApp]);

  return <AppNavigation />;
};

export default App;
