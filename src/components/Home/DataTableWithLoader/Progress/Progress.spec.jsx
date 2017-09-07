/* global describe, it, expect */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Progress from './Progress';

describe('DataTableWithLoader', () => {
  describe('Progress', () => {
    it('renders correctly', () => {
      const wrapper = shallow(
        <Progress />,
      );

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
