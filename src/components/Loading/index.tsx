import React from 'react';
import { ActivityIndicator } from 'react-native-paper';

import theme from '@theme/index';

import { Container } from './styles';

const Loading = () => (
  <Container>
    <ActivityIndicator animating color={theme.colors.primary} size="large" />
  </Container>
);

export default Loading;
