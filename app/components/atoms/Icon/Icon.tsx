import React from 'react'
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  iconClassename?: string;
  iconStyle?: React.CSSProperties;
  iconSize?: number;
  iconColor?: string;
}
const Icon = ({icon: Icon, iconClassename, iconStyle, iconSize = 24, iconColor = "black"}: IconProps) => {
    return <Icon className={iconClassename} size={iconSize} style={iconStyle} color={iconColor} />;
}

export default Icon