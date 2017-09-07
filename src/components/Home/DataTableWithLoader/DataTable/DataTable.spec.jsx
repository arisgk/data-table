/* global describe, it, expect */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DataTable from './DataTable';

describe('DataTable', () => {
  it('renders correctly', () => {
    const users = [
      {
        id: '1234abcd',
        firstName: 'Lebron',
        lastName: 'James',
        age: 32,
      },
      {
        id: '2345bcde',
        firstName: 'Steph',
        lastName: 'Curry',
        age: 29,
      },
    ];

    const wrapper = shallow(
      <DataTable users={users} />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
