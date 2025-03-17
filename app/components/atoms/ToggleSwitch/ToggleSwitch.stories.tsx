import { Meta, StoryObj } from "@storybook/react";
import ToggleSwitch from "./ToggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "atoms/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: {
    checked: { control: "boolean"},
    inputClassname: { control: "text"},
    inputStyle: { control: "object"},
    cercleDivClassname: { control: "text"},
    cercleDivStyle: { control: "object"},
    onChange: { action: "toggled"},
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: {
    checked: false,
    onChange: () => {},
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    onChange: () => {},
  },
};
