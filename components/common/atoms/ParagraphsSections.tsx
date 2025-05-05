import React from "react";
import Text from "@/components/common/atoms/Text";

export interface ParagraphsSectionsProps {
  paragraphs: string[];
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  paragraphClassName?: string;
  paragraphStyle?: React.CSSProperties;
}

const ParagraphsSections = ({
  paragraphs,
  containerClassName = "text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] flex flex-col gap-2 lg:gap-4 xl:gap-6 dark:text-white",
  containerStyle,
  paragraphClassName,
  paragraphStyle,
}: ParagraphsSectionsProps) => {
  return (
    <div style={containerStyle || {}} className={containerClassName}>
      {paragraphs.map((paragraph, index) => (
        <Text
          key={index}
          tag="p"
          className={paragraphClassName || ""}
          style={paragraphStyle || {}}
        >
          {paragraph}
        </Text>
      ))}
    </div>
  );
};

export default ParagraphsSections;
