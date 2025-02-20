import { Meta, StoryObj } from "@storybook/react";
import Divider, { DividerProps } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "atoms/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    style: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<DividerProps>;

export const Default: Story = {
  args: {
    className: "w-10 bg-black",
  },
};

export const ThickDivider: Story = {
  args: {
    className: "w-full border-4 border-blue-500",
  },
};

export const CustomStyledDivider: Story = {
  args: {
    style: { width: "50px", height: "5px", backgroundColor: "red" },
  },
};
