import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
import Post from './Post'

describe('<Post />', () => {
  it('length calculate correctly', () => {
    const wrapper = shallow(<Post message="test message" />);

    expect(wrapper.instance().messageLength()).toBe(12)
  })
})
