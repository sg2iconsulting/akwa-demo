import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "reusible/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" }, 
    textColor: { control: "color" }, 
    onClick: { action: "clicked" }, 
    roundedButton: {control: "text"}
  },
  args: {
    onClick: () => console.log("Button clicked"), 
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    label: "Click Me", 
    backgroundColor: "#19A0BF", 
    textColor: "#ffffff", 
    roundedButton: "9999px"
  },
};

