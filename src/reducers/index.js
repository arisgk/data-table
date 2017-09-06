import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const reducer = apollo => combineReducers({
  apollo,
  routing,
});

export default reducer;
