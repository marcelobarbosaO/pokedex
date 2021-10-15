/* eslint-disable react/require-default-props */
import React from 'react';

import { Space } from './styles';

type Props = {
  vertical?: number | undefined;
  horizontal?: number | undefined;
};

const Spacing = ({ vertical, horizontal }: Props): JSX.Element => (
  <Space vertical={vertical} horizontal={horizontal} />
);

export default Spacing;
