import type { Meta, StoryObj } from "@storybook/react";
import PromosSlider, { PromosSliderProps } from "./PromoCardsSlider";

const meta: Meta<typeof PromosSlider> = {
  title: "Components/PromosSlider",
  component: PromosSlider,
  tags: ["autodocs"],
  argTypes: {
    promoCards: {
      control: "object"
    },
  },
};

export default meta;

const promoCards: PromosSliderProps["promoCards"] = [
  {
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
  {
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
  {
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
  {
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
];

export const Default: StoryObj<typeof PromosSlider> = {
  args: {
    promoCards,
  },
};
