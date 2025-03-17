import type { Meta, StoryObj } from "@storybook/react";
import ButtonText from "./ButtonText"; 


const meta: Meta<typeof ButtonText> = {
  title: "atoms/ButtonText", 
  component: ButtonText, 
  tags: ["autodocs"], 
  argTypes: {
    buttonTextClassename: {
      control: "text",
    },
    buttonTextStyle: {
      control: "object",
    },
    buttonTextLabel: {
      control: "text",
    },
  },
};

export default meta;


type Story = StoryObj<typeof ButtonText>;


export const Default: Story = {
  args: {
    buttonTextClassename: "px-6 py-4 bg-[#097a6a] text-white rounded-full",
    buttonTextLabel: "Click Me",
    buttonTextStyle: {},
  },
};