import React from "react";
import { IconType } from "react-icons";
import Icon from "../atoms/Icon";

interface SocialMediaItems {
  icon: IconType;
  iconSize?: number;
  iconColor?: string;
  iconStyle?: React.CSSProperties;
  link?: string;
  iconClassename?: string;
}

interface SocialMediaIconsProps {
  items: SocialMediaItems[];
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
          link={item.link}
        />
      ))}
    </div>
  );
};

export default SocialMediaIcons;
