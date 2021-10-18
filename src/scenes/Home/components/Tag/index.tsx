import React from 'react';

import { Container, TagText, Icon } from './styles';

type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps): JSX.Element => {
  const removeFilter = () => false;

  return (
    <Container onPress={removeFilter}>
      <TagText>{text}</TagText>
      <Icon name="close-circle" size={25} />
    </Container>
  );
};

export default Tag;
