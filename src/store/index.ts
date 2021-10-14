import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { configureStore as toolkitConfigureStore } from '@reduxjs/toolkit';

import persistedReducer from './persistedReducer';
import rootSaga from './sagas';
import rootReducer from './slices';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = toolkitConfigureStore({
    reducer: persistedReducer(rootReducer),
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const defaultStore = configureStore();

export const persistor = persistStore(defaultStore);

export default configureStore;
