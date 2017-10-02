/* global describe, it, expect */
import deepFreeze from 'deep-freeze';
import * as types from '../../../../actions/home/types';
import reducer from './selection';

describe('Home', () => {
  describe('Selection UI Reducer', () => {
    it('Returns the initial state', () => {
      expect(reducer(undefined, {})).toEqual({
        selected: [],
      });
    });

    const state = {
      selected: ['1234abcd', '3456cdef'],
    };

    deepFreeze(state);

    it('Selects users', () => {
      const action = {
        type: types.SELECT_USERS,
        ids: ['1234abcd', '3456cdef', '2345bcde'],
      };

      const expected = {
        selected: ['1234abcd', '3456cdef', '2345bcde'],
      };

      expect(reducer(state, action)).toEqual(expected);
    });

    it('Clears users selection', () => {
      const action = {
        type: types.CLEAR_USER_SELECTION,
      };

      const expected = {
        selected: [],
      };

      expect(reducer(state, action)).toEqual(expected);
    });
  });
});
