import * as types from './types';

export const showCreateDialog = () => ({
  type: types.SHOW_CREATE_DIALOG,
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

export const showDeleteDialog = () => ({
  type: types.SHOW_DELETE_DIALOG,
});
