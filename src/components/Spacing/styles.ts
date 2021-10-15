import styled from 'styled-components/native';

type ViewProps = {
  vertical?: number | undefined;
  horizontal?: number | undefined;
};

export const Space = styled.View`
  margin-vertical: ${({ vertical }: ViewProps) => vertical || '0'}px;
  margin-horizontal: ${({ horizontal }: ViewProps) => horizontal || '0'}px;
`;
