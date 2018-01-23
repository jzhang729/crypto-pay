import { combineReducers } from 'redux';
import appReducer from './appReducer';
import productReducer from './productReducer';

export default combineReducers({
  app: appReducer,
  product: productReducer
});
