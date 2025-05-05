import React from "react";
import Heading from "../atoms/Heading";
import { Paragraphs } from "./Paragraphs";
import Button from "../atoms/Button";

export interface TextContentProps {
  title: string;
  subTitle?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headingClassename?: string;
  headingStyle?: React.CSSProperties;

  subHeadingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  subHeadingClassename?: string;
  subHeadingStyle?: React.CSSProperties;

  paragraphs: string[];
  paragraphsClassename?: string;
  paragraphsStyle?: React.CSSProperties;
  paragraphClassename?: string;
  paragraphStyle?: React.CSSProperties;

  buttonChildren: React.ReactNode;
  buttonClassename?: string;
  buttonStyle?: React.CSSProperties;
}

const TextContent: React.FC<TextContentProps> = ({
  title,
  subTitle,
  headingTag = "h2",
  headingClassename,
  headingStyle,
  subHeadingTag = "h3",
  subHeadingClassename = "text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium",
  subHeadingStyle,
  paragraphs,
  paragraphsClassename,
  paragraphsStyle,
  paragraphClassename,
  paragraphStyle,
  buttonChildren,
  buttonClassename,
  buttonStyle,
}) => {
  return (
    <div className="flex flex-col md:w-1/2 gap-2 lg:gap-3 justify-center h-full">
      <Heading
        tag={headingTag}
        className={headingClassename}
        style={headingStyle}
      >
        {title}
      </Heading>
      <Heading
        tag={subHeadingTag}
        className={subHeadingClassename}
        style={subHeadingStyle}
      >
        {subTitle}
      </Heading>
      <Paragraphs
        classname={paragraphsClassename}
        style={paragraphsStyle}
        paragraphClassename={paragraphClassename}
        paragraphStyle={paragraphStyle}
        paragraphs={paragraphs}
      />
      <Button buttonClassename={buttonClassename} buttonStyle={buttonStyle}>
        {buttonChildren}
      </Button>
    </div>
  );
};

export default TextContent;
