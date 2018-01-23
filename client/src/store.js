import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
// import reduxLogger from 'redux-logger';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default store;
