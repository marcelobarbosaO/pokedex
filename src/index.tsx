import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import theme from '@theme/index';
import Routes from '@utils/routes';
import { defaultStore, persistor } from './store';
import '@utils/reactotron';

const App = (): JSX.Element => (
  <Provider store={defaultStore}>
    <PersistGate persistor={persistor}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PaperProvider>
    </PersistGate>
  </Provider>
);

export default App;
