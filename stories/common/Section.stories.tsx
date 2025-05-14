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

export const AkwaStylesA: Story = {
  args: {
    title: "Afrique",
    imgSrc: "/Section/AfriqueBg.png",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin.",
    ],
    buttonChildren: "En savoir plus",
    headingTag: "h2",
    headingClassename:
      "text-[20px] md:text-[30px] xl:text-[40px] 2xl:text-[50px] font-bold text-white",
    paragraphClassename: "text-white",
    buttonClassename:
      "w-36 h-7 md:w-44 md:h-10 xl:w-56 xl:h-12 2xl:w-[250px] 2xl:h-[67px] text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] py-2 mt-3",
  },
};
export const AkwaStylesB: Story = {
  args: {
    title: "Secteur d'avenir",
    imgSrc: "/Section/innovationBg.jpeg",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin.",
    ],
    buttonChildren: "En savoir plus",
    headingTag: "h2",
    headingClassename:
      "text-[20px] md:text-[30px] xl:text-[40px] 2xl:text-[50px] font-bold text-white",
    paragraphClassename: "text-white",
    buttonClassename:
      "w-36 h-7 md:w-44 md:h-10 xl:w-56 xl:h-12 2xl:w-[250px] 2xl:h-[67px] text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] py-2 mt-3",
  },
};
