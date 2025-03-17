import type { Meta, StoryObj } from "@storybook/react";
import SubmitButton, { SubmitButtonProps } from "./SubmitButton";

const meta: Meta<typeof SubmitButton> = {
  title: "atoms/SubmitButton",
  component: SubmitButton,
  tags: ["docs"],
  argTypes: {
    children: {
      control: "text",
    },
    className: {
      control: "text",
    },
    style: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {
  args: {
    children: "Submit",
    className: "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600",
  },
};
