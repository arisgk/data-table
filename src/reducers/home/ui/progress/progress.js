import * as types from '../../../../actions/home/types';

const initialState = {
  adding: false,
  deleting: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_CREATE_DIALOG:
      return { ...state, adding: true };
    case types.SHOW_DELETE_DIALOG:
      return { ...state, deleting: true };
    case types.CANCEL_USER_DIALOG:
      return { ...state, adding: false, deleting: false };
    default:
      return state;
  }
}
