import type { Meta, StoryObj } from "@storybook/react";
import Actuality, { ActProps } from "./Actuality";

const meta: Meta<ActProps> = {
  title: "Components/Actuality",
  component: Actuality,
  tags: ["autodocs"],
  argTypes: {
    backgroundItemColor: {
      control: "color",
    },
    backgroundButtonColor: {
      control: "color",
    },
    titleTextColor: {
      control: "color",
    },
    buttonTextColor: {
        control: "color",
    },
    label: {
        control: "text",
    },
    items: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<ActProps>;

export const Default: Story = {
  args: {
    backgroundItemColor: "#052337",
    backgroundButtonColor: "#19A0BF",
    titleTextColor: "#0E1B25",
    label: "Lire l'article",
    buttonTextColor: "#FFFFFF",
    items: [
      {
        imgSrc: "/actuality/actu.jpeg",
        title: "Item 1",
        descrip: "Description for item 1",
        date: "2025-01-01",
        url: "#",
      },
      {
        imgSrc: "/actuality/item6.jpeg",
        title: "Item 2",
        date: "2025-01-02",
        url: "#",
      },
      {
        imgSrc: "/actuality/item2.jpeg",
        title: "Item 3",
        date: "2025-01-03",
        url: "#",
      },
      {
        imgSrc: "/actuality/item3.jpeg",
        title: "Item 4",
        date: "2025-01-04",
        url: "#",
      },
      {
        imgSrc: "/actuality/item4.jpeg",
        title: "Item 5",
        date: "2025-01-05",
        url: "#",
      },
      {
        imgSrc: "/actuality/item5.jpeg",
        title: "Item 6",
        date: "2025-01-06",
        url: "#",
      },
    ],
  },
};
