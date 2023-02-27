import { combineReducers } from 'redux';
import userReducer from './user';
import coinReducer from './wallet';

const rootReducer = combineReducers({
  user: userReducer,
  wallet: coinReducer,
});

export default rootReducer;
