import { Meta, StoryObj } from "@storybook/react";
import PostCard, { PostCardProps } from "../../molecules/PostCard/PostCard";

const meta: Meta<typeof PostCard> = {
  title: "molecules/PostCard",
  component: PostCard,
  args: {
    imgSrc: "/actuality/actu.jpeg",
    date: "January 1, 2025",
    title: "Post Title",
    description: "This is a brief description of the post.",
    backgroundItemColor: "#f8f9fa",
    backgroundButtonColor: "#007bff",
    buttonTextColor: "#ffffff",
    label: "Read More",
  },
};

export default meta;

type Story = StoryObj<typeof PostCard>;

export const Default: Story = {};
