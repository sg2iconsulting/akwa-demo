import type { Meta, StoryObj } from "@storybook/react";
import Solutions from "./Solutions";

const meta: Meta<typeof Solutions> = {
  title: "Components/Solutions",
  component: Solutions,
  tags: ["autodocs"],
  argTypes: {
    firstTitle: { control: "text" },
    secondTitle: { control: "text" },
    firstTitleTextColor: { control: "color" },
    secondTitleTextColor: { control: "color" },
    paragraphTextColor: { control: "color" },
    iconTextColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Solutions>;

export const Default: Story = {
  args: {
    firstTitle: "Un solution rapide et proche de chez vous",
    secondTitle: "Découvrez nos avantages",
    firstTitleTextColor: "#000000",
    secondTitleTextColor: "#A2C24C",
    paragraphTextColor: "#000000",
    iconTextColor: "#D1FF33",
    paragraphs: [
      "Une formule d’abonnement adaptée pour votre confort",
      "1er réseau de bornes de recharge rapide au Maroc avec une puissance de charge allant jusqu’à 100KW DC",
      "Une offre inédite au Maroc",
      "Recharge rapide en seulement 30min",
      "Une application dédiée pour localiser les bornes de recharge rapide les plus proches, organiser et payer le chargement de son véhicule",
      "Plus de 100 points de recharges disponibles au Maroc",
      "Disponible sur les principaux axes autoroutiers",
      "L’accès à un ensemble de services réservés aux abonnés de FastVolt",
    ],
  },
};
