import { Title as TitleRP } from 'react-native-paper';
import styled from 'styled-components/native';

import { moderateScale } from '@utils/helpers';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  padding: 20px;
`;

export const KeyboardContent = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: space-around;
`;

export const Logo = styled.Image`
  width: ${moderateScale(252)}px;
  align-self: center;
`;

export const Content = styled.View`
  background: ${props => props.theme.colors.background};
  padding: ${props => props.theme.sizes.padding}px;
  border-radius: ${props => props.theme.sizes.border}px;
`;

export const Title = styled(TitleRP)`
  color: ${props => props.theme.colors.text};
  font-weight: 600;
  font-size: ${moderateScale(20)}px;
`;

export const SubTitle = styled(TitleRP)`
  color: ${props => props.theme.colors.text};
  font-weight: 300;
  font-size: ${moderateScale(15)}px;
`;

export const ErrorText = styled.Text`
  color: ${props => props.theme.colors.notification};
`;
