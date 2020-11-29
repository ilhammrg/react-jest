import React from 'react';
import { shallow } from 'enzyme';

// component to test
import App from './App';

describe('App component test', () => {
  test('Should render App component', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});