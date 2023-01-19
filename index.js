/**
 * @format
 */

import { AppRegistry } from 'react-native';

import ErrorBoundary from 'react-native-error-boundary';
import TrackPlayer from 'react-native-track-player';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { name as appName } from './app.json';
import FallBack from './src/components/FallBack/FallBack';
import { PlaybackService } from './src/services/player/PlayBackService';
import { store, persistor } from './src/store/index';

const Root = () => {
  return (
    <ErrorBoundary FallbackComponent={FallBack}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

AppRegistry.registerComponent(appName, () => Root);
TrackPlayer.registerPlaybackService(() => PlaybackService);
