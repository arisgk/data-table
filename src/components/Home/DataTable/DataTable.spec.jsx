/* global describe, it, expect */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DataTable from './DataTable';

describe('DataTable', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <DataTable />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
