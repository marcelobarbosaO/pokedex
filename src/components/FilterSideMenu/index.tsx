import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '@components/ListItem';
import Loading from '@components/Loading';
import Spacing from '@components/Spacing';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { updateFilters } from '@store/slices/App';
import { useList } from '@utils/hooks/usePokemon';

import {
  Container,
  Content,
  Row,
  Title,
  SubTitle,
  ButtonText,
  Text,
  List,
  CloseButton,
  Icon,
} from './styles';

const FilterSideMenu = (): JSX.Element => {
  const navigation = useNavigation();
  const { response, loading } = useList({ entity: 'type' });
  const { filters } = useSelector((state: { app: AppState }) => state.app);
  const dispatch = useDispatch();

  const renderContent = () => {
    if (loading) return <Loading />;

    if (!response) return <SubTitle>Nada encontrado</SubTitle>;

    const allPokemonTypes: NameUrl[] = [{ name: 'all', url: '' }, ...response.results];

    const clearFilters = () => dispatch(updateFilters(['all']));

    return (
      <>
        <Row>
          <Title>Filtro</Title>
          <ButtonText onPress={clearFilters}>
            <Text>Limpar Filtros</Text>
          </ButtonText>
        </Row>
        <CloseButton onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
          <Icon name="close" size={30} />
        </CloseButton>

        <Spacing vertical={20} />

        <Row>
          <SubTitle>Tipo</SubTitle>
        </Row>

        <Spacing vertical={10} />

        <List
          data={allPokemonTypes}
          keyExtractor={(item: any) => `${item.name}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <ListItem item={item} index={index} allFiltersActive={filters} />
          )}
          numColumns={2}
        />
      </>
    );
  };

  return (
    <Container>
      <Content>{renderContent()}</Content>
    </Container>
  );
};

export default FilterSideMenu;
