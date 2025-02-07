import { Meta, StoryObj } from "@storybook/react";
import FeedBack, { FeedBackProps } from "./FeedBack";

const meta: Meta<typeof FeedBack> = {
  title: "Components/FeedBack",
  component: FeedBack,
  tags: ["autodocs"],
  argTypes: {
    fullName: { control: "text" },
    comment: { control: "text" },
    fullNameTextColor: { control: "color" },
    commentTextColor: { control: "color" },
    lineColor: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<FeedBackProps>;

export const Default: Story = {
  args: {
    fullName: "John Doe",
    comment: "This is a fantastic product! Highly recommend it to everyone.",
    fullNameTextColor: "#000000",
    commentTextColor: "#000000",
    lineColor: "1px solid #3e3e3e",
  },
};

