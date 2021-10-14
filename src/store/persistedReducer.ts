import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const options = {
  key: 'root',
  version: 0,
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = (reducers: Reducer) => persistReducer(options, reducers);

export default persistedReducer;
