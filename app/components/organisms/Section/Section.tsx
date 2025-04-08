import React from "react";
import TextContent from "../../molecules/TextContent/TextContent";
import { cn } from "@/app/utils/cn";

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
  paragraphs,
}: SectionProps) => {
  return (
    <section className="w-full max-w-[2000px] mx-auto px-5 md:px-10 lg:px-20">
      <div
        className="relative bg-cover w-full flex flex-col justify-center gap-1 md:gap-2 h-[320px] lg:h-auto lg:aspect-[3/1] rounded-[20px] p-10"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: backgroundImagePosition,
          ...backgroundStyle,
        }}
      >
        <TextContent
          headingTag={headingTag}
          title={title}
          headingClassename={cn("text-[20px] md:text-[30px] xl:text-[40px] 2xl:text-[50px] font-bold text-white", headingClassename)}
          headingStyle={headingStyle}
          paragraphsClassename={cn("text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] flex flex-col gap-2 lg:gap-4 xl:gap-6 dark:text-white", paragraphsClassename)}
          paragraphsStyle={paragraphsStyle}
          paragraphClassename={cn("text-white", paragraphClassename)}
          paragraphStyle={paragraphStyle}
          paragraphs={paragraphs}
          buttonClassename={cn("px-6 py-2 text-white bg-[#8BBA25] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[170px] md:w-[200px] lg:w-[240px] rounded-full", buttonClassename)}
          buttonStyle={buttonStyle}
          buttonChildren={buttonChildren}
        />
      </div>
    </section>
  );
};

export default Section;
