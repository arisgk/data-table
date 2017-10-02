import * as types from '../../../../actions/home/types';

const initialState = {
  selected: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_USERS:
      return { ...state, selected: action.ids };
    case types.CLEAR_USER_SELECTION:
      return { ...state, selected: [] };
    default:
      return state;
  }
}
