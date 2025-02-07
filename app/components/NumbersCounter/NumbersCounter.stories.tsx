import type { Meta, StoryObj } from "@storybook/react";
import NumbersCounter from "./NumbersCounter";

const meta: Meta<typeof NumbersCounter> = {
  title: "Components/NumbersCounter",
  component: NumbersCounter,
  argTypes: {
    title: { control: "text", description: "Title of the component" },
    titleTextColor: { control: "color", description: "Color of the title text" },
    componentBackgroundColor: { control: "color", description: "Background color of the component" },
    data: {
      control: "object",
      description: "Array of counter items",
      table: {
        type: {
          summary: "Array<NumbersCounterItem>",
          detail: `{
            number: number;
            plusSign?: boolean;
            description: string;
            lineColor?: string;
            descriptiontextColor?: string;
            numberTextColor?: string;
          }[]`,
        },
      },
    },
  },
  args: {
    title: "Chiffres clés",
    titleTextColor: "#ffffff",
    componentBackgroundColor: "#052337",
    data: [
      {
        number: 20000,
        plusSign: true,
        description: "Emplois directs et indirects",
        lineColor: "white",
        descriptiontextColor: "white",
        numberTextColor: "yellow",
      },
      {
        number: 2,
        description: "Sociétés cotées en bourse",
        lineColor: "white",
        descriptiontextColor: "white",
        numberTextColor: "yellow",
      },
      {
        number: 70,
        description: "Sociétés",
        lineColor: "white",
        descriptiontextColor: "white",
        numberTextColor: "yellow",
      },
      {
        number: 40,
        plusSign: true,
        description: "Marques phares",
        lineColor: "white",
        descriptiontextColor: "white",
        numberTextColor: "yellow",
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof NumbersCounter>;

export const Default: Story = {};
