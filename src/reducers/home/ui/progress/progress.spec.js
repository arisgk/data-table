/* global describe, it, expect */
import deepFreeze from 'deep-freeze';
import * as types from '../../../../actions/home/types';
import reducer from './progress';

describe('Home', () => {
  describe('Progress UI Reducer', () => {
    it('Returns the initial state', () => {
      expect(reducer(undefined, {})).toEqual({
        adding: false,
        deleting: false,
      });
    });

    describe('Transient states', () => {
      it('Handles adding transient state action', () => {
        const state = {
          adding: false,
          deleting: false,
        };

        deepFreeze(state);

        const action = {
          type: types.SHOW_CREATE_DIALOG,
        };

        const expected = {
          adding: true,
          deleting: false,
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Handles deleting transient state action', () => {
        const state = {
          adding: false,
          deleting: false,
        };

        deepFreeze(state);

        const action = {
          type: types.SHOW_DELETE_DIALOG,
        };

        const expected = {
          adding: false,
          deleting: true,
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('Transient states cancellation', () => {
      it('Cancels create user dialog', () => {
        const state = {
          adding: true,
          deleting: false,
        };

        deepFreeze(state);

        const action = {
          type: types.CANCEL_USER_DIALOG,
        };

        const expected = {
          adding: false,
          deleting: false,
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Cancels delete user dialog', () => {
        const state = {
          adding: false,
          deleting: true,
        };

        deepFreeze(state);

        const action = {
          type: types.CANCEL_USER_DIALOG,
        };

        const expected = {
          adding: false,
          deleting: false,
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });
  });
});
