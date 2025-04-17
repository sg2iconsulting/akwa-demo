// app/components/organisms/PricingSection/PricingSection.tsx
import React from "react";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import FeatureItem from "../../molecules/FeatureItem/FeatureItem";
import { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa";

interface FeatureItemData {
  icon: IconType;
  text: string;
}

interface PricingSectionProps {
  title?: {
    firstPart: string;
    highlightedPart: string;
    lastPart: string;
  };
  features: FeatureItemData[];
  footerText?: string;
  containerClassName?: string;
  titleClassName?: string;
  featuresContainerClassName?: string;
  footerClassName?: string;
  iconColor?: string;
  iconClassename?: string;
  headingClassName?: string;
  highlightedPartClassName?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  title = {
    firstPart: "Des offres ",
    highlightedPart: "sans abonnement",
    lastPart: " pour un paiement à la minute",
  },
  features = [],
  footerText = "* Par paliers de 30 min",
  containerClassName = "w-full max-w-6xl mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8",
  titleClassName = "text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-12 md:mb-16 lg:mb-20",
  featuresContainerClassName = "flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 justify-center items-center md:items-start mb-8 md:mb-12",
  footerClassName = "text-center text-[#a5c33c] text-sm md:text-base lg:text-lg font-medium",
  iconColor = "#a5c33c",
  iconClassename = "md:w-7 md:h-7 2xl:w-[36px] 2xl:h-[36px]",
  headingClassName = "text-sm md:text-base lg:text-lg font-bold",
  highlightedPartClassName = "text-[#a5c33c]"
}) => {
  return (
    <div className={containerClassName}>
      <Heading tag="h2" className={titleClassName}>
        <span>{title.firstPart}</span>
        <span className={highlightedPartClassName}>{title.highlightedPart}</span>
        <span>{title.lastPart}</span>
      </Heading>

      <div className={featuresContainerClassName}>
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            text={feature.text}
            iconColor={iconColor}
            iconClassename={iconClassename}
            headingClassName={headingClassName}
          />
        ))}
      </div>

      {footerText && (
        <Paragraph className={footerClassName}>{footerText}</Paragraph>
      )}
    </div>
  );
};

export default PricingSection;