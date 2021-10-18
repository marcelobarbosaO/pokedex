import React from 'react';

import ListItem from '@components/ListItem';
import Loading from '@components/Loading';
import Spacing from '@components/Spacing';
import { useNavigation, DrawerActions } from '@react-navigation/native';

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

  const renderContent = () => {
    if (loading) return <Loading />;

    if (!response) return <SubTitle>Nada encontrado</SubTitle>;

    const data = [{ name: 'todos' }, ...response.results];

    return (
      <>
        <Row>
          <Title>Filtro</Title>
          <ButtonText onPress={() => false}>
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
          data={data}
          keyExtractor={(item: any) => `${item.name}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => <ListItem item={item} index={index} />}
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
