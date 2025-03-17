import type { Meta, StoryObj } from "@storybook/react";
import Posts from "./Posts";

const meta: Meta<typeof Posts> = {
  title: "Components/Posts",
  component: Posts,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    posts: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof Posts>;

export const Default: Story = {
  args: {
    title: "Derniers Posts",
    posts: [
      {
        imgSrcUrl: "/afriquiaGaz/posts/post1.png",
      },
      {
        imgSrcUrl: "/afriquiaGaz/posts/post2.png",
      },
      {
        imgSrcUrl: "/afriquiaGaz/posts/post3.png",
      },
      {
        imgSrcUrl: "/afriquiaGaz/posts/post4.png",
      },
      {
        imgSrcUrl: "/afriquiaGaz/posts/post1.png",
      },
      {
        imgSrcUrl: "/afriquiaGaz/posts/post2.png",
      },
    ],
  },
};
