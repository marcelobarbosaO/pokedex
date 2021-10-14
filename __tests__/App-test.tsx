import React from 'react';
import App from '../src';
import { Provider } from 'react-redux';
import { defaultStore as store } from '../src/store';

import { render } from '@testing-library/react-native';

it('renders correctly', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(getByTestId('title')).not.toBeNull();
});
