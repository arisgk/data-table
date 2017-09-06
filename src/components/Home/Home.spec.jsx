/* global describe, it, expect */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MuiThemeProvider>
        <Home />
      </MuiThemeProvider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
