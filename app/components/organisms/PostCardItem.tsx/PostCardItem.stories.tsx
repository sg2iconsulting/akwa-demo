// src/components/PostCardItem/PostCardItem.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import PostCardItem, { PostCardItemProps, PostItem } from "./PostCardItem";

const items: PostItem[] = [
  {
    imgSrc: "/actuality/item2.jpeg",
    title: "Post Title 1",
    date: "January 1, 2025",
    containerBackgroundColor: "#ffffff",
    containerBorderStyle: "1px solid #F1F1F1",
    textColor: "#333",
  },
  {
    imgSrc: "/actuality/item1.jpeg",
    title: "Post Title 2",
    date: "February 5, 2025",
    containerBackgroundColor: "#ffffff",
    containerBorderStyle: "1px solid #F1F1F1",
    textColor: "#333",
  },
  {
    imgSrc: "/actuality/item3.jpeg",
    title: "Post Title 3",
    date: "March 10, 2025",
    containerBackgroundColor: "#ffffff",
    containerBorderStyle: "1px solid #F1F1F1",
    textColor: "#333",
  },
  {
    imgSrc: "/actuality/item4.jpeg",
    title: "Post Title 4",
    date: "April 15, 2025",
    containerBackgroundColor: "#ffffff",
    containerBorderStyle: "1px solid #F1F1F1",
    textColor: "#333",
  },
  {
    imgSrc: "/actuality/item5.jpeg",
    title: "Post Title 5",
    date: "May 20, 2025",
    containerBackgroundColor: "#ffffff",
    containerBorderStyle: "1px solid #F1F1F1",
    textColor: "#333",
  },
  {
    imgSrc: "/actuality/item6.jpeg",
    title: "Post Title 6",
    date: "June 25, 2025",
    containerBackgroundColor: "#ffffff",
    containerBorderStyle: "1px solid #F1F1F1",
    textColor: "#333",
  },
];

const meta: Meta<typeof PostCardItem> = {
  title: "organisms/PostCardItem",
  component: PostCardItem,
  argTypes: {
    titleTextColor: { control: "color" },
    backgroundItemColor: { control: "color" },
    backgroundButtonColor: { control: "color" },
    buttonTextColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<PostCardItemProps>;

export const Default: Story = {
  args: {
    items: items,
    label: "Read More",
    titleTextColor: "#333",
    backgroundItemColor: "#E1E1E1",
    backgroundButtonColor: "orange",
    buttonTextColor: "#fff",
  },
};

export const CustomColors: Story = {
  args: {
    items: items,
    label: "Explore More",
    titleTextColor: "#ffffff",
    backgroundItemColor: "#333333",
    backgroundButtonColor: "#ff9900",
    buttonTextColor: "#ffffff",
  },
};
