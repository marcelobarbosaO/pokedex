import { TextInput } from 'react-native-paper';
import { moderateScale } from 'react-native-size-matters';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

export const InputContainer = styled.View`
  position: relative;
`;

export const InputField = styled(TextInput)``;

export const Button = styled.TouchableOpacity`
  position: absolute;
  padding: ${moderateScale(14)}px;
  top: 0;
  right: 0;
`;

export const Icon = styled(IonIcon)`
  color: ${({ theme }) => theme.colors.placeholder};
`;
