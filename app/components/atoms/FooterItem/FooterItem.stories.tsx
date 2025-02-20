import { Meta, StoryObj } from "@storybook/react";
import FooterItem from "../../atoms/FooterItem/FooterItem";

const meta: Meta<typeof FooterItem> = {
  title: "atoms/FooterItem",
  component: FooterItem,
  tags: ["doc"],
  argTypes: {
    label: {
      control: "text",
    },
    href: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FooterItem>;

export const Default: Story = {
  args: {
    label: "Home",
    href: "/",
  },
};
