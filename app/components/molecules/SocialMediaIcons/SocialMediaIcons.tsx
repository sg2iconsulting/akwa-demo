import React from "react";
import Icon from "../../atoms/Icon/Icon";
import { IconType } from "react-icons";

interface SocialMediaIconItem {
  icon: IconType;
  iconSize?: number;
  iconColor?: string;
  iconClassename?: string;
  iconStyle?: React.CSSProperties;
}

interface SocialMediaIconsProps {
  items: SocialMediaIconItem[];
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ items }) => {
  return (
    <div className="flex gap-4 lg:gap-6 xl:gap-10 py-4 xl:py-0">
      {items.map((item, index) => (
        <Icon
          key={index}
          icon={item.icon}
          iconSize={item.iconSize}
          iconColor={item.iconColor}
          iconClassename={item.iconClassename}
          iconStyle={item.iconStyle}
        />
      ))}
    </div>
  );
};

export default SocialMediaIcons;
