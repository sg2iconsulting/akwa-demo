import { Meta, StoryObj } from "@storybook/react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: false,
    },
    iconClassename: {
      control: "text",
    },
    iconStyle: {
      control: "object",
    },
    iconSize: {
      control: "number",
    },
    iconColor: {
      control: "color",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const HomeIcon: Story = {
  args: {
    icon: FaHome,
    iconSize: 30,
    iconColor: "blue",
  },
};

export const UserIcon: Story = {
  args: {
    icon: FaUser,
    iconSize: 30,
    iconColor: "red",
  },
};

export const SettingsIcon: Story = {
  args: {
    icon: FaCog,
    iconSize: 30,
    iconColor: "green",
  },
};

export const EmailIcon: Story = {
  args: {
    icon: MdEmail,
    iconSize: 30,
    iconColor: "purple",
  },
};
