import React from "react";
import Heading from "../../atoms/Heading/Heading";
import { Paragraphs } from "../../molecules/Paragraphs/Paragraphs";
import Button from "../../atoms/Button/Button";

export interface TextContentProps {
  title: string;
  headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headingClassename?: string;
  headingStyle?: React.CSSProperties;

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
  headingTag = "h2",
  headingClassename,
  headingStyle,
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
    <div className="flex flex-col md:w-1/2 gap-3 lg:gap-6 xl:gap-10 2xl:gap-12 h-full my-auto">
      <Heading tag={headingTag} className={headingClassename} style={headingStyle}>
        {title}
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
