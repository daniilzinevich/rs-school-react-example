import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import '../App.css';

import Feed from './Feed';

const mockStore = configureStore([thunk]);

export default {
  title: 'Real/Feed',
  component: Feed,
};

const Template = (args) => <Provider store={mockStore({ posts: args.store })}>
  <Feed {...args} />
</Provider>;

export const WithPosts = Template.bind({});
WithPosts.args = {
  store: {
    isFetching: false,
    posts: [
      {
        author: 'Daniil',
        message: [ 'Lorem Ipsum', 'Septum dolores']
      }
    ]
  }
}

export const Loading = Template.bind({});
Loading.args = {
  store: {
    isFetching: true,
    posts: [],
  }
}