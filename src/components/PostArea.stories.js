import React from 'react';
import '../App.css';

import PostArea from './PostArea';

export default {
  title: 'Real/PostArea',
  component: PostArea,
  argTypes: { onSubmit: { action: 'submitted' } },
};

const Template = (args) => <PostArea {...args} />;

export const Primary = Template.bind({});
