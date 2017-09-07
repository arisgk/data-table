/* global describe, it, expect */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DataTableWithLoader from './DataTableWithLoader';

describe('DataTableWithLoader', () => {
  it('renders correctly', () => {
    const data = {
      loading: false,
      error: null,
      users: [],
    };

    let wrapper = shallow(
      <DataTableWithLoader data={data} />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();

    data.loading = true;
    wrapper = shallow(
      <DataTableWithLoader data={data} />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();

    data.loading = false;
    data.users = [
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
    wrapper = shallow(
      <DataTableWithLoader data={data} />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
