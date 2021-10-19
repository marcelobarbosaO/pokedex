import { moderateScale } from 'react-native-size-matters';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

export const InputContainer = styled.View`
  position: relative;
`;

export const InputField = styled.TextInput`
  background: ${({ theme }) => theme.colors.surface};
  height: 50px;
  border-radius: 30px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  text-align: center;
  font-family: Spartan-Regular;
  font-weight: 400;
  font-size: 15px;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  padding: ${moderateScale(14)}px;
  top: 0;
  right: 0;
`;

export const Icon = styled(IonIcon)`
  color: ${({ theme }) => theme.colors.placeholder};
`;
