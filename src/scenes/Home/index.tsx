import React from 'react';
import { Text } from 'react-native';

import Loading from '@components/Loading';
import usePokemon from '@utils/hooks/usePokemon';

import { Container } from './styles';

const Home = () => {
  const { /* response, */ loading } = usePokemon({});

  if (loading) return <Loading />;

  return (
    <Container testID="viewhome">
      <Text>HOME</Text>
    </Container>
  );
};

export default Home;
