import React from "react";
import { IconType } from "react-icons";
import FeatureItem from "../../molecules/FeatureItem/FeatureItem";
import { cn } from "@/utils/cn";
import Heading from "../../atoms/Heading/Heading";

// Support both types of feature sections
interface FeaturesSectionProps {
  features?: {
    icon: IconType;
    text: string;
  }[];
  style?: React.CSSProperties;
  textClassename?: string;
  textStyle?: React.CSSProperties;
  iconClassename?: string;
  iconColor?: string;
  iconStyle?: React.CSSProperties;

  // New props for aboutUs page
  title?: string;
  contentClassName?: string;
  content?: React.ReactNode;
  imageSource?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  reversed?: boolean;
  containerClassName?: string;
  sectionClassName?: string;
  imageContainerClassName?: string;
  imageClassName?: string;
  contentContainerClassName?: string;
  titleClassName?: string;
  buttonClassName?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = (props) => {
  // If using the original feature list display
  if (props.features) {
    const {
      style,
      textClassename,
      textStyle,
      iconClassename,
      iconColor,
      iconStyle,
      features,
    } = props;

    return (
      <div
        className="flex flex-col md:flex-row md:gap-x-10 lg:justify-between mt-10 w-full px-5 md:px-10 lg:px-20 gap-y-4"
        style={style}
      >
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            text={feature.text}
            iconColor={iconColor}
            headingClassName={cn(
              "text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[22px] font-bold",
              textClassename
            )}
            headingStyle={textStyle}
            iconStyle={iconStyle}
            iconClassename={cn(
              "md:w-8 md:h-8 2xl:w-[40px] 2xl:h-[40px]",
              iconClassename
            )}
          />
        ))}
      </div>
    );
  }
  // If using the content + image style from aboutUs page
  else if (props.title && props.content) {
    const {
      title,
      contentClassName,
      content,
      imageSource,
      imageAlt,
      buttonText,
      buttonLink,
      reversed = false,
      containerClassName = "w-full max-w-7xl mx-auto px-4 md:px-8",
      sectionClassName = "flex flex-col lg:flex-row items-center gap-8 lg:gap-16",
      imageContainerClassName = "w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] relative rounded-lg overflow-hidden",
      imageClassName = "w-full h-full object-cover",
      contentContainerClassName = "w-full lg:w-1/2",
      titleClassName = "text-2xl md:text-3xl lg:text-4xl font-bold mb-6",
      buttonClassName = "px-6 py-2 bg-[#a5c33c] text-white font-bold rounded-full hover:bg-opacity-90 transition-colors",
    } = props;

    const sectionContent = (
      <div className={contentContainerClassName}>
        <Heading tag="h2" className={titleClassName}>
          {title}
        </Heading>
        <div className={contentClassName}>{content}</div>
        {buttonText && (
          <a href={buttonLink} className={buttonClassName}>
            {buttonText}
          </a>
        )}
      </div>
    );

    const sectionImage = (
      <div className={imageContainerClassName}>
        <img
          src={imageSource}
          alt={imageAlt || "Feature image"}
          className={imageClassName}
        />
      </div>
    );

    return (
      <div className={containerClassName}>
        <div className={sectionClassName}>
          {reversed ? (
            <>
              {sectionContent}
              {sectionImage}
            </>
          ) : (
            <>
              {sectionImage}
              {sectionContent}
            </>
          )}
        </div>
      </div>
    );
  }

  // Fallback if neither supported format is used
  return null;
};

export default FeaturesSection;
