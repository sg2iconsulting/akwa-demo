"use client";
import React from "react";
import Heading from "../../atoms/Heading/Heading";
import { Paragraphs } from "../../molecules/Paragraphs/Paragraphs";
import Button from "../../atoms/Button/Button";
import ImagesFadeShowSection from "../../molecules/ImagesFadeShowSection/ImagesFadeShowSection";
import TextContent from "../../molecules/TextContent/TextContent";
import { cn } from "@/app/utils/cn";

export interface AboutUsProps {
  images: string[][];
  title: string;
  subTitle?: string;
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

  subHeadingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  subHeadingClassename?: string;
  subHeadingStyle?: React.CSSProperties;
}

const AboutUs = ({
  images,
  title,
  subTitle,
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
  subHeadingTag = "h3",
  subHeadingClassename,
  subHeadingStyle,
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
            subTitle={subTitle}
            subHeadingClassename={cn("text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium text-[#334C60] dark:text-white", subHeadingClassename)}
            subHeadingStyle={subHeadingStyle}
            subHeadingTag={subHeadingTag}
            headingClassename={cn("text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black text-[#0E1B25] dark:text-white",headingClassename)}
            headingStyle={headingStyle}
            paragraphsClassename={cn("text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] flex flex-col gap-2 lg:gap-4 xl:gap-6 text-[#4C4C4C] dark:text-white", paragraphsClassename)}
            paragraphsStyle={paragraphsStyle}
            paragraphClassename={paragraphClassename}
            paragraphStyle={paragraphStyle}
            paragraphs={paragraphs}
            buttonClassename={cn("w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px] text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px]", buttonClassename)}
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
