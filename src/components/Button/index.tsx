import React from 'react';

import { Btn } from './styles';

const Button = (props): JSX.Element => {
  const { children } = props;

  return (
    <Btn mode="contained" {...props}>
      {children}
    </Btn>
  );
};

export default Button;
