import React from 'react';
// import Drawer from 'react-native-drawer';

import InputSearch from '@components/InputSearch';
import Loading from '@components/Loading';
import { useList } from '@utils/hooks/usePokemon';
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

const Home = (props): JSX.Element => {
  const { navigation } = props;
  const { response, loading } = useList({ entity: 'pokemon' });

  const toggleMenu = () => {
    navigation.openDrawer();
  };

  if (loading) return <Loading />;

  return (
    <Container testID="viewhome">
      <Content>
        <Logo source={logo} resizeMode="contain" />

        <Row>
          <InputContainer>
            <InputSearch placeholder="Buscar Pokémon" underlineColor="#FFF" />
          </InputContainer>
          <ButtonIcon onPress={() => toggleMenu()}>
            <Icon name="options-outline" size={30} />
          </ButtonIcon>
        </Row>

        <ListFilter horizontal>
          <Tag text="Todos" />
          <Tag text="Bulbasaur" />
          <Tag text="Bulbasaur" />
          <Tag text="Bulbasaur" />
          <Tag text="Bulbasaur" />
          <Tag text="Bulbasaur" />
          <Tag text="Bulbasaur" />
        </ListFilter>

        {response && (
          <ListPokemons
            data={response.results}
            keyExtractor={(item: any) => `${item.name}`}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => <CardPokemon item={item} index={index} />}
            numColumns={2}
          />
        )}
      </Content>
    </Container>
  );
};

export default Home;
