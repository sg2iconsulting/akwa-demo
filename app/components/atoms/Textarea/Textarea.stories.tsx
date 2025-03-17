import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'atoms/Textarea',
  component: Textarea,
  argTypes: {
    className: { control: 'text' },
    placeholder: { control: 'text' },
    style: {control: 'object'}
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter long text...',
  },
};