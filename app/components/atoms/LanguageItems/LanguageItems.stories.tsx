import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import LanguageItems from "./LanguageItems";

const meta: Meta<typeof LanguageItems> = {
  title: "molecules/LanguageItems",
  component: LanguageItems,
};

export default meta;

type Story = StoryObj<typeof LanguageItems>;

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
