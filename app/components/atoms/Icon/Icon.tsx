import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  iconClassename?: string;
  iconStyle?: React.CSSProperties;
  iconSize?: number;
  iconColor?: string;
  link?: string;
}
const Icon = ({
  icon: Icon,
  iconClassename,
  iconStyle,
  iconSize = 24,
  iconColor = "black",
  link,
}: IconProps) => {
  if (link) {
    return (
      <Link href={link || "#"}>
        <Icon
          className={iconClassename}
          size={iconSize}
          style={iconStyle}
          color={iconColor}
        />
      </Link>
    );
  } else {
    return (
      <Icon
        className={iconClassename}
        size={iconSize}
        style={iconStyle}
        color={iconColor}
      />
    );
  }
};

export default Icon;
