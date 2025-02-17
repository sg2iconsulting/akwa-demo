import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import LanguageItem from "./LanguageItem";

const meta: Meta<typeof LanguageItem> = {
  title: "molecules/LanguageItem",
  component: LanguageItem,
};

export default meta;

type Story = StoryObj<typeof LanguageItem>;

export const Default: Story = {
  args: {
    label: "English",
    isSelected: false,
    onClick: () => alert("Item clicked!"),
    itemBackgroundHoverColor: "#e0e0e0",
  },
};

export const Selected: Story = {
  args: {
    label: "English",
    isSelected: true,
    onClick: () => alert("Item clicked!"),
    itemBackgroundHoverColor: "#e0e0e0",
  },
};

export const CustomHoverColor: Story = {
  args: {
    label: "English",
    isSelected: false,
    onClick: () => alert("Item clicked!"),
    itemBackgroundHoverColor: "#4CAF50",
  },
};
