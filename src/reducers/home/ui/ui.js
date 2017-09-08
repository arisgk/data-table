import * as types from '../../../actions/home/types';

const initialState = {
  adding: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.START_ADDING:
      return { ...state, adding: true };
    default:
      return state;
  }
}
