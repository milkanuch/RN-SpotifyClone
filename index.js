/**
 * @format
 */

import { AppRegistry } from 'react-native';

import ErrorBoundary from 'react-native-error-boundary';
import { Provider } from 'react-redux';

import App from './App';
import { name as appName } from './app.json';
import FallBack from './src/components/FallBack/FallBack';
import { store } from './src/store/index';

const Root = () => {
  return (
    <ErrorBoundary FallbackComponent={FallBack}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  );
};

AppRegistry.registerComponent(appName, () => Root);
