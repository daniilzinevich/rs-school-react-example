import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Message from '../components/Message'

Enzyme.configure({ adapter: new Adapter() });

describe('Message', () => {
  it('renders author correctly', () => {
    const wrapper = Enzyme.shallow(<Message author="foo" message="bar"/>)
    expect(wrapper.find('span').first().text()).toEqual('foo')
  })
  it('renders text correctly', () => {
    const wrapper = Enzyme.render(<Message author="foo" message="bar"/>)
    expect(wrapper.find('.Text').text()).toEqual('bar')
  })
})