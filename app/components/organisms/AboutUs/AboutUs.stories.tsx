// AboutUs.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AboutUs from "./AboutUs";

const meta: Meta<typeof AboutUs> = {
  title: "organisms/AboutUs",
  component: AboutUs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AboutUs>;

export const Default: Story = {
  args: {
    images: [
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
    ],
    title: "About Us",
    buttonChildren: "Voir plus",
    paragraphs: [
      "Le Maroc connait aujourd’hui une effervescence en matière de projets structurants et s’appuie sur un environnement économique en plein essor.",
      "AKWA Group, conscient de son rôle dans l’accompagnement du développement social et économique marocain, a investi d’autres domaines d’activité stratégiques, en parallèle à son métier d’origine que sont les hydrocarbures.",
      "Aujourd’hui avec l’élargissement progressif de son bouquet énergétique et l’augmentation de ses capacités de stockage, le Groupe est un acteur incontestable dans le secteur énergétique au Maroc.",
    ],
  },
};
