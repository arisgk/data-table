import * as types from './types';

export const startAdding = () => ({
  type: types.START_ADDING,
});

export const cancelUserDialog = () => ({
  type: types.CANCEL_USER_DIALOG,
});

export const select = ids => ({
  type: types.SELECT_USERS,
  ids,
});

export const clearSelection = () => ({
  type: types.CLEAR_USER_SELECTION,
});
