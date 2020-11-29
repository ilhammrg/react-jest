import React from 'react';
import { shallow } from 'enzyme';
import Child from './Child';

describe('Child component test', () => {
  test('should render Child component', () => {
    expect(shallow(<Child />)).toMatchSnapshot();
  });
});