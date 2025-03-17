import { Meta, StoryObj } from "@storybook/react";
import ItemCardList, { ItemCardListProps } from "./ItemCardList";

const meta: Meta<typeof ItemCardList> = {
  title: "Molecules/ItemCardList",
  component: ItemCardList,
  tags: ["autodocs"],
  args: {
    items: [
      {
        imgSrc: "/actuality/item2.jpeg",
        title: "Item Title 1",
        date: "2024-02-21",
        containerBackgroundColor: "#FFFFFF",
        containerBorderStyle: "1px solid #F1F1F1",
        textColor: "#000000",
      },
      {
        imgSrc: "/actuality/item3.jpeg",
        title: "Item Title 2",
        date: "2024-02-22",
        containerBackgroundColor: "#F8F9FA",
        containerBorderStyle: "1px solid #E0E0E0",
        textColor: "#333333",
      },
      {
        imgSrc: "/actuality/item4.jpeg",
        title: "Item Title 3",
        date: "2024-02-23",
        containerBackgroundColor: "#EFEFEF",
        containerBorderStyle: "1px solid #CCCCCC",
        textColor: "#666666",
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof ItemCardList>;

export const Default: Story = {};
