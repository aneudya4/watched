/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('Test on the <Dashboard/> Component', () => {
  it('renders App without crashing', () => {
    const testProp = {
      match: () => {},
      history: () => {},
    };
    const wrapper = shallow(<Dashboard testProp={testProp} />);

    expect(wrapper).toMatchSnapshot();
  });
});
