import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import ToggleSwitchWithIcon from "./ToggleSwitchWithIcon";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ToggleSwitchWithIcon> = {
  title: "molecules/ToggleSwitchWithIcon",
  component: ToggleSwitchWithIcon,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: "boolean",
    },
    onChange: {
      action: "changed",
    },
    sunIconClassname: {
      control: "text",
    },
    moonIconClassname: {
      control: "text",
    },
    sunIconStyle: {
      control: "object",
    },
    moonIconStyle: {
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

const Template = (args: any) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = () => {
    setChecked(!checked);
    args.onChange(); 
  };

  return (
    <ToggleSwitchWithIcon
      {...args}
      checked={checked}
      onChange={handleChange}
    />
  );
};

export const Default: StoryObj<typeof ToggleSwitchWithIcon> = {
  args: {
    checked: false,
    sunIconClassname: "text-yellow-500 text-[20px] md:text-[28px] mb-1",
    moonIconClassname: "text-gray-300 text-[15px] md:text-[20px] mb-1",
  },
  render: Template,
};

export const Checked: StoryObj<typeof ToggleSwitchWithIcon> = {
  args: {
    checked: true,
    sunIconClassname: "text-yellow-500 text-[20px] md:text-[28px] mb-1",
    moonIconClassname: "text-gray-300 text-[15px] md:text-[20px] mb-1",
  },
  render: Template,
};

export const CustomIcons: StoryObj<typeof ToggleSwitchWithIcon> = {
  args: {
    checked: true,
    sunIcon: FaSun,
    moonIcon: FaMoon,
    sunIconClassname: "text-yellow-500 text-[20px] md:text-[28px] mb-1",
    moonIconClassname: "text-gray-300 text-[15px] md:text-[20px] mb-1",
  },
  render: Template,
};
