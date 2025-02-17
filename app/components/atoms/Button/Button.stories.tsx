import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button"; 
import TextWithIcon from "../../molecules/TextWithIcon/TextWithIcon";
import { FaAlignJustify } from "react-icons/fa6";


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
  },
};

export default meta;


type Story = StoryObj<typeof Button>;


export const Default: Story = {
  args: {
    buttonClassename: "px-6 py-4 bg-[#097a6a] text-white rounded-full",
    children: "Click Me",
    buttonStyle: {},
  },
};

export const Prime: Story = {
    args: {
      buttonClassename: "px-6 py-2 bg-[#097a6a] text-white rounded-full",
      children: <TextWithIcon paragraphTextColor={"white"}  icon={FaAlignJustify} iconSize={10} paragraph="someText"/>,
      buttonStyle: {},
    },
  };