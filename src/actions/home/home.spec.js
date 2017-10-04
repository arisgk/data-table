/* global describe, it, expect */
import * as actions from './home';
import * as types from './types';

describe('Actions', () => {
  describe('Home', () => {
    it('Creates an action to show add user dialog', () => {
      const expected = {
        type: types.SHOW_CREATE_DIALOG,
      };

      expect(actions.showCreateDialog()).toEqual(expected);
    });

    it('Creates an action to cancel user dialog', () => {
      const expected = {
        type: types.CANCEL_USER_DIALOG,
      };

      expect(actions.cancelUserDialog()).toEqual(expected);
    });

    it('Creates an action to select users', () => {
      const ids = ['1234abcd', '5678efgh'];

      const expected = {
        type: types.SELECT_USERS,
        ids,
      };

      expect(actions.select(ids)).toEqual(expected);
    });

    it('Creates an action to clear user selection', () => {
      const expected = {
        type: types.CLEAR_USER_SELECTION,
      };

      expect(actions.clearSelection()).toEqual(expected);
    });

    it('Creates an action to show delete user dialog', () => {
      const expected = {
        type: types.SHOW_DELETE_DIALOG,
      };

      expect(actions.showDeleteDialog()).toEqual(expected);
    });
  });
});
