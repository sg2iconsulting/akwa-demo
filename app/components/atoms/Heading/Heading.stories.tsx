import { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'atoms/Heading',
  component: Heading,
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    className: { control: 'text' },
    style: {control: 'object'}
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    tag: 'h1',
    children: 'This is a Heading',
  },
};