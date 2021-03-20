import React from 'react';
import '../App.css';

import Feed from './Feed';

export default {
  title: 'Real/Feed',
  component: Feed,
};

const Template = (args) => <Feed {...args} />;

export const Primary = Template.bind({});