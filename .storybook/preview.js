// .storybook/preview.js

import React from 'react';

export const decorators = [
  (Story) => (
    <div className="App">
      <header className="App-header">
        <Story />
      </header>
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}