import { Meta, StoryObj } from "@storybook/react";
import NumberCounterModal from "./NumberCounterModal";
import { NumbersCounterItem } from "../NumbersCounter/NumbersCounter";

const meta: Meta<typeof NumberCounterModal> = {
  title: "Components/NumberCounterModal",
  component: NumberCounterModal,
  argTypes: {
    isVisible: { control: "boolean" },
    imgSrc: { control: "text" },
    title: { control: "text" },
    titleTextColor: { control: "color" },
    componentBackgroundColor: { control: "color" },
    data: { control: "object" },
    onClose: { action: "closed" },
  },
};

export default meta;

type Story = StoryObj<typeof NumberCounterModal>;

export const Default: Story = {
  args: {
    isVisible: true,
    imgSrc: "/akwagroup/images/akwaCarte.png",
    title: "Chiffres clés",
    titleTextColor: "#FFFFFF",
    componentBackgroundColor: "#052337",
    data: [
        { number: 20000, description: "Emplois directs et indirects" },
        { number: 2, description: "Sociétés cotées en bourse" },
        { number: 70, description: "Sociétés"},
        { number: 40, description: "Marques phares"},
    ] as NumbersCounterItem[],
  },
};
