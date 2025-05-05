import React from "react";
import { IconType } from "react-icons";
import Text from "../atoms/Text";
import Icon from "../atoms/Icon";

interface TextWithIconProps {
  paragraph: string;
  icon: IconType;
  iconColor?: string;
  iconSize?: number;
  paragraphTextColor?: string;
  iconClassname?: string;
  textClassname?: string;
  containerClassename?: string;
  containerStyle?: React.CSSProperties;
}

const TextWithIcon: React.FC<TextWithIconProps> = ({
  paragraph,
  icon,
  iconColor = "#D1FF33",
  iconSize = 24,
  paragraphTextColor = "black",
  iconClassname,
  textClassname,
  containerClassename = "flex items-center gap-2 lg:gap-4",
  containerStyle,
}) => {
  return (
    <div>
      <div className={containerClassename} style={containerStyle || {}}>
        <div>
          <Icon
            icon={icon}
            iconColor={iconColor}
            iconSize={iconSize}
            iconClassename={iconClassname}
          />
        </div>
        <Text
          tag="h3"
          style={{ color: paragraphTextColor }}
          className={textClassname}
        >
          {paragraph}
        </Text>
      </div>
    </div>
  );
};

export default TextWithIcon;
