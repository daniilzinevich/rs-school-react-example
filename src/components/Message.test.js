import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message'

describe('<Message />', () => {
  // wrong
  it('render correctly', () => {
    const wrapper = shallow(<Message author="author" message="test message" />);

    expect(wrapper.html()).toMatchSnapshot()
  })
})