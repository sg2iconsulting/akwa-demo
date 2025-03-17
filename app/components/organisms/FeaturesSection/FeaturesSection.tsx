import React from "react";
import { FiMapPin } from "react-icons/fi";
import { MdAccessTimeFilled } from "react-icons/md";
import { BsLightning } from "react-icons/bs";
import FeatureItem from "../../molecules/FeatureItem/FeatureItem";
import { IconType } from "react-icons";
import { cn } from "@/app/utils/cn";

interface FeaturesSectionProps {
  features: {
    icon: IconType;
    text: string;
  } []
  style?: React.CSSProperties;
  textClassename?: string;
  textStyle?: React.CSSProperties;
  iconClassename?: string;
  iconColor?: string;
  iconStyle?: React.CSSProperties;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  style,
  textClassename,
  textStyle,
  iconClassename,
  iconColor,
  iconStyle,
  features
}) => {

  return (
    <div className="flex flex-col md:flex-row md:gap-x-10 lg:justify-between mt-10 w-full px-5 md:px-10 lg:px-20 gap-y-4" style={style}>
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          icon={feature.icon}
          text={feature.text}
          iconColor={iconColor}
          headingClassName={cn("text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[22px] font-bold", textClassename)}
          headingStyle={textStyle}
          iconStyle={iconStyle}
          iconClassename={cn("md:w-8 md:h-8 2xl:w-[40px] 2xl:h-[40px]", iconClassename)}

        />
      ))}
    </div>
  );
};

export default FeaturesSection; 