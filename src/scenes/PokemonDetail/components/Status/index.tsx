import React from 'react';

import { ContainerTab, RowTab, Type, Value } from '../../styles';

type Props = {
  pokemon: PokemonProps;
};

const Status = ({ pokemon }: Props) => {
  const { stats } = pokemon;

  return (
    <ContainerTab>
      <RowTab>
        <Type>HP</Type>
        <Value>{stats[0].base_stat}</Value>
      </RowTab>
      <RowTab>
        <Type>Attack</Type>
        <Value>{stats[1].base_stat}</Value>
      </RowTab>
      <RowTab>
        <Type>Defense</Type>
        <Value>{stats[2].base_stat}</Value>
      </RowTab>
      <RowTab>
        <Type>Special Attack</Type>
        <Value>{stats[3].base_stat}</Value>
      </RowTab>
      <RowTab>
        <Type>Special Defense</Type>
        <Value>{stats[4].base_stat}</Value>
      </RowTab>
      <RowTab>
        <Type>Speed</Type>
        <Value>{stats[5].base_stat}</Value>
      </RowTab>
    </ContainerTab>
  );
};

export default Status;
