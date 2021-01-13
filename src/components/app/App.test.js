/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('Test on the <App/> Component', () => {
  it('renders App without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
