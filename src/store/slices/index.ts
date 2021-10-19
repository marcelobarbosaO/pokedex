import { combineReducers } from 'redux';

import app from './App';
import user from './User';

export default combineReducers({ user, app });
