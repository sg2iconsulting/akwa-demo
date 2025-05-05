import React from "react";
import { IconType } from "react-icons";

interface FeatureIconProps {
  icon: IconType;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({
  icon: Icon,
  color = "#8CA640",
  className = "md:w-8 md:h-8 2xl:w-[40px] 2xl:h-[40px]",
  style
}) => {
  return <Icon color={color} className={className} style={style} />;
};

export default FeatureIcon; 