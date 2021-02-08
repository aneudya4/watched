import React from 'react';
import { shallow } from 'enzyme';
import MediaDetails from './MediaDetails';

describe('Test on the <MediaDetails/> Component', () => {
  it('renders App without crashing', () => {
    const wrapper = shallow(<MediaDetails />);

    expect(wrapper).toMatchSnapshot();
  });
});
