import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Item, { ItemsProp } from "./Item";

export default {
  title: "Components/Item",
  component: Item,
  tags: ["autodocs"],
  argTypes: {
    imgSrc: { control: 'text' },
    title: { control: 'text' },
    date: { control: 'text' },
    containerBackgroundColor: { control: 'color' },
    containerBorderStyle: { control: 'text' },
    textColor: { control: 'color' },
  },
} as Meta;

type Story = StoryObj<ItemsProp>;

export const Default: Story = {
  args: {
    imgSrc: "https://via.placeholder.com/100",
    title: "Sample Item Title",
    date: "January 23, 2025",
    containerBackgroundColor: "#FFFFFF",
    containerBorderStyle: "1px solid #F1F1F1",
    textColor: "#333333",
  },
};
