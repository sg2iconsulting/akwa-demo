import type { Meta, StoryObj } from "@storybook/react";
import MenuItemsList, { MenuItemsListProps } from "./MenuItemsList";

const meta: Meta<typeof MenuItemsList> = {
  title: "atoms/MenuItemsList",
  component: MenuItemsList,
  argTypes: {
    menuItemsListContainerClassename: {
      control: "text",
    },
    menuItemsListContainerStyle: {
      control: "object",
    },
    menuItemClassename: {
      control: "text",
    },
    menuItemStyle: {
      control: "object",
    },
  },
  args: {
    menuItems: ["Home", "About", "Services", "Contact"],
    menuItemsListContainerClassename: "flex p-4 bg-gray-100",
    menuItemClassename: "p-2 cursor-pointer hover:bg-gray-200",
  },
};

export default meta;

type Story = StoryObj<typeof MenuItemsList>;

export const Default: Story = {};