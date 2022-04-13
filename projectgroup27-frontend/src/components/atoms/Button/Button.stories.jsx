import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Red.args = {
  label: 'Button',
  color: 'red',
  rounded: true
};

export const Pink = Template.bind({});
Pink.args = {
  label: 'Button',
  color: 'pink',
  rounded: false
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
  label: 'Button',
  rounded: false
};

export const Grey = Template.bind({});
Grey.args = {
  color: 'grey',
  label: 'Button',
  rounded: true
};

export const Black = Template.bind({});
Black.args = {
  color: 'black',
  label: 'Button',
  rounded: true
};
