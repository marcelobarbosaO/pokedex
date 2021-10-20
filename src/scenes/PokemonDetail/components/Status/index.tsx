import React from 'react';

import { ContainerTab, RowTab, Type, Value } from '../../styles';

type Props = {
  pokemon: PokemonProps;
};

const Status = ({ pokemon }: Props) => {
  const { stats } = pokemon;

  const Stats = [
    { name: 'HP', index: 0 },
    { name: 'Attack', index: 1 },
    { name: 'Defense', index: 2 },
    { name: 'Special Attack', index: 3 },
    { name: 'Special Defense', index: 4 },
    { name: 'Speed', index: 5 },
  ];

  return (
    <ContainerTab>
      {Stats.map(stat => (
        <RowTab key={`stat-${stat.index}`}>
          <Type>{stat.name}</Type>
          <Value>{stats[stat.index].base_stat}</Value>
        </RowTab>
      ))}
    </ContainerTab>
  );
};

export default Status;
