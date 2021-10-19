import { Text } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import { moderateScale } from '@utils/helpers';

export const Container = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${moderateScale(36)}px;
  height: ${moderateScale(32)}px;
  margin-right: ${moderateScale(10)}px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-direction: row;
`;
export const TagText = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  padding-left: ${moderateScale(14)}px;
  text-transform: capitalize;
`;

export const Icon = styled(IonIcon)`
  color: ${({ theme }) => theme.colors.placeholder};
  padding-horizontal: ${moderateScale(8)}px;
`;
