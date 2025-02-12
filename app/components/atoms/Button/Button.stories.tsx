import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button"; 


const meta: Meta<typeof Button> = {
  title: "atoms/Button", 
  component: Button, 
  tags: ["autodocs"], 
  argTypes: {
    buttonClassename: {
      control: "text",
    },
    buttonStyle: {
      control: "object",
    },
    buttonLabel: {
      control: "text",
    },
  },
};

export default meta;


type Story = StoryObj<typeof Button>;


export const Default: Story = {
  args: {
    buttonClassename: "px-6 py-4 bg-[#097a6a] text-white rounded-full",
    buttonLabel: "Click Me",
    buttonStyle: {},
  },
};