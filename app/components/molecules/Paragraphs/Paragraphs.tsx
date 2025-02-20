import React from "react";
import Paragraph from "../../atoms/Paragraph/Paragraph";

export interface ParagraphsProps {
  paragraphs: string[];
  classname?: string;
  style?: React.CSSProperties;
  paragraphClassename?: string;
  paragraphStyle?: React.CSSProperties;
}

export const Paragraphs = ({
  paragraphs,
  style,
  classname = "text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] flex flex-col gap-2 lg:gap-4 xl:gap-6 dark:text-white",
  paragraphStyle,
  paragraphClassename
}: ParagraphsProps) => {
  return (
    <div
      style={style}
      className={classname}
    >
      {paragraphs.map((paragraph, index) => (
        <Paragraph key={index} className={paragraphClassename || ""} style={paragraphStyle || {}}>
          {paragraph}
        </Paragraph>
      ))}
    </div>
  );
};