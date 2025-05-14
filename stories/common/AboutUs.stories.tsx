import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AboutUs from "@/components/common/template/AboutUs";

const meta: Meta<typeof AboutUs> = {
  title: "Sections/AboutUs",
  component: AboutUs,
};

export default meta;

type Story = StoryObj<typeof AboutUs>;

const exampleImages = [
  [
    "/akwagroup/galery/image-0.png",
    "/akwagroup/galery/image-1.png",
    "/akwagroup/galery/image-2.png",
  ],
  [
    "/akwagroup/galery/image-3.png",
    "/akwagroup/galery/image-4.png",
    "/akwagroup/galery/image-5.png",
  ],
  [
    "/akwagroup/galery/image-12.png",
    "/akwagroup/galery/image-13.png",
    "/akwagroup/galery/image-14.png",
  ],
  [
    "/akwagroup/galery/image-15.png",
    "/akwagroup/galery/image-16.png",
    "/akwagroup/galery/image-17.png",
  ],
  [
    "/akwagroup/galery/image-9.png",
    "/akwagroup/galery/image-10.png",
    "/akwagroup/galery/image-11.png",
  ],
  [
    "/akwagroup/galery/image-6.png",
    "/akwagroup/galery/image-7.png",
    "/akwagroup/galery/image-8.png",
  ],
];

export const Default: Story = {
  args: {
    images: exampleImages,
    title: "À propos de nous",
    subTitle: "Notre engagement pour un avenir meilleur",
    paragraphs: [
      "Le Maroc connait aujourd’hui une effervescence en matière de projets structurants et s’appuie sur un environnement économique en plein essor.",
      "AKWA Group, conscient de son rôle dans l’accompagnement du développement social et économique marocain, a investi d’autres domaines d’activité stratégiques, en parallèle à son métier d’origine que sont les hydrocarbures.",
      "Aujourd’hui avec l’élargissement progressif de son bouquet énergétique et l’augmentation de ses capacités de stockage, le Groupe est un acteur incontestable dans le secteur énergétique au Maroc.",
    ],
    buttonChildren: "Voir plus",
    headingTag: "h1",
    subHeadingTag: "h3",
    headingClassename:
      "text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black text-[#0E1B25] dark:text-white",

    subHeadingClassename:
      "text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium text-[#334C60] dark:text-white",

    paragraphClassename:
      "text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] flex flex-col gap-2 lg:gap-4 xl:gap-6 text-[#4C4C4C] dark:text-white",
    buttonClassename:
      "hidden w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px] text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px]",
  },
};
export const Akwa: Story = {
  args: {
    images: exampleImages,
    title: "Akwa Group",
    subTitle: "Une mission nationale",
    paragraphs: [
      "Le Maroc connait aujourd’hui une effervescence en matière de projets structurants et s’appuie sur un environnement économique en plein essor.",
      "AKWA Group, conscient de son rôle dans l’accompagnement du développement social et économique marocain, a investi d’autres domaines d’activité stratégiques, en parallèle à son métier d’origine que sont les hydrocarbures.",
      "Aujourd’hui avec l’élargissement progressif de son bouquet énergétique et l’augmentation de ses capacités de stockage, le Groupe est un acteur incontestable dans le secteur énergétique au Maroc.",
    ],
    buttonChildren: "Voir plus",
    headingTag: "h1",
    subHeadingTag: "h3",
    headingClassename:
      "text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black text-[#0E1B25] dark:text-white",

    subHeadingClassename:
      "text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium text-[#334C60] dark:text-white",

    paragraphClassename:
      "text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] flex flex-col gap-2 lg:gap-4 xl:gap-6 text-[#4C4C4C] dark:text-white",
    buttonClassename:
      "w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px] text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px]",
  },
};
