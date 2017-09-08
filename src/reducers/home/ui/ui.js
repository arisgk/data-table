import * as types from '../../../actions/home/types';

const initialState = {
  adding: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.START_ADDING:
      return { ...state, adding: true };
    case types.CANCEL_USER_DIALOG:
      return { ...state, adding: false };
    default:
      return state;
  }
}
