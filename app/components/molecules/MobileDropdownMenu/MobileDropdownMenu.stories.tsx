import type { Meta, StoryObj } from "@storybook/react";
import MobileDropdownMenu from "./MobileDropdownMenu";

const meta: Meta<typeof MobileDropdownMenu> = {
  title: "molecules/MobileDropdownMenu",
  component: MobileDropdownMenu,
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
    menuItemsTextColor: { control: "color" },
    buttonBackgroundColor: { control: "color" },
    buttonTextColor: { control: "color" },
    roundedButton: { control: "boolean" },
    buttonLabel: { control: "text" },
    borderButton: { control: "boolean" },
    borderButtonColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof MobileDropdownMenu>;

export const Default: Story = {
  args: {
    isOpen: true,
    menuItems: [
      { menuItem: "Home", link: "#" },
      { menuItem: "Profile", link: "#" },
      { menuItem: "About", link: "#" },
      { menuItem: "Contact", link: "#" },
    ],
    menuItemsTextColor: "white",
    buttonBackgroundColor: "#ff0000",
    buttonTextColor: "#fff",
    roundedButton: true,
    buttonLabel: "Get Started",
    borderButton: false,
    borderButtonColor: "#fff",
  },
};
