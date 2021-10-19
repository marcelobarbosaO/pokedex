import React from 'react';

import { InputContainer, InputField } from './styles';

const InputSearch = props => (
  <InputContainer>
    <InputField {...props} autoCapitalize="none" autoCorrect={false} />
  </InputContainer>
);

export default InputSearch;
