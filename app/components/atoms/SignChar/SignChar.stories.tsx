import { Meta, StoryObj } from "@storybook/react";
import SignChar, { SignCharProps } from "./SignChar";

const meta: Meta<typeof SignChar> = {
  title: "atoms/SignChar",
  component: SignChar,
  tags: ["autodocs"],
  argTypes: {
    sign: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<SignCharProps>;

export const Default: Story = {
  args: {
    sign: "+",
    className: "text-xl font-bold text-red-500",
  },
};
