import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilters } from '@store/slices/App';

import { DEFAULT_FILTER } from '@utils/constants';
import { Container, PokemonType } from './styles';

type Props = {
  item: any;
  index: number;
  allFiltersActive: string[];
};

const ListItem = ({ item, index, allFiltersActive }: Props): JSX.Element => {
  const isActive = allFiltersActive.includes(item.name);
  const dispatch = useDispatch();

  const updateFiltersList = (): void => {
    if (item.name === DEFAULT_FILTER) {
      dispatch(updateFilters([DEFAULT_FILTER]));
    } else {
      const newFilters = allFiltersActive.filter(
        filter => filter !== item.name && filter !== DEFAULT_FILTER,
      );

      dispatch(updateFilters([...newFilters, item.name]));
    }
  };

  return (
    <Container index={index} isActive={isActive} onPress={updateFiltersList}>
      <PokemonType isActive={isActive}>{item.name || 'Pokemon sem nome'}</PokemonType>
    </Container>
  );
};

export default ListItem;
