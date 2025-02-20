import React from "react";
import TextContent from "../../molecules/TextContent/TextContent";

export interface SectionProps {
  title: string;
  imgSrc: string;
  backgroundStyle?: React.CSSProperties;
  backgroundImagePosition?: string;
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

const Section = ({
  title,
  imgSrc,
  backgroundImagePosition,
  backgroundStyle,
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
  paragraphs = [],
}: SectionProps) => {
  return (
    <section className="w-full max-w-[2000px] mx-auto px-5 md:px-10 lg:px-20">
      <div
        className="relative bg-cover w-full flex flex-col gap-1 md:gap-2 aspect-[3/1] rounded-[20px] p-10"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: backgroundImagePosition,
          ...backgroundStyle,
        }}
      >
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
      </div>
    </section>
  );
};

export default Section;
