import React from 'react';

import { NUMBER_TO_CALCULATE_SIZE } from '@utils/constants';

import { ContainerTab, RowTab, Type, Value } from '../../styles';

type Props = {
  pokemon: PokemonProps;
};

const About = ({ pokemon }: Props): JSX.Element => (
  <ContainerTab>
    <RowTab>
      <Type>Specie</Type>
      <Value>{pokemon.species.name}</Value>
    </RowTab>
    <RowTab>
      <Type>Height</Type>
      <Value>{`${pokemon.height / NUMBER_TO_CALCULATE_SIZE} m`}</Value>
    </RowTab>
    <RowTab>
      <Type>Weight</Type>
      <Value>{`${pokemon.weight / NUMBER_TO_CALCULATE_SIZE} KG`}</Value>
    </RowTab>
    <RowTab>
      <Type>Habilities</Type>
      <Value>{pokemon.abilities.map(ability => `${ability.ability.name}, `)}</Value>
    </RowTab>
  </ContainerTab>
);

export default About;
