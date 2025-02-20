import { Meta, StoryObj } from "@storybook/react";
import FooterNav from "../../molecules/FooterNav/FooterNav";

const meta: Meta<typeof FooterNav> = {
  title: "Molecules/FooterNav",
  component: FooterNav,
  tags: ["doc"],
  argTypes: {
    items: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FooterNav>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
};
