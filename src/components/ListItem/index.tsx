import React from 'react';

import { Container, PokemonType } from './styles';

type Props = {
  item: any;
  index: number;
};

const ListItem = ({ item, index }: Props): JSX.Element => (
  <Container index={index} active={index === 1}>
    <PokemonType active={index === 1}>{item.name || 'asasa'}</PokemonType>
  </Container>
);

export default ListItem;
