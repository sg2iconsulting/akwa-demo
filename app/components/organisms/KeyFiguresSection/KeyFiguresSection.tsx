import React from "react";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";

interface KeyFigure {
  figure: string;
  label: string;
  description: string;
}

interface KeyFiguresSectionProps {
  title: string;
  description: string;
  keyFigures: KeyFigure[];
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  keyFiguresContainerClassName?: string;
  figuresClassName?: string;
  labelClassName?: string;
  descriptionItemClassName?: string;
}

const KeyFiguresSection: React.FC<KeyFiguresSectionProps> = ({
  title,
  description,
  keyFigures,
  containerClassName = "w-full max-w-7xl mx-auto px-4 md:px-8 py-16 bg-gray-50",
  titleClassName = "text-3xl md:text-4xl font-bold text-center mb-4",
  descriptionClassName = "text-lg text-center max-w-3xl mx-auto mb-12",
  keyFiguresContainerClassName = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
  figuresClassName = "text-4xl md:text-5xl font-bold text-[#a5c33c]",
  labelClassName = "text-xl font-semibold my-2",
  descriptionItemClassName = "text-gray-600"
}) => {
  return (
    <div className={containerClassName}>
      <Heading tag="h2" className={titleClassName}>{title}</Heading>
      <Paragraph className={descriptionClassName}>{description}</Paragraph>
      
      <div className={keyFiguresContainerClassName}>
        {keyFigures.map((keyFigure, index) => (
          <div key={index} className="text-center">
            <div className={figuresClassName}>{keyFigure.figure}</div>
            <div className={labelClassName}>{keyFigure.label}</div>
            <div className={descriptionItemClassName}>{keyFigure.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFiguresSection; 