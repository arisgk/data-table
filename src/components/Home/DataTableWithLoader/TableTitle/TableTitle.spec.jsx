/* global describe, it, expect */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TableTitle from './TableTitle';

describe('DataTableWithLoader', () => {
  it('renders correctly', () => {
    const selection = { selected: [] };

    let wrapper = shallow(
      <TableTitle selection={selection} />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();

    selection.selected = ['1234abcd'];

    wrapper = shallow(
      <TableTitle selection={selection} />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();

    selection.selected = ['1234abcd', '5678efgh'];

    wrapper = shallow(
      <TableTitle selection={selection} />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();

    selection.selected = [];

    wrapper = shallow(
      <TableTitle selection={selection} />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
