import React from 'react';
import TextWithIcon from '../TextWithIcon/TextWithIcon';
import { IconType } from 'react-icons';

interface FeatureListProps {
  paragraphs: string[];
  icon: IconType;
  iconColor?: string;
  iconSize?: number;
  paragraphTextColor?: string;
  containerClassName?: string;
  textClassName?: string;
  paragraphClassename?: string;
  iconClassename?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({
  paragraphs,
  icon,
  iconColor = '#D1FF33',
  iconSize,
  paragraphTextColor = 'black',
  containerClassName = 'w-full flex flex-col gap-4 lg:gap-6 2xl:gap-8',
  textClassName,
  iconClassename
}) => {
  return (
    <div className={containerClassName}>
      {paragraphs.map((paragraph, index) => (
        <TextWithIcon
          key={index}
          paragraph={paragraph}
          icon={icon}
          iconColor={iconColor}
          iconSize={iconSize }
          paragraphTextColor={paragraphTextColor}
          textClassname={textClassName}
          iconClassname={iconClassename}
        />
      ))}
    </div>
  );
};

export default FeatureList; 