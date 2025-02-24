import { Meta, StoryObj } from "@storybook/react";
import DropdownTrigger, { DropdownTriggerProps } from "./DropDownTrigger";

export default {
  title: "atoms/DropdownTrigger",
  component: DropdownTrigger,
  argTypes: {
    onClick: { action: "clicked" },
    chevronColor: { control: "color" },
  },
} as Meta<typeof DropdownTrigger>;

export const Default: StoryObj<DropdownTriggerProps> = {
  args: {
    label: "Select Option",
    chevronColor: "#000000",
    className: "border border-gray-300",
  },
};
