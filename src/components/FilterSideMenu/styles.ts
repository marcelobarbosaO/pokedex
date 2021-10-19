import { Title as TitlePaper } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import { moderateScale } from '@utils/helpers';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.SafeAreaView`
  flex: 1;
  margin-horizontal: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled(TitlePaper)`
  font-size: ${moderateScale(26)}px;
  font-weight: bold;
`;

export const SubTitle = styled(TitlePaper)`
  font-size: ${moderateScale(18)}px;
  font-weight: normal;
`;

export const ButtonText = styled.TouchableOpacity`
  margin-left: ${moderateScale(20)}px;
`;

export const Text = styled.Text`
  color: blue;
  font-family: Spartan-Regular;
  font-weight: 500;
  font-size: ${moderateScale(12)}px;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: -${moderateScale(15)}px;
  right: -${moderateScale(15)}px;
  padding: ${moderateScale(15)}px;
`;

export const Icon = styled(IonIcon)`
  color: ${({ theme }) => theme.colors.backdrop};
`;

export const List = styled.FlatList``;
