import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native-paper';
import styled from 'styled-components/native';
import { moderateScale } from '@utils/helpers';

type ViewProps = {
  index: number;
};

export const Container = styled.TouchableOpacity<ViewProps>`
  border-radius: ${({ theme }) => theme.sizes.padding}px;
  padding: ${({ theme }) => theme.sizes.margin}px;
  margin-right: ${({ index }) => (index % 2 === 0 ? moderateScale(15) : 0)}px;
  margin-top: ${moderateScale(48)}px;
  flex: 1;
  position: relative;
  height: ${moderateScale(143)}px;
`;

export const Gradient = styled(LinearGradient)`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: ${({ theme }) => theme.sizes.padding}px;
`;

export const PokemonImage = styled.Image`
  width: ${moderateScale(80)}%;
  height: ${moderateScale(120)}px;
  z-index: 2;
  position: absolute;
  top: -30px;
  align-self: center;
`;

export const PokemonNameView = styled.View`
  background: ${({ theme }) => theme.colors.backdrop};
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin-top: 100px;
  border-radius: 15px;
`;

export const PokemonName = styled(Text)`
  color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
  text-transform: capitalize;
`;
