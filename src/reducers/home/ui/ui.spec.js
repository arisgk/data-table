/* global describe, it, expect */
import deepFreeze from 'deep-freeze';
import * as types from '../../../actions/home/types';
import reducer from './ui';

describe('Home', () => {
  describe('UI Reducer', () => {
    it('Returns the initial state', () => {
      expect(reducer(undefined, {})).toEqual({
        adding: false,
      });
    });

    it('Handles adding transient state action', () => {
      const state = {
        adding: false,
      };

      deepFreeze(state);

      const action = {
        type: types.START_ADDING,
      };

      const expected = {
        adding: true,
      };

      expect(reducer(state, action)).toEqual(expected);
    });

    it('Handles cancel user dialog action', () => {
      const state = {
        adding: true,
      };

      deepFreeze(state);

      const action = {
        type: types.CANCEL_USER_DIALOG,
      };

      const expected = {
        adding: false,
      };

      expect(reducer(state, action)).toEqual(expected);
    });
  });
});
