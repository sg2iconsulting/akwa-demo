import { Meta, StoryObj } from "@storybook/react";
import Group from "./GroupSection";

const meta: Meta<typeof Group> = {
  title: "Components/GroupSection",
  component: Group,
  argTypes: {
    title: { control: "text" },
    titleTextColor: { control: "color" },
    secondTitle: { control: "text" },
    secondTitleTextColor: { control: "color" },
    description: { control: "text" },
    descriptionTextColor: { control: "color" },
    buttonTextColor: { control: "color" },
    buttonBackgroundColor: { control: "color" },
    images: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof Group>;

export const Default: Story = {
  args: {
    title: "Notre Groupe",
    titleTextColor: "#0E1B25",
    secondTitle: "une mission nationale",
    secondTitleTextColor: "#334C60",
    description:
      "Le Maroc connait aujourd’hui une effervescence en matière de projets structurants et s’appuie sur un environnement économique en plein essor. AKWA Group, conscient de son rôle dans l’accompagnement du développement social et économique marocain, a investi d’autres domaines d’activité stratégiques, en parallèle à son métier d’origine que sont les hydrocarbures. Aujourd’hui avec l’élargissement progressif de son bouquet énergétique et l’augmentation de ses capacités de stockage, le Groupe est un acteur incontestable dans le secteur énergétique au Maroc.",
    descriptionTextColor: "#4C4C4C",
    buttonTextColor: "#FFFFFF",
    buttonBackgroundColor: "#19A0BF",
    images: [
      ["/groupe/image-0.png", "/groupe/image-1.png", "/groupe/image-2.png"],
      ["/groupe/image-3.png", "/groupe/image-4.png", "/groupe/image-5.png"],
      ["/groupe/image-12.png", "/groupe/image-13.png", "/groupe/image-14.png"],
      ["/groupe/image-15.png", "/groupe/image-16.png", "/groupe/image-17.png"],
      ["/groupe/image-9.png", "/groupe/image-10.png", "/groupe/image-11.png"],
      ["/groupe/image-6.png", "/groupe/image-7.png", "/groupe/image-8.png"],
    ],
  },
};
