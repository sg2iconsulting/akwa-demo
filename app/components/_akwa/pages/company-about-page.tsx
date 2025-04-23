"use server";

import CompanyAboutTemplate from "../templates/company-about-template";
import { Metadata } from "next";
import { gql } from "@apollo/client";
import { createApolloClient } from "@/app/lib/apolloServerClient";

const query = gql`
  query Sections {
    sections {
      nodes {
        presentation {
          mission {
            description
            fieldGroupName
            titre
            image {
              node {
                sourceUrl
              }
            }
          }
          vision {
            description
            fieldGroupName
            titre
            image {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

export async function generateMetadata(): Promise<Metadata> {
  const client = createApolloClient();
  const { data } = await client.query({ query });

  return {
    title: "Akwa - Qui Somme Nous?",
    description: `Desc`,
    openGraph: {
      title: "Akwa - Qui Somme Nous?",
      description: `Desc`,
    },
    twitter: {
      title: "Akwa - Qui Somme Nous?",
      description: `Desc`,
    },
  };
}

export default async function CompanyAboutPage() {
  const client = createApolloClient();
  const { data } = await client.query({ query });

  const presentation = data?.sections?.nodes?.[0]?.presentation;

  const presentationData = {
    vision: {
      title: presentation?.vision?.titre || "",
      description: presentation?.vision?.description || "",
      image: presentation?.vision?.image?.node?.sourceUrl || "",
    },
    mission: {
      title: presentation?.mission?.titre || "",
      description: presentation?.mission?.description || "",
      image: presentation?.mission?.image?.node?.sourceUrl || "",
    },
  };

  const historiqueData = {
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

  const chiffreData = {
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
  return (
    <CompanyAboutTemplate
      historiqueContent={historiqueData}
      presentationContent={presentationData}
      chiffreContent={chiffreData}
    />
  );
}
