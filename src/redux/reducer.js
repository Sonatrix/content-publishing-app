import { combineReducers } from 'redux';
import articles from './reducers/articles';
import product from './reducers/product';
import authUser from './reducers/authUser';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  articles,
  product,
  authUser,
  common,
  router: routerReducer,
});
