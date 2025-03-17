import { Meta, StoryObj } from '@storybook/react';
import Paragraph from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'atoms/Paragraph',
  component: Paragraph,
  argTypes: {
    className: { control: 'text' },
    style: {control: 'object'}
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: 'This is a paragraph.',
  },
};