import React from 'react'

import { Input } from './Input'

export default {
	title: 'Atoms/Input',
	component: Input,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

const Template = (args) => <Input {...args} />;

export const Top = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Top.args = {
	label: 'First Name',
	placeholder: 'Enter your First Name',
	isLabelTop: true
};

export const Left = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Left.args = {
	label: 'Description',
	isLabelTop: false
};