import type { Meta, StoryObj } from "@storybook/react";
import TrendingSlider, { TrendingSliderProps } from "./Carousel";

const meta: Meta<TrendingSliderProps> = {
  title: "Components/Carousel",
  component: TrendingSlider,
  tags: ["autodocs"],
  argTypes: {
    title: {control: "text"},
    description: {control: "text"},
    titleTextColor: { control: "color" },
    descriptionTextColor: { control: "color" },
    slidesStyle: { control: "object" },
    navigationIconColor: { control: "color" },
    navigationStyle: { control: "object" },
    hiddenTitle: {
      control: {
        type: "select",
        options: ["block", "none"], 
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TrendingSlider>;

export const Default: Story = {
  args: {
    slides: [
      { image: "/akwagroup/images/carburant.png" },
      { image: "/akwagroup/images/dev.png" },
      { image: "/akwagroup/images/transition.png" },
      { image: "/akwagroup/images/fluides.png" },
      { image: "/akwagroup/images/gaz.png" },
      { image: "/akwagroup/images/immobilier.png" },
    ],
    title: "6 Pôles",
    description: "diversifiés pour apporter des réponses globales",
    titleTextColor: "#0E1B25",
    descriptionTextColor: "#334C60",
    slidesStyle: {
      borderRadius: "0px",
    },
    navigationIconColor: "white",
    navigationStyle: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: "8px",
      borderRadius: "50%",
    },
    hiddenTitle: "block",
  },
};
