/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import HomePage from './HomePage';

describe('Test on the <HomePage/> Component', () => {
  it('renders App without crashing', () => {
    const wrapper = shallow(<HomePage />);

    expect(wrapper).toMatchSnapshot();
  });
});
