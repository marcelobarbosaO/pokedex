import React, { useCallback, useEffect, useState } from 'react';
import Loading from '@components/Loading';
import { apiPok } from '@services/api';

import { ContainerTab, RowTab, Type, Image, Value } from '../../styles';

type Props = {
  pokemon: PokemonProps;
};

interface PokemonEvolvesProps {
  name: string;
  level: number;
  image?: string;
  number?: string;
}

interface EvolvesProps {
  species: {
    name: string;
  };
  evolution_details: [{ min_level: number }];
  evolves_to: EvolvesProps[];
}

const Evolution = ({ pokemon }: Props) => {
  const { name } = pokemon;

  const [pokemonsFamily, setPokemonsFamily] = useState<PokemonEvolvesProps[]>([]);

  const [evolvesPokemon, setEvolvesPokemon] = useState<PokemonEvolvesProps[]>([]);

  const handleNameSpecies = useCallback(
    ({ species, evolves_to, evolution_details }: EvolvesProps): PokemonEvolvesProps[] => {
      let namesPokemons: PokemonEvolvesProps[] = [
        {
          name: species.name,
          level: 0,
        },
      ];
      if (evolution_details.length) namesPokemons[0].level = evolution_details[0].min_level;

      // A propriedade evolves_to retornada pela api é um vetor, desta maneira, pode-se que um
      // pokémon tenha duas caminhos/folhas na evolução.
      // if (evolution_details.length) console.log(evolution_details[0].min_level);
      evolves_to.forEach((evolves: EvolvesProps) => {
        namesPokemons = namesPokemons.concat(handleNameSpecies(evolves));
      });

      return namesPokemons;
    },
    [],
  );

  useEffect(() => {
    apiPok.get(`/pokemon-species/${name}`).then((responseSpecies: any) => {
      const url = responseSpecies.data.evolution_chain.url.split('v2').pop();

      apiPok.get(url).then((responseEvolution: any) => {
        const species = handleNameSpecies(responseEvolution.data.chain);

        setPokemonsFamily(species);
      });
    });
  }, [name, handleNameSpecies]);

  useEffect(() => {
    if (pokemonsFamily.length) {
      const urlsAxios = pokemonsFamily.map(p => apiPok.get(`/pokemon/${p.name}`));

      Promise.all([...urlsAxios]).then(responses => {
        const result = responses.map((response: any, index: number) => {
          const { id, sprites } = response.data;

          return {
            ...pokemonsFamily[index],
            number: `#${'000'.substr(id.toString().length)}${id}`,
            image: sprites.other['official-artwork'].front_default,
          };
        });
        setEvolvesPokemon(result);
      });
    }
  }, [pokemonsFamily]);

  return (
    <ContainerTab>
      {evolvesPokemon.length ? (
        evolvesPokemon.slice(0, 6).map((evolves, index) => (
          <RowTab>
            <Image source={{ uri: evolves.image }} />
            <Type>{evolves.name}</Type>
            {index !== 0 && <Value>{`Level: ${evolves.level}`}</Value>}
          </RowTab>
        ))
      ) : (
        <Loading />
      )}
    </ContainerTab>
  );
};

export default Evolution;
