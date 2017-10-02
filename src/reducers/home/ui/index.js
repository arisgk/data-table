import { combineReducers } from 'redux';
import progress from './progress';
import selection from './selection';

const reducer = combineReducers({
  progress,
  selection,
});

export default reducer;
