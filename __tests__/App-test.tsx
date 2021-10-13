import React from 'react';
import App from '../src';

import { render } from '@testing-library/react-native';

it('renders correctly', () => {
  const { getByText } = render(<App />);

  console.log(getByText('Bem-vindo'));

  expect(getByText('Bem-vindo')).not.toBeNull()
});
