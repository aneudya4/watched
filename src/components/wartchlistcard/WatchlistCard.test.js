/* eslint-disable no-undef */
// /* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import WatchlistCard from './WatchListCard';

describe('Test on the <WatchlistCard/> Component', () => {
  it('renders App without crashing', () => {
    const wrapper = shallow(<WatchlistCard />);

    expect(wrapper).toMatchSnapshot();
  });
});
