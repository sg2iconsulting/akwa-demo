import type { Meta, StoryObj } from "@storybook/react";
import BannerInscription from "./BannerInscription";

const meta: Meta<typeof BannerInscription> = {
  title: "Components/BannerInscription",
  component: BannerInscription,
  args: {
    imageBackgroundSource: "/Section/AfriqueBg.png",
    buttonLabel: "S'inscrire",
    buttonBackgroundColor: "#8BBA25",
    buttonTextColor: "white",
  },
};

export default meta;

export const Default: StoryObj<typeof BannerInscription> = {
  args: {
    imageBackgroundSource: "/Section/AfriqueBg.png",
    buttonBackgroundColor: "#25ba51"
  }
};