import React from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider, Title } from 'react-native-paper';

import theme from '@theme/index';
import '@utils/reactotron';

const App = (): JSX.Element => (
  <PaperProvider theme={theme}>
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Bem-vindo</Text>
      <Title>Bem-vindo</Title>
    </View>
  </PaperProvider>
);

export default App;
