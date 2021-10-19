import React from 'react';
import { useDispatch } from 'react-redux';

import { updateFilters } from '@store/slices/App';

import { Container, TagText, Icon } from './styles';

type TagProps = {
  text: string;
  filters: string[];
};

const Tag = ({ text, filters }: TagProps): JSX.Element => {
  const dispatch = useDispatch();

  const updateFiltersList = () => {
    if (text !== 'all') {
      const newFilters = filters.filter(filter => filter !== text);

      if (newFilters.length === 0) return dispatch(updateFilters(['all']));

      dispatch(updateFilters(newFilters));
    }
  };

  return (
    <Container onPress={updateFiltersList}>
      <TagText>{text}</TagText>
      <Icon name="close-circle" size={25} />
    </Container>
  );
};

export default Tag;
