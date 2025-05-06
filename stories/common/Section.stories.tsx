import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Section from "@/components/common/template/Section";

const meta: Meta<typeof Section> = {
  title: "Sections/Section",
  component: Section,
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    title: "Bienvenue sur notre site",
    imgSrc: "fastVolt/fastVoltCard.png",
    paragraphs: [
      "Découvrez nos produits et services exceptionnels.",
      "Rejoignez notre communauté dès aujourd'hui pour ne rien manquer.",
    ],
    buttonChildren: "Voir plus",
    headingTag: "h2",
  },
};

export const CustomStyles: Story = {
  args: {
    title: "Offre Spéciale",
    imgSrc: "https://picsum.photos/1800/800",
    paragraphs: [
      "Profitez de nos promotions limitées dans le temps.",
      "Cliquez sur le bouton pour en savoir plus.",
    ],
    buttonChildren: "Découvrez",
    headingTag: "h3",
    headingClassename: "text-yellow-300",
    paragraphClassename: "text-gray-200",
    buttonClassename: "bg-red-500",
  },
};
