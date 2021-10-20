import React from 'react';
import _ from 'lodash';
import { useDispatch } from 'react-redux';

import { updateFilters } from '@store/slices/App';
import { DEFAULT_FILTER } from '@utils/constants';

import { Container, TagText, Icon } from './styles';

type TagProps = {
  text: string;
  filters: string[];
};

const Tag = ({ text, filters }: TagProps): JSX.Element => {
  const dispatch = useDispatch();

  const updateFiltersList = () => {
    if (text !== DEFAULT_FILTER) {
      const newFilters = filters.filter(filter => filter !== text);

      if (_.isEmpty(newFilters)) return dispatch(updateFilters([DEFAULT_FILTER]));

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
