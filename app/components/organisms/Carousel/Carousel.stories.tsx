import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "organisms/Carousel",
  component: Carousel,
  tags: ["doc"],
  argTypes: {
    title: { control: "text"},
    description: { control: "text"},
    titleTextColor: { control: "color"},
    descriptionTextColor: { control: "color"},
    navigationIconColor: { control: "color"},
    hiddenTitle: {
      control: "select",
      options: ["block", "none"],
    },
    slides: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    title: "Trending Now",
    description: "Discover the latest trends",
    titleTextColor: "#333",
    descriptionTextColor: "#666",
    navigationIconColor: "#000",
    hiddenTitle: "block",
    slides: [
        {
          image: "/akwagroup/images/carburant.png",
        },
        {
          image: "/akwagroup/images/dev.png",
        },
        {
          image: "/akwagroup/images/transition.png",
        },
        {
          image: "/akwagroup/images/fluides.png",
        },
        {
          image: "/akwagroup/images/gaz.png",
        },
        {
          image: "/akwagroup/images/carburant.png",
        },
        {
          image: "/akwagroup/images/immobilier.png",
        },
        {
          image: "/akwagroup/images/dev.png",
        },
        {
          image: "/akwagroup/images/transition.png",
        },
        {
          image: "/akwagroup/images/fluides.png",
        },
        {
          image: "/akwagroup/images/gaz.png",
        },
        {
          image: "/akwagroup/images/immobilier.png",
        },
      ],
  },
};
