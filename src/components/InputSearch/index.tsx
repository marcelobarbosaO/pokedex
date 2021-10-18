import React from 'react';

import { InputContainer, InputField } from './styles';

const InputSearch = props => (
  <InputContainer>
    <InputField {...props} autoCapitalize="none" />
  </InputContainer>
);

export default InputSearch;
