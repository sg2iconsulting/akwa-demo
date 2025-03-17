import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TextContent, { TextContentProps } from "./TextContent";

export default {
  title: "molecules/TextContent",
  component: TextContent,
  argTypes: {
    headingTag: { control: "select", options: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  },
} as Meta<typeof TextContent>;

const Template: StoryFn<typeof TextContent> = (args) => <TextContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Our Story",
  headingTag: "h2",
  paragraphs: [
    "Le Maroc connait aujourd’hui une effervescence en matière de projets structurants et s’appuie sur un environnement économique en plein essor.",
    "AKWA Group, conscient de son rôle dans l’accompagnement du développement social et économique marocain, a investi d’autres domaines d’activité stratégiques, en parallèle à son métier d’origine que sont les hydrocarbures.",
    "Aujourd’hui avec l’élargissement progressif de son bouquet énergétique et l’augmentation de ses capacités de stockage, le Groupe est un acteur incontestable dans le secteur énergétique au Maroc.",
  ],
};
