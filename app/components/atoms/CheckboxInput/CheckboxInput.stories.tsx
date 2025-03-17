import type { Meta, StoryObj } from "@storybook/react";
import CheckboxInput from "./CheckboxInput";

const meta: Meta<typeof CheckboxInput> = {
  title: "atoms/CheckboxInput",
  component: CheckboxInput,
  tags: ["docs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Determines if the checkbox is checked or unchecked.",
      table: { defaultValue: { summary: "false" } },
    },
    onChange: {
      action: "changed",
      description: "Function triggered when the checkbox is toggled.",
    },
    className: {
      control: "text",
      description: "Custom class for the checkbox input.",
    },
    style: {
      control: "object",
      description: "Custom inline styles for the checkbox input.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxInput>;

export const Default: Story = {
  args: {
    checked: false,
    onChange: () => {},
    className: "sr-only peer",
    style: {},
  },
};
