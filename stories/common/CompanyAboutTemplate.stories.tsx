import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CompanyAboutTemplate from "@/components/akwa/template/company-about-template";

// Meta configuration
const meta: Meta<typeof CompanyAboutTemplate> = {
  title: "Sections/CompanyAboutTemplate",
  component: CompanyAboutTemplate,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CompanyAboutTemplate>;

// Dummy Data
const presentationContent = {
  vision: {
    title: "Vision",
    description:
      "Accompagner la croissance économique nationale et le développement humain en investissant dans des secteurs à forte valeur ajoutée et en tissant des liens durables avec l'ensemble des parties prenantes du Groupe.",
    image: "/akwagroup/images/akwa-about1.jpg",
  },
  mission: {
    title: "Akwa Group, une mission national",
    description:
      "Le Maroc connait aujourd'hui une effervescence en matière de projets structurants et s'appuie sur un environnement économique en plein essor.  AKWA Group, conscient de son rôle dans l'accompagnement du développement social et économique marocain, a investi d'autres domaines d'activité stratégiques, en parallèle à son métier d'origine que sont les hydrocarbures.  Aujourd'hui avec l'élargissement progressif de son bouquet énergétique et l'augmentation de ses capacités de stockage, le Groupe est un acteur incontestable dans le secteur énergétique au Maroc.  Depuis une quinzaine d'années et afin de répondre aux besoins de la croissance urbaine et du développement humain, AKWA Group s'est diversifié dans des secteurs à forte valeur ajoutée comme la presse, l'hôtellerie et l'immobilier afin d'apporter aux entreprises et aux particuliers des solutions variées et innovantes.  De part sa volonté de s'investir dans les énergies propres comme le GNL, en prenant le virage de l'habitat économique, en suivant le développement marocain dans toutes ses composantes, sociale, urbaine et énergétique, AKWA Group constitue désormais un modèle original au Maroc, celui d'un Groupe responsable, engagé au quotidien, à travers ses femmes, ses hommes et ses métiers, à accompagner les chantiers structurants du Royaume.",
    image: "/akwagroup/images/akwa-about2.jpg",
  },
};

const historiqueContent = {
  historique: {
    title: "Historique",
    description: "",
    image: "",
  },
  timelineData: [
    {
      year: "1932-1942",
      title: "Fondation 1932-1942",
      description:
        "Une histoire qui se confond avec celle du Maroc et qui témoigne d'une vision audacieuse et entreprenante qui fait de AKWA Group un fleuron de l'économie nationale.",
    },
    {
      year: "1959",
      title: "Expansion 1959",
      description: "Développement des activités et expansion régionale.",
    },
    {
      year: "1962",
      title: "Innovation 1962",
      description: "Introduction de nouvelles technologies et services.",
    },
    {
      year: "1972",
      title: "Croissance 1972",
      description: "Période de croissance significative pour l'entreprise.",
    },
    {
      year: "1977",
      title: "Diversification",
      description: "Diversification des activités du groupe.",
    },
    {
      year: "2000",
      title: "Nouveau Millénaire",
      description:
        "Entrée dans le nouveau millénaire avec de nouvelles ambitions.",
    },
    {
      year: "2002",
      title: "Restructuration",
      description: "Restructuration majeure des opérations.",
    },
    {
      year: "2006",
      title: "Développement International",
      description: "Expansion des activités à l'international.",
    },
    {
      year: "2007",
      title: "Leader sur le marche des carburants et gpl",
      description:
        "L'acquisition du groupe Oismine propulse Akwa Group à la tête du premier réseau de distribution de carburants et des GPL.",
    },
    {
      year: "2011",
      title: "Innovation Technologique",
      description: "Investissements majeurs dans les nouvelles technologies.",
    },
    {
      year: "2014",
      title: "Développement Durable",
      description: "Engagement vers des pratiques plus durables.",
    },
    {
      year: "2020",
      title: "Digitalisation",
      description: "Engagement vers des pratiques plus Digital.",
    },
    {
      year: "2024",
      title: "Rah Ba9ine Ghadine",
      description: "Ach Bghiti HHHHH.",
    },
  ],
};

const chiffreContent = {
  stats: [
    {
      value: 20000,
      duration: 3,
      hasPlus: true,
      lines: ["Emplois directs et", "indirects"],
    },
    {
      value: 4,
      duration: 3,
      hasPlus: true,
      lines: ["Milliards $", "de chiffres annuel"],
    },
    {
      value: 2,
      duration: 3,
      lines: ["Sociétés cotées en", "bourse"],
    },
    {
      value: 72,
      duration: 5,
      lines: ["Sociétés"],
    },
    {
      value: 40,
      duration: 5,
      hasPlus: true,
      lines: ["Marques phares"],
    },
  ],
  slides: [
    { image: "/akwagroup/pole/develop.png" },
    { image: "/akwagroup/pole/Fluides.png" },
    { image: "/akwagroup/pole/immobilier.png" },
    { image: "/akwagroup/pole/develop.png" },
    { image: "/akwagroup/pole/Fluides.png" },
    { image: "/akwagroup/pole/immobilier.png" },
    { image: "/akwagroup/pole/develop.png" },
    { image: "/akwagroup/pole/Fluides.png" },
    { image: "/akwagroup/pole/immobilier.png" },
  ],
};

export const Default: Story = {
  args: {
    historiqueContent,
    presentationContent,
    chiffreContent,
  },
};
