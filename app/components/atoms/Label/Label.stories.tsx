import { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'atoms/Label',
  component: Label,
  argTypes: {
    className: { control: 'text' },
    htmlFor: { control: 'text' },
    style: {control: 'object'}
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'This is a label',
    htmlFor: 'input-id',
  },
};