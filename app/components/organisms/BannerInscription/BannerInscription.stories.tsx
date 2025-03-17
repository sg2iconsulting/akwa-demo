// BannerInscription.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import BannerInscription from "./BannerInscription";

const meta: Meta<typeof BannerInscription> = {
  title: "organisms/BannerInscription",
  component: BannerInscription,
  tags: ["autodocs"],
  argTypes: {
    imageBackgroundSource: { control: "text" },
    imageClassName: { control: "text" },
    buttonLabel: { control: "text" },
    buttonBackgroundColor: { control: "color" },
    buttonTextColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof BannerInscription>;

export const Default: Story = {
  args: {
    imageBackgroundSource: "/fastVolt/inscripBanner.png",
    buttonLabel: "S'inscrire",
    buttonBackgroundColor: "#8BBA25",
    buttonTextColor: "white",
  },
};

export const CustomBackground: Story = {
  args: {
    imageBackgroundSource: "/maghreb/maghrebNavBack.png",
    buttonLabel: "Subscribe",
    buttonBackgroundColor: "#FF5733",
    buttonTextColor: "black",
  },
};