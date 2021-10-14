import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

const Loading = () => (
  <Container>
    <ActivityIndicator color="#000" size="large" />
  </Container>
);

export default Loading;
