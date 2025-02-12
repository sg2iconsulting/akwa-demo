import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SvgIcon from "./SvgIcon";

const meta: Meta<typeof SvgIcon> = {
  title: "atoms/SvgIcon",
  component: SvgIcon,
};

export default meta;

type Story = StoryObj<typeof SvgIcon>;

export const Default: Story = {
  args: {
    icon: "M9 1L11 4H7L9 1Z",
    color: "#000000",
    size: 24,
  },
};

export const CustomSizeColor: Story = {
  args: {
    icon: "M9 1L11 4H7L9 1Z",
    color: "#FF5733",
    size: 48,
  },
};

export const AnotherIcon: Story = {
  args: {
    icon: "M4 4L14 4L14 14L4 14L4 4Z",
    color: "#3498db",
    size: 32,
  },
};
