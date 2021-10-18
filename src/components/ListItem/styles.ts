import { Text } from 'react-native-paper';
import styled from 'styled-components/native';
import { moderateScale } from '@utils/helpers';

type ViewProps = {
  index: number;
  active?: boolean;
};

type TextProps = {
  active?: boolean;
};

export const Container = styled.TouchableOpacity<ViewProps>`
  background: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.accent)};
  border-radius: ${moderateScale(4)}px;
  margin-left: ${({ index }) => (index % 2 !== 0 ? moderateScale(15) : 0)}px;
  margin-bottom: ${moderateScale(12)}px;
  position: relative;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: ${moderateScale(40)}px;
`;

export const PokemonType = styled(Text)<TextProps>`
  color: ${({ theme, active }) => (active ? theme.colors.background : theme.colors.backdrop)};
  font-weight: normal;
  text-transform: capitalize;
`;
