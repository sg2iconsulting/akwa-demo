import React from "react";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";

interface SectionWithImageBgProps {
  title: string;
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
  imgSrc: string;
}

const SectionWithImageBg: React.FC<SectionWithImageBgProps> = ({
  title,
  backgroundStyle,
  backgroundImagePosition = "center",
  paragraphs,
  paragraphsClassename,
  paragraphsStyle,
  paragraphClassename,
  paragraphStyle,
  buttonClassename,
  buttonStyle,
  buttonChildren,
  headingClassename,
  headingStyle,
  headingTag,
  imgSrc
}) => {
  const bgStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundPosition: backgroundImagePosition,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    ...backgroundStyle
  };

  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px]" style={bgStyle}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 lg:py-20 text-white">
        <Heading tag={headingTag} className={headingClassename} style={headingStyle}>
          {title}
        </Heading>
        
        <div className={paragraphsClassename} style={paragraphsStyle}>
          {paragraphs.map((paragraph, index) => (
            <Paragraph key={index} className={paragraphClassename} style={paragraphStyle}>
              {paragraph}
            </Paragraph>
          ))}
        </div>
        
        <Button className={buttonClassename} style={buttonStyle}>
          {buttonChildren}
        </Button>
      </div>
    </section>
  );
};

export default SectionWithImageBg; 