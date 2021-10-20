import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import Button from '@components/Button';
import Input from '@components/Input';
import Spacing from '@components/Spacing';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInRequest, errorResponse } from '@store/slices/User';
import { isIOS, showAlert } from '@utils/helpers';

import { Container, Logo, Content, Title, SubTitle, KeyboardContent, ErrorText } from './styles';

const background = require('@assets/bg.png');
const logo = require('@assets/logo.png');

type FormData = {
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('E-mail obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
});

const SignIn = (): JSX.Element => {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state: { user: UserState }) => state.user);

  useEffect(() => {
    if (!isLoading && error) {
      showAlert({
        msg: error?.error || 'Houve um erro',
      });

      dispatch(errorResponse(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, error]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data): Promise<void> => {
    if (!isLoading) {
      const { email, password } = data;

      dispatch(signInRequest({ email, password }));
    }
  };

  return (
    <Container testID="viewsignin" source={background} resizeMode="stretch">
      <KeyboardContent enabled={isIOS()} behavior="padding">
        <Logo source={logo} resizeMode="contain" />
        <Content>
          <Title>Bem-vindo</Title>
          <SubTitle>Insira os seus dados para acessar</SubTitle>

          <Spacing vertical={10} />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
              />
            )}
            name="email"
            defaultValue=""
          />
          {errors.email && (
            <ErrorText visible type="error" testID="email-error">
              {errors.email.message}
            </ErrorText>
          )}

          <Spacing vertical={15} />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Senha"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isPassword
              />
            )}
            name="password"
            defaultValue=""
          />
          {errors.password && (
            <ErrorText visible type="error" testID="password-error">
              {errors.password.message}
            </ErrorText>
          )}

          <Spacing vertical={15} />

          <Button loading={isLoading} testID="button-submit" large onPress={handleSubmit(onSubmit)}>
            Login
          </Button>
        </Content>
      </KeyboardContent>
    </Container>
  );
};

export default SignIn;
