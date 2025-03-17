// Paragraphs.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Paragraphs } from "./Paragraphs";

const meta: Meta<typeof Paragraphs> = {
  title: "molecules/Paragraphs",
  component: Paragraphs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Paragraphs>;

export const Default: Story = {
  args: {
    paragraphs: [
      "Le Maroc connait aujourd’hui une effervescence en matière de projets structurants et s’appuie sur un environnement économique en plein essor.",
      "AKWA Group, conscient de son rôle dans l’accompagnement du développement social et économique marocain, a investi d’autres domaines d’activité stratégiques, en parallèle à son métier d’origine que sont les hydrocarbures.",
      "Aujourd’hui avec l’élargissement progressif de son bouquet énergétique et l’augmentation de ses capacités de stockage, le Groupe est un acteur incontestable dans le secteur énergétique au Maroc.",
    ],
  },
};