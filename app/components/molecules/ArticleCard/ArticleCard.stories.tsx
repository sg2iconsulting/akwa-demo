import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ArticleCard, { ArticleCardProps } from "./ArticleCard";

const meta: Meta<typeof ArticleCard> = {
  title: "molecules/ArticleCard",
  component: ArticleCard,
  tags: ["docs"],
  argTypes: {
    title: {
      control: "text",
      defaultValue: "Article Title",
    },
    subTitle: {
      control: "text",
      defaultValue: "Subtitle goes here",
    },
    paragraphs: {
      defaultValue: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ],
    },
    buttonLabel: {
      control: "text",
      defaultValue: "Read More",
    },
    buttonClassename: {
      control: "text",
    },
    buttonStyle: {
      control: "object",
    },
    titleClassName: {
      control: "text",
    },
    titleStyle: {
      control: "object",
    },
    subTitleClassName: {
      control: "text",
    },
    subTitleStyle: {
      control: "object",
    },
    titleSubTitleContainerClassName: {
      control: "text",
    },
    titleSubTitleContainerStyle: {
      control: "object",
    },
    containerClassName: {
      control: "text",
    },
    containerStyle: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleCard>;

export const Default: Story = {
  args: {
    title: "Exciting News!",
    subTitle: "Stay Updated with the Latest Trends",
    paragraphs: [
      "Discover the latest updates in the industry.",
      "Stay informed and ahead of the curve with our insights.",
    ],
    buttonLabel: "Learn More",
    containerClassName: "bg-white p-4 shadow-md rounded-lg",
    titleClassName: "text-xl font-bold",
    subTitleClassName: "text-lg text-gray-500",
    buttonClassename: "bg-blue-500 text-white py-2 px-4 rounded",
  },
};

export const CustomStyled: Story = {
  args: {
    title: "Breaking News!",
    subTitle: "Exclusive Insights You Can’t Miss",
    paragraphs: [
      "Get the most in-depth analysis on current events.",
      "Stay tuned for more updates coming your way.",
    ],
    buttonLabel: "Read More",
    containerClassName: "bg-gray-900 text-white flex flex-col gap-10 p-6 rounded-md",
    titleClassName: "text-2xl font-extrabold",
    subTitleClassName: "text-lg text-gray-300",
    buttonClassename: "bg-red-500 text-white py-2 px-6 rounded-full",
  },
};
