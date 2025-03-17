import { Meta, StoryObj } from '@storybook/react';
import LinkAnchor from './LinkAnchor';

const meta: Meta<typeof LinkAnchor> = {
  title: 'atoms/LinkAnchor',
  component: LinkAnchor,
  argTypes: {
    className: { control: 'text' },
    target: {
      control: { type: 'select' },
      options: ['_blank', '_self', '_parent', '_top'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof LinkAnchor>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'This is a link',
    target: '_blank',
  },
};