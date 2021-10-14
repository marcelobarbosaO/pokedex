import React from 'react';
import App from '../src';
import * as redux from 'react-redux';
import axios from "axios";
import { defaultStore as store } from '../src/store';

import { render } from '@testing-library/react-native';

const userMock = {
  user: {
    id: 123,
  },
  isLoading: false,
  error: null,
  token: '123',
  sendedRecoverPassword: false,
};

describe('Test auth user redirect', () => {

  it('should be logged user', async () => {
    store.getState = () => userMock;

    jest.spyOn(redux, 'useSelector').mockReturnValue(userMock);

    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: {}, loading: false }));

    const { getByTestId, getAllByText } = render(
      <redux.Provider store={store}>
        <App />
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
        <App />
      </redux.Provider>,
    );

    expect(getByTestId('viewsignin')).not.toBeNull();
    expect(getAllByText('SignIn')).toHaveLength(1);
  });
});
