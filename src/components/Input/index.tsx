import React, { useState } from 'react';

import { InputContainer, InputField, Button, Icon } from './styles';

const Input = (props): JSX.Element => {
  const { isPassword } = props;
  const [visible, setVisible] = useState<boolean>(false);

  const renderIcon = (): JSX.Element => {
    const name = visible ? 'eye-off' : 'eye';

    const changeType = (): void => {
      setVisible(prevState => !prevState);
    };

    return (
      <Button onPress={changeType}>
        <Icon name={name} size={30} />
      </Button>
    );
  };

  return (
    <InputContainer>
      <InputField
        {...props}
        secureTextEntry={isPassword && !visible}
        autoCorrect={false}
        autoCapitalize="none"
      />
      {isPassword && renderIcon()}
    </InputContainer>
  );
};

export default Input;
