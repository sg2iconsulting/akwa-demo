import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text"; 

const meta: Meta<typeof Text> = {
  title: "atoms/Text",
  component: Text,
  argTypes: {
    children: {
      control: "text",
      description: "The text content displayed inside the tag.",
    },
    className: {
      control: "text",
      description: "Optional CSS class to apply to the component.",
    },
    style: {
      control: "object",
      description: "Inline styles to apply to the component.",
    },
    tag: {
      control: "select",
      options: ["p", "h1", "h2", "h3", "h4", "h5", "h6"],
      description: "The HTML tag to use for the component.",
    },
  },
  args: {
    tag: "p", 
    children: "This is some text",
    className: "",
    style: {},
  },
};

export default meta;

export const Default: StoryObj<typeof Text> = {
  render: (args) => <Text {...args} />,
  args: {
    tag: "p",
    children: "This is a paragraph",
  },
};

export const Heading1: StoryObj<typeof Text> = {
  render: (args) => <Text {...args} />,
  args: {
    tag: "h1",
    children: "This is an H1 Heading",
  },
};

export const Heading2: StoryObj<typeof Text> = {
  render: (args) => <Text {...args} />,
  args: {
    tag: "h2",
    children: "This is an H2 Heading",
  },
};

export const CustomStyle: StoryObj<typeof Text> = {
  render: (args) => <Text {...args} />,
  args: {
    tag: "p",
    children: "This is a styled paragraph.",
    style: { color: "blue", fontSize: "18px" },
  },
};

export const WithClassName: StoryObj<typeof Text> = {
  render: (args) => <Text {...args} />,
  args: {
    tag: "p",
    children: "This paragraph has a custom class.",
    className: "", 
  },
};
