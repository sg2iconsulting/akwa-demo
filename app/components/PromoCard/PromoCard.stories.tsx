import { Meta, StoryObj } from "@storybook/react";
import PromoCard from "./PromoCard";

const meta: Meta<typeof PromoCard> = {
  title: "Components/PromoCard",
  component: PromoCard,
  argTypes: {
    productName: { control: "text" },
    productImageSrc: { control: "text" },
    serie: { control: "text" },
    reference: { control: "text" },
    priceValue: { control: "text" },
    priceLabelTextColor: { control: "color" },
    oldPrice: { control: "text" },
    promoContainerBackground: { control: "color" },
    productNameTextColor: { control: "color" },
    serieTextColor: { control: "color" },
    referenceTextColor: { control: "color" },
    priceTextColor: { control: "color" },
    oldPriceTextColor: { control: "color" },
    oldPriceBackgroundColor: { control: "color" },
    buttonBackgroundColor: { control: "color" },
    buttonTextColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof PromoCard>;

export const Default: Story = {
  args: {
    productName: "PIRELLI",
    productImageSrc: "/speedy/pneu.png",
    serie: "P-ZERO PZ4",
    reference: "235/50 R19 99W",
    priceValue: "1760",
    priceLabelTextColor: "#000000",
    oldPrice: "2000",
    promoContainerBackground: "#FFFFFF",
    productNameTextColor: "#000000",
    serieTextColor: "#FF0000",
    referenceTextColor: "#000000",
    priceTextColor: "#00AA00",
    oldPriceTextColor: "#999999",
    oldPriceBackgroundColor: "#F5F5F5",
    buttonBackgroundColor: "#D52435",
    buttonTextColor: "#FFFFFF",
  },
};
