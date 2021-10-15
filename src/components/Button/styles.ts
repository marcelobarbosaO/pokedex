import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

interface ButtonProps {
  large: boolean;
}

export const Btn = styled(Button).attrs<ButtonProps>(({ large }) => ({
  labelStyle: { fontWeight: large ? 'bold' : '500', paddingVertical: large ? 10 : 5 },
}))``;
