/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { useWindowDimensions, Text } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Spacing from '@components/Spacing';
import theme from '@theme/index';
import About from './components/About';
import Evolution from './components/Evolution';
import Status from './components/Status';

import {
  Container,
  Content,
  Header,
  ButtonIcon,
  Icon,
  Id,
  Row,
  PokemonName,
  List,
  ChipItem,
  PokemonCard,
  Gradient,
  PokemonImage,
} from './styles';

const PokemonDetail = (props): JSX.Element => {
  const {
    route: {
      params: { pokemon },
    },
    navigation,
  } = props;

  const layout = useWindowDimensions();
  const colors: string[] = [theme.backgroundType[pokemon.backgroundColor], '#000'];

  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    { key: 'about', title: 'About' },
    { key: 'status', title: 'Stats' },
    { key: 'evolution', title: 'Evolution' },
  ]);

  const renderScene = SceneMap({
    about: () => <About pokemon={pokemon} />,
    status: () => <Status pokemon={pokemon} />,
    evolution: () => <Evolution pokemon={pokemon} />,
  });

  const renderTabBar = (tabProps): JSX.Element => (
    <TabBar
      {...tabProps}
      indicatorStyle={{ backgroundColor: theme.colors.notification }}
      activeColor={theme.colors.backdrop}
      inactiveColor={theme.colors.disabled}
      style={{ backgroundColor: theme.colors.background }}
      renderLabel={({ route, focused, color }) => (
        <Text
          style={{
            color,
            fontFamily: 'Spartan-Regular',
            fontSize: 16,
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 10,
            textTransform: 'capitalize',
            fontWeight: focused ? 'bold' : 'normal',
          }}
        >
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <Container>
      <Content>
        <Header>
          <ButtonIcon onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={30} />
          </ButtonIcon>
        </Header>

        <Spacing vertical={5} />

        <Row>
          <PokemonName>{pokemon.name}</PokemonName>
          <Id>{`#${'000'.substr(pokemon.id.toString().length)}${pokemon.id}`}</Id>
        </Row>

        <Spacing vertical={8} />

        <List horizontal>
          {pokemon.types.map(type => (
            <ChipItem key={`chip-${type.type.name}`} background={colors[0]}>
              {type.type.name}
            </ChipItem>
          ))}
        </List>

        <Spacing vertical={15} />

        <PokemonCard>
          <Gradient colors={colors} start={{ x: 0, y: 0 }} end={{ x: 2.8, y: 0 }} />
          <PokemonImage source={{ uri: pokemon.image }} resizeMode="contain" />
        </PokemonCard>
      </Content>

      <Spacing vertical={15} />

      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </Container>
  );
};

export default PokemonDetail;
