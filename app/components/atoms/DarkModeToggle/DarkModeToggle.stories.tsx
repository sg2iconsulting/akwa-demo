import { Meta, StoryObj } from "@storybook/react";
import DarkModeToggle from "./DarkModeToggle";
import { HiSun } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";

const meta: Meta<typeof DarkModeToggle> = {
  title: "atoms/DarkModeToggle",
  component: DarkModeToggle,
  tags: ["docs"],
  argTypes: {
    resolvedTheme: {
      control: "radio",
      options: ["light", "dark"],
      table: { type: { summary: "string" }, defaultValue: { summary: "light" } },
    },
    handleToggle: { action: "toggled"},
    containerClassname: { control: "text"},
    containerStyle: { control: "object"},
    cercleDivClassname: { control: "text"},
    cercleDivStyle: { control: "object"},
    inputClassname: { control: "text"},
    inputStyle: { control: "object"},
    SunIcon: { control: false},
    MoonIcon: { control: false},
    sunIconClassname: { control: "text"},
    sunIconStyle: { control: "object"},
    moonIconClassname: { control: "text"},
    moonIconStyle: { control: "object"},
  },
  args: {
    resolvedTheme: "light",
    SunIcon: HiSun,
    MoonIcon: FaMoon,
    sunIconClassname: "text-yellow-400 text-lg",
    moonIconClassname: "text-blue-400 text-lg",
  },
};

export default meta;

type Story = StoryObj<typeof DarkModeToggle>;

export const Default: Story = {};
