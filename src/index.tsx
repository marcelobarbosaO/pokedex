import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider, Title } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import theme from '@theme/index';
import { defaultStore, persistor } from './store';
import '@utils/reactotron';

const App = (): JSX.Element => (
  <Provider store={defaultStore}>
    <PersistGate persistor={persistor}>
      <PaperProvider theme={theme}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Title testID="title">Bem-vindo</Title>
        </View>
      </PaperProvider>
    </PersistGate>
  </Provider>
);

export default App;
