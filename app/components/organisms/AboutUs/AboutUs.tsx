"use client";
import React from "react";
import Heading from "../../atoms/Heading/Heading";
import { Paragraphs } from "../../molecules/Paragraphs/Paragraphs";
import Button from "../../atoms/Button/Button";
import ImagesFadeShowSection from "../../molecules/ImagesFadeShowSection/ImagesFadeShowSection";
import TextContent from "../../molecules/TextContent/TextContent";

export interface AboutUsProps {
  images: string[][];
  title: string;
  paragraphs: string[];
  paragraphsClassename?: string;
  paragraphsStyle?: React.CSSProperties;
  paragraphClassename?: string;
  paragraphStyle?: React.CSSProperties;

  buttonClassename?: string;
  buttonStyle?: React.CSSProperties;
  buttonChildren: React.ReactNode;

  headingClassename?: string;
  headingStyle?: React.CSSProperties;
  headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const AboutUs = ({
  images,
  title,
  paragraphsClassename,
  paragraphsStyle,
  paragraphClassename,
  paragraphStyle,
  buttonClassename,
  buttonStyle,
  buttonChildren = "Voir plus",
  headingClassename,
  headingStyle,
  headingTag = "h1",
  paragraphs = [
    "Le Maroc connait aujourd’hui une effervescence en matière de projets structurants et s’appuie sur un environnement économique en plein essor.",
    "AKWA Group, conscient de son rôle dans l’accompagnement du développement social et économique marocain, a investi d’autres domaines d’activité stratégiques, en parallèle à son métier d’origine que sont les hydrocarbures.",
    "Aujourd’hui avec l’élargissement progressif de son bouquet énergétique et l’augmentation de ses capacités de stockage, le Groupe est un acteur incontestable dans le secteur énergétique au Maroc.",
  ],
}: AboutUsProps) => {
  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto h-full">
      <div className="w-full p-5 md:px-10 lg:px-20 h-full">
        <div className="flex flex-col md:flex-row md:justify-between w-full h-full gap-5 md:gap-8 lg:gap-12">
          <TextContent
            headingTag={headingTag}
            title={title}
            headingClassename={headingClassename}
            headingStyle={headingStyle}
            paragraphsClassename={paragraphsClassename}
            paragraphsStyle={paragraphsStyle}
            paragraphClassename={paragraphClassename}
            paragraphStyle={paragraphStyle}
            paragraphs={paragraphs}
            buttonClassename={buttonClassename}
            buttonStyle={buttonStyle}
            buttonChildren={buttonChildren}
          />
          <ImagesFadeShowSection images={images} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
