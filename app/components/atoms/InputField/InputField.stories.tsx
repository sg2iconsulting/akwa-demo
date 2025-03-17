import { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'atoms/InputField',
  component: InputField,
  argTypes: {
    className: { control: 'text' },
    type: { control: 'text' },
    placeholder: { control: 'text' },
    style: {control: 'object'}
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};