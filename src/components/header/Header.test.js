/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Test on the <Header/> Component', () => {
  it('renders App without crashing', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
