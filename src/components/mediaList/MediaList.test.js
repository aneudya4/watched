/* eslint-disable no-undef */
// /* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import MediaList from './MediaList';

describe('Test on the <MediaDetails/> Component', () => {
  it('renders App without crashing', () => {
    const wrapper = shallow(<MediaList />);

    expect(wrapper).toMatchSnapshot();
  });
});
