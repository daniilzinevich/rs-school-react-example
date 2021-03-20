import React from 'react';
import '../App.css';

import Post from './Post';

export default {
  title: 'Real/Post',
  component: Post,
};

const Template = (args) => <Post {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  author: 'Daniil',
  message: 'Lorem Ipsum'
}


export const UseArray = Template.bind({});
UseArray.args = {
  author: 'Daniil',
  message: [ 'Lorem Ipsum', 'Septum dolores']
}