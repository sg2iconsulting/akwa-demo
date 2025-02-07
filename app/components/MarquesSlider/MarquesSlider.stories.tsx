import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import MarquesSlider, { MarquesProps } from "./MarquesSlider";

const meta: Meta<MarquesProps> = {
  title: "Components/MarquesSlider",
  component: MarquesSlider,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    titleTextColor: { control: "color" },
    ContainerBackgroundColor: { control: "color" },
    marques: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<MarquesProps>;

const defaultMarques = [
    {
      id: 1,
      image: "/speedy/marques/marelli.png",
      url: ""
    },
    {
      id: 2,
      image: "/speedy/marques/bosch.png",
      url: ""
    },
    {
      id: 3,
      image: "/speedy/marques/goodYear.png",
      url: ""
    },
    {
      id: 4,
      image: "/speedy/marques/bridgestone.png",
      url: ""
    },
    {
      id: 5,
      image: "/speedy/marques/energizer.png",
      url: ""
    },
    {
      id: 6,
      image: "/speedy/marques/marelli.png",
      url: ""
    },
    {
      id: 7,
      image: "/speedy/marques/bosch.png",
      url: ""
    },
    {
      id: 8,
      image: "/speedy/marques/goodYear.png",
      url: ""
    },
    {
      id: 9,
      image: "/speedy/marques/bridgestone.png",
      url: ""
    },
    {
      id: 10,
      image: "/speedy/marques/energizer.png",
      url: ""
    },
  ];

export const Default: Story = {
  args: {
    marques: defaultMarques,
    title: "Nos Marques",
    titleTextColor: "#0E1B25",
    ContainerBackgroundColor: "#ffffff",
  },
};
