import React from 'react';
import { shallow } from 'enzyme';
import SearchMedia from './SearchMedia';

describe('Test on the <SearchMedia/> Component', () => {
  it('renders App without crashing', () => {
    const wrapper = shallow(<SearchMedia />);

    expect(wrapper).toMatchSnapshot();
  });
});
