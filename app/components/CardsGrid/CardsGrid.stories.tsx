import type { Meta, StoryObj } from "@storybook/react";
import Cards, { CardsProps } from "./CardsGrid";
import Application from "../Application/Application";

const meta: Meta<typeof Cards> = {
  title: "Components/CardsGrid",
  component: Cards,
  tags: ["autodocs"],
  argTypes: {
    cards: { control: "object" },
    Component: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Cards>;

export const Default: Story = {
  args: {
    cards: [
      {
        imageSrc: "/afriquiaGaz/cards/card-1.png",
        title: "Propane 34 Kg pour particuliers",
        description: "",
        titleTextColor: "#387CCC",
        descriptionTextColor: "#555555",
        applicationBackgroundColor: "pink",
        buttonLabel: "Learn More",
        buttonBackgroundColor: "#007BFF",
        buttonTextColor: "#FFFFFF",
        roundedButton: "9999px"
      },
      {
        imageSrc: "/afriquiaGaz/cards/card-2.png",
        title: "Propane 34 Kg pour particuliers",
        description: "",
        titleTextColor: "#387CCC",
        descriptionTextColor: "#555555",
        applicationBackgroundColor: "pink",
        buttonLabel: "Learn More",
        buttonBackgroundColor: "#FF5733",
        buttonTextColor: "#FFFFFF",
        roundedButton: "9999px"
      },
      {
        imageSrc: "/afriquiaGaz/cards/card-3.png",
        title: "Propane 34 Kg pour particuliers",
        description: "",
        titleTextColor: "#387CCC",
        descriptionTextColor: "#555555",
        applicationBackgroundColor: "pink",
        buttonLabel: "Learn More",
        buttonBackgroundColor: "#FF5733",
        buttonTextColor: "#FFFFFF",
        roundedButton: "9999px"
      },
      {
        imageSrc: "/afriquiaGaz/cards/card-4.png",
        title: "Propane 34 Kg pour particuliers",
        description: "",
        titleTextColor: "#387CCC",
        descriptionTextColor: "#555555",
        applicationBackgroundColor: "pink",
        buttonLabel: "Learn More",
        buttonBackgroundColor: "#FF5733",
        buttonTextColor: "#FFFFFF",
        roundedButton: "9999px"
      },
    ],
    Component: Application,
  },
};
