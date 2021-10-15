import React from 'react';

import { Btn } from './styles';

const Button = props => {
  const { children } = props;

  return (
    <Btn mode="contained" {...props}>
      {children}
    </Btn>
  );
};

export default Button;
