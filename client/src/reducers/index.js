import { combineReducers } from 'redux';
import appReducer from './appReducer';
import productReducer from './productReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  app: appReducer,
  product: productReducer,
  form: formReducer
});
