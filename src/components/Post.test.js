import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import '@testing-library/jest-dom'

import React from 'react';
import { shallow } from 'enzyme';
import Post, { messageLength } from './Post'

const testMessage = 'test'

describe('<Post />', () => {
  // wrong
  xit('length calculate correctly', () => {
    const wrapper = shallow(<Post message={testMessage} />);

    expect(wrapper.instance().messageLength()).toBe(12)
  })
})

// right
test('messageLength calculated correctly', () => {
  expect(messageLength('test message')).toBe(12)
})

describe('<Post />', () => {
  it('display length correctly', () => {
    const wrapper = shallow(<Post message={testMessage} />);

    expect(wrapper.find('.Counter').first().text()).toEqual(`length: ${testMessage.length}`)
  })
})

import { render } from '@testing-library/react'


describe('<Post />', () => {
  it('display length correctly', () => {
    const { getByText, getByTestId } = render(<Post message={testMessage} />);

    // wrong
    // expect(getByTestId('length').textContent).toEqual(`length: ${testMessage.length}`);

    // right
    expect(getByText(`length: ${testMessage.length}`)).toBeInTheDocument();
  })
})
