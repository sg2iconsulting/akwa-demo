import type { Meta, StoryObj } from "@storybook/react";
import CheckboxToggleTrack from "./CheckboxToggleTrack";

const meta: Meta<typeof CheckboxToggleTrack> = {
  title: "atoms/CheckboxToggleTrack",
  component: CheckboxToggleTrack,
  tags: ["docs"],
  argTypes: {
    className: {
      control: "text",
      description: "Custom class for the track element.",
    },
    style: {
      control: "object",
      description: "Custom inline styles for the track element.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxToggleTrack>;

export const Default: Story = {
  args: {
    className:
      "relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-700 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600focus:outline-none focus:ring-0 sm:w-11 sm:h-6 sm:after:h-5 sm:after:w-5",
    style: {},
  },
};
