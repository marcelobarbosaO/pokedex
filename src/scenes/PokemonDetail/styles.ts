import LinearGradient from 'react-native-linear-gradient';
import { Title, Chip } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import Theme from '@theme/index';
import { moderateScale } from '@utils/helpers';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  margin-horizontal: 20px;
`;

export const Header = styled.View``;

export const ButtonIcon = styled.TouchableOpacity`
  padding: ${({ theme }) => moderateScale(theme.sizes.margin)}px;
  padding-left: 0px;
`;

export const Icon = styled(IonIcon)`
  color: ${({ theme }) => theme.colors.backdrop};
`;

export const PokemonName = styled(Title)`
  font-weight: 700;
  font-size: ${moderateScale(24)}px;
  text-transform: capitalize;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Id = styled(Title)`
  font-weight: 700;
  font-size: ${moderateScale(16)}px;
`;

export const List = styled.ScrollView`
  height: ${moderateScale(28)}px;
`;

type ChipProps = {
  background: string;
};

export const ChipItem = styled(Chip).attrs({
  textStyle: {
    color: Theme.colors.background,
    fontWeight: '400',
    fontSize: 14,
    textTransform: 'capitalize',
  },
})<ChipProps>`
  background: ${({ background }) => background};
  margin-right: ${moderateScale(10)}px;
`;
export const PokemonCard = styled.View`
  border-radius: ${({ theme }) => theme.sizes.padding}px;
  min-height: ${moderateScale(190)}px;
  height: ${moderateScale(190)}px;
  flex: 1;
  position: relative;
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
  height: ${moderateScale(190)}px;
  z-index: 2;
  position: absolute;
  top: -${moderateScale(30)}px;
  align-self: center;
`;

export const ContainerTab = styled.SafeAreaView`
  flex: 1;
  margin: 20px;
`;

export const RowTab = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${moderateScale(10)}px;
`;

export const RowTabText = styled.View`
  flex-direction: row;
  flex: 1.4;
  justify-content: space-between;
`;

export const Type = styled(Title)`
  font-weight: 700;
  flex: 1;
  color: ${({ theme }) => theme.colors.grayItems};
  font-size: ${moderateScale(14)}px;
  text-transform: capitalize;
`;

export const Value = styled(Title)`
  font-weight: 600;
  flex: 1.3;
  color: ${({ theme }) => theme.colors.backdrop};
  font-size: ${moderateScale(13)}px;
  text-transform: capitalize;
`;

export const Image = styled.Image`
  width: ${moderateScale(50)}px;
  height: ${moderateScale(50)}px;
  margin-right: ${moderateScale(10)}px;
  margin-bottom: ${moderateScale(15)}px;
`;

export const RowTabValue = styled(Title)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.backdrop};
  font-size: ${moderateScale(13)}px;
  text-transform: capitalize;
`;
