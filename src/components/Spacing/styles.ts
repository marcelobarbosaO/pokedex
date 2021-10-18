import styled from 'styled-components/native';
import { moderateScale } from '@utils/helpers';

type ViewProps = {
  vertical?: number | undefined;
  horizontal?: number | undefined;
};

export const Space = styled.View`
  margin-vertical: ${({ vertical }: ViewProps) => moderateScale(vertical || 0) || '0'}px;
  margin-horizontal: ${({ horizontal }: ViewProps) => moderateScale(horizontal || 0) || '0'}px;
`;
