import React from 'react';
import App from '../src';
import * as redux from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import axios from 'axios';
import { defaultStore as store } from '../src/store';
import theme from '../src/theme';
import 'jest-styled-components';

import { render, cleanup } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

const userMock = {
  user: {
    id: 123,
  },
  isLoading: false,
  error: null,
  token: '123',
  sendedRecoverPassword: false,
};

afterEach(cleanup);

describe('Test auth user redirect', () => {
  it('should be logged user', async () => {
    store.getState = () => userMock;

    jest.spyOn(redux, 'useSelector').mockReturnValue(userMock);

    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: {}, loading: false }));

    const { getByTestId, getAllByText } = render(
      <redux.Provider store={store}>
        <PaperProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </PaperProvider>
      </redux.Provider>,
    );

    expect(getByTestId('viewhome')).not.toBeNull();
    expect(getAllByText('HOME')).toHaveLength(1);
  });

  it('should be guest user', async () => {
    const offUser = { ...userMock, user: null, token: null };

    store.getState = () => offUser;
    jest.spyOn(redux, 'useSelector').mockReturnValue(offUser);

    const { getByTestId, getAllByText } = render(
      <redux.Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </redux.Provider>,
    );

    expect(getByTestId('viewsignin')).not.toBeNull();
    expect(getByTestId('button-submit')).not.toBeNull();
    expect(getAllByText('Bem-vindo')).toHaveLength(1);
  });
});
