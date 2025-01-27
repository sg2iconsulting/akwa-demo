import React from "react";
import Section, { SectionProps } from "./Section";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Section> = {
  title: "Components/Section", 
  component: Section,
  tags: ["autodocs"],
  argTypes: {
    imgSrc: { control: "text" },
    buttonBackgroundColor: { control: "color" },
    buttonTextColor: { control: "color" },
    textColor: { control: "color" },
    backgroundImagePosition: { control: "text" },
    containerStyle: { control: "object" },
    backgroundStyle: { control: "object" },
  },
};

export default meta;

export const Default: StoryObj<SectionProps> = {
  args: {
    title: "Afrique",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin.",
    imgSrc: "/Section/AfriqueBg.png",
    textColor: "white",
    buttonTextColor: "white",
    backgroundImagePosition: "center center",
    buttonBackgroundColor: "#19A0BF",
    backgroundStyle: {
      backgroundColor: "black",
      opacity: 0.4,
      borderRadius: "20px",
    },
    containerStyle: {
      borderRadius: "20px",
    },
  },
};


