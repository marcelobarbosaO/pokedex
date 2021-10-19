import React from 'react';

import { ContainerTab, RowTab, Type, Value } from '../../styles';

type Props = {
  pokemon: PokemonProps;
};

const About = ({ pokemon }: Props) => (
  <ContainerTab>
    <RowTab>
      <Type>Specie</Type>
      <Value>{pokemon.species.name}</Value>
    </RowTab>
    <RowTab>
      <Type>Height</Type>
      <Value>{`${pokemon.height / 10} m`}</Value>
    </RowTab>
    <RowTab>
      <Type>Weight</Type>
      <Value>{`${pokemon.weight / 10} KG`}</Value>
    </RowTab>
    <RowTab>
      <Type>Habilities</Type>
      <Value>{pokemon.abilities.map(ability => `${ability.ability.name}, `)}</Value>
    </RowTab>
  </ContainerTab>
);

export default About;
