import React, { useEffect, useState } from 'react';

import theme from '@theme/index';
import { usePokemon } from '@utils/hooks/usePokemon';

import { Container, Gradient, PokemonNameView, PokemonName, PokemonImage } from './styles';

type CardProps = {
  item: any;
  index: number;
};

interface PokemonProps {
  id: number;
  name: string;
  image: string;
  backgroundColor: string;
}

const CardPokemon = ({ item, index }: CardProps): JSX.Element => {
  const { url } = item;
  const [pokemon, setPokemon] = useState({} as PokemonProps);

  const pokemonId = url.split('pokemon/').pop();
  const { response, loading } = usePokemon(pokemonId);

  useEffect(() => {
    if (response) {
      const { id, name, types, sprites } = response;
      let backgroundColor = types[0].type.name;

      if (backgroundColor === 'normal' && types.length > 1) {
        backgroundColor = types[1].type.name;
      }

      setPokemon({
        id,
        name,
        image: sprites?.other['official-artwork']?.front_default || '',
        backgroundColor,
      });
    }
  }, [response]);

  if (loading) {
    return (
      <Container index={index}>
        <PokemonName>Carregando</PokemonName>
      </Container>
    );
  }

  const colors = [theme.backgroundType[pokemon.backgroundColor], '#000'];

  return (
    <Container index={index}>
      <Gradient colors={colors} start={{ x: 0, y: 0 }} end={{ x: 2.8, y: 0 }} />
      <PokemonImage source={{ uri: pokemon.image }} resizeMode="contain" />
      <PokemonNameView>
        <PokemonName>{pokemon.name || 'asasa'}</PokemonName>
      </PokemonNameView>
    </Container>
  );
};

export default CardPokemon;
