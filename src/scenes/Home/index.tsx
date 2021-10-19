/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import InputSearch from '@components/InputSearch';
import Loading from '@components/Loading';
import { apiPok } from '@services/api';
import CardPokemon from './components/CardPokemon';
import Tag from './components/Tag';

import {
  Container,
  Content,
  Logo,
  Row,
  InputContainer,
  ButtonIcon,
  Icon,
  ListFilter,
  ListPokemons,
} from './styles';

const logo = require('@assets/logo.png');

const NUMBER_OF_POKEMONS = 20;

const Home = (props): JSX.Element => {
  const { navigation } = props;

  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [allPokemons, setAllPokemons] = useState<PokemonProps[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonProps[]>([]);

  const { filters } = useSelector((state: { app: AppState }) => state.app);

  const toggleMenu = () => {
    navigation.openDrawer();
  };

  const fetchPokemonData = async (pokemonData: NameUrl, checkFilter: boolean) => {
    const pokemonId = pokemonData.url.split('pokemon/').pop();
    const { data } = await apiPok.get<Pokemon>(`/pokemon/${pokemonId}`);

    if (data) {
      const { name, types, sprites } = data;

      let backgroundColor = types[0].type.name;

      if (backgroundColor === 'normal' && types.length > 1) {
        backgroundColor = types[1].type.name;
      }

      const newPokemon: PokemonProps = {
        ...data,
        image: sprites?.other['official-artwork']?.front_default || '',
        backgroundColor,
      };

      setAllPokemons(prevState => [...prevState, newPokemon]);

      if (checkFilter) {
        if (searchText.length > 3 && !name.includes(searchText)) return;

        if (!filters.includes('all')) {
          const existInFilter = types.some((type: TypePokemon) => filters.includes(type.type.name));

          if (!existInFilter) return;
        }

        return setFilteredPokemons(prevState => [...prevState, newPokemon]);
      }

      setFilteredPokemons(prevState => [...prevState, newPokemon]);
    }
  };

  const filterPokemons = () => {
    if (filters.length === 1 && filters[0] === 'all') {
      return setFilteredPokemons(allPokemons);
    }

    const allFilteredPokemons = allPokemons.filter(pokemon =>
      pokemon.types.some((type: TypePokemon) => filters.includes(type.type.name)));

    const orderedPokemons = allFilteredPokemons.sort((pokemonA, pokemonB) =>
      pokemonA.name > pokemonB.name ? 1 : -1);

    setFilteredPokemons(orderedPokemons);
  };

  const handleSearch = () => {
    if (searchText.length === 0) return filterPokemons();

    if (searchText.length > 3) {
      const pokemonsFilteredByName = filteredPokemons.filter(pokemon =>
        pokemon.name.includes(searchText));

      const orderedPokemons = pokemonsFilteredByName.sort((pokemonA, pokemonB) =>
        pokemonA.name > pokemonB.name ? 1 : -1);

      setFilteredPokemons(orderedPokemons);
    }
  };

  const fetchPokemons = async ({ offsetNumber, checkFilter = false }) => {
    const { data } = await apiPok.get<List>(
      `/pokemon?limit=${NUMBER_OF_POKEMONS}&offset=${offsetNumber}`,
    );

    if (data) {
      const promises = data.results.map((resp: NameUrl) => fetchPokemonData(resp, checkFilter));

      Promise.all(promises).then(() => {
        setLoading(false);

        if (checkFilter) setLoadingMore(false);
      });
    }
  };

  const renderFooter = () => {
    if (!loadingMore) return null;

    return <Loading />;
  };

  const loadMoreItems = () => {
    if (searchText.length > 3) return;

    const newOffset = offset + NUMBER_OF_POKEMONS;

    setOffset(newOffset);
    setLoadingMore(true);

    fetchPokemons({ offsetNumber: newOffset, checkFilter: true });
  };

  useEffect(() => {
    if (filters) filterPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    fetchPokemons({ offsetNumber: offset });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container testID="viewhome">
      <Content>
        <Logo source={logo} resizeMode="contain" />

        <Row>
          <InputContainer testID="boxSearch">
            <InputSearch
              placeholder="Buscar Pokémon"
              underlineColor="#FFF"
              onChangeText={text => setSearchText(text)}
              onSubmitEditing={handleSearch}
            />
          </InputContainer>
          <ButtonIcon onPress={() => toggleMenu()}>
            <Icon name="options-outline" size={30} />
          </ButtonIcon>
        </Row>

        <ListFilter testID="boxFilters" horizontal>
          {filters &&
            filters.map(filter => <Tag text={filter} key={`tag-${filter}`} filters={filters} />)}
        </ListFilter>

        {loading && <Loading />}

        {!loading && filteredPokemons && (
          <ListPokemons
            data={filteredPokemons}
            keyExtractor={(item: any) => `${item.name}`}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <CardPokemon navigation={navigation} pokemon={item} index={index} />
            )}
            numColumns={2}
            onEndReached={loadMoreItems}
            onEndReachedThreshold={0.05}
            ListFooterComponent={renderFooter}
          />
        )}
      </Content>
    </Container>
  );
};

export default Home;
