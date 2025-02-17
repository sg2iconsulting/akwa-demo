import type { Meta, StoryObj } from "@storybook/react";
import ToggleSwitch from "./ToggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "molecules/ToggleSwitch",
  component: ToggleSwitch,
  tags: ["docs"],
  argTypes: {
    checked: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    onChange: {
      action: "toggled",
    },
    inputClassname: {
      control: "text",
    },
    inputStyle: {
      control: "object",
    },
    trackClassname: {
      control: "text",
    },
    trackStyle: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: {
    checked: false,
    onChange: () => {},
    inputClassname: "sr-only peer",
    inputStyle: {},
    trackClassname: "relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-700 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 focus:outline-none focus:ring-0 sm:w-11 sm:h-6 sm:after:h-5 sm:after:w-5",
    trackStyle: {},
  },
};
