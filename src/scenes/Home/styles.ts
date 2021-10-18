import IonIcon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import { moderateScale } from '@utils/helpers';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  padding: 0 ${({ theme }) => moderateScale(theme.sizes.padding)}px;
`;

export const Logo = styled.Image`
  width: ${moderateScale(117)}px;
  height: ${moderateScale(41)}px;
  align-self: center;
  margin-bottom: ${({ theme }) => moderateScale(theme.sizes.marginIntern)}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InputContainer = styled.View`
  flex: 11;
`;

export const ButtonIcon = styled.TouchableOpacity`
  flex: 1;
  padding: ${({ theme }) => moderateScale(theme.sizes.margin)}px;
  margin-left: ${({ theme }) => moderateScale(theme.sizes.margin)}px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(IonIcon)`
  color: ${({ theme }) => theme.colors.backdrop};
`;

export const ListFilter = styled.ScrollView`
  max-height: ${moderateScale(50)}px;
  height: ${moderateScale(50)}px;
  margin-vertical: ${({ theme }) => moderateScale(theme.sizes.marginIntern)}px;
`;

export const ListPokemons = styled.FlatList``;
