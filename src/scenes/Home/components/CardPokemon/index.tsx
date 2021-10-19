import React from 'react';

import theme from '@theme/index';

import { Container, Gradient, PokemonNameView, PokemonName, PokemonImage } from './styles';

type CardProps = {
  pokemon: any;
  index: number;
};

const CardPokemon = ({ pokemon, index }: CardProps): JSX.Element | null => {
  const colors = [theme.backgroundType[pokemon.backgroundColor], '#000'];

  return (
    <Container onPress={() => false} index={index}>
      <Gradient colors={colors} start={{ x: 0, y: 0 }} end={{ x: 2.8, y: 0 }} />
      <PokemonImage source={{ uri: pokemon.image }} resizeMode="contain" />
      <PokemonNameView>
        <PokemonName>{pokemon.name || 'asasa'}</PokemonName>
      </PokemonNameView>
    </Container>
  );
};

export default CardPokemon;
