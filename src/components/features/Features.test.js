/* eslint-disable no-undef */
// /* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Features from './Features';

describe('Test on the <Features/> Component', () => {
  it('renders App without crashing', () => {
    const wrapper = shallow(<Features />);

    expect(wrapper).toMatchSnapshot();
  });
});
