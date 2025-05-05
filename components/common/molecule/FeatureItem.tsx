import React from "react";
import { IconType } from "react-icons";
import FeatureIcon from "../atoms/FeatureIcon";
import Heading from "../atoms/Heading";

interface FeatureItemProps {
  icon: IconType;
  text: string;
  iconColor?: string;
  iconClassename?: string;
  iconStyle?: React.CSSProperties;
  headingClassName?: string;
  headingStyle?: React.CSSProperties;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  text,
  iconColor = "#8CA640",
  iconClassename,
  iconStyle,
  headingClassName = "text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[22px] font-black",
  headingStyle,
}) => {
  return (
    <div className="flex gap-1 lg:gap-2 2xl:gap-4 items-center">
      <FeatureIcon
        icon={icon}
        color={iconColor}
        className={iconClassename}
        style={iconStyle}
      />
      <Heading tag="h2" className={headingClassName} style={headingStyle}>
        {text}
      </Heading>
    </div>
  );
};

export default FeatureItem;
