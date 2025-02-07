import { Meta, StoryObj } from "@storybook/react";
import AboutUs, { AboutUsProps } from "./AboutUs";

const meta: Meta<typeof AboutUs> = {
  title: "Components/AboutUs",
  component: AboutUs,
  argTypes: {
    imageSrc: { control: "text" },
    imageClassename: { control: "text" },
    firstTitle: { control: "text" },
    firstTitleColor: { control: "color" },
    secondTitle: { control: "text" },
    secondTitleColor: { control: "color" },
    textParagraph: { control: "text" },
    textParagraphColor: { control: "color" },
    buttonBackgroundColor: { control: "color" },
    buttonTextColor: { control: "color" },
    buttonLabel: { control: "text" },
    roundedButton: { control: "text" },
  },
};

export default meta;

export const Default: StoryObj<AboutUsProps> = {
  args: {
    imageSrc: "/maghreb/aboutUs.png",
    imageClassename: "flex gap-2 w-full h-full md:w-1/2 md:justify-end my-auto",
    firstTitle: "Welcome to Our Story",
    firstTitleColor: "#333",
    secondTitle: "We build amazing experiences",
    secondTitleColor: "#555",
    textParagraph: "We are dedicated to providing the best solutions for our customers, ensuring high quality and satisfaction.",
    textParagraphColor: "#777",
    buttonBackgroundColor: "#A2BB51",
    buttonTextColor: "#fff",
    buttonLabel: "Voir Plus",
    roundedButton: "100px",
  },
};