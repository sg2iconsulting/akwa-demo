// Item.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ItemCard from "./ItemCard";

const meta: Meta<typeof ItemCard> = {
  title: "molecules/ItemCard",
  component: ItemCard,
  tags: ["autodocs"],
  argTypes: {
    imgSrc: { control: "text" },
    title: { control: "text" },
    date: { control: "text" },
    containerBackgroundColor: { control: "color" },
    containerBorderStyle: { control: "text" },
    textColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof ItemCard>;

export const Default: Story = {
  args: {
    imgSrc: "/actuality/item2.jpeg",
    title: "Sample Title",
    date: "2023-10-01",
    containerBackgroundColor: "#FFFFFF",
    containerBorderStyle: "1px solid #F1F1F1",
    textColor: "#000000",
  },
};

export const DarkMode: Story = {
  args: {
    imgSrc: "/actuality/item4.jpeg",
    title: "Sample Title",
    date: "2023-10-01",
    containerBackgroundColor: "#1E1E1E",
    containerBorderStyle: "1px solid #1E1E1E",
    textColor: "#FFFFFF",
  },
};