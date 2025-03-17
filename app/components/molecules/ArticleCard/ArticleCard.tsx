import React from "react";
import Text from "../../atoms/Text/Text";
import ParagraphsSections from "../../atoms/ParagraphsSections/ParagraphsSections";
import Button from "../../atoms/Button/Button";

export interface ArticleCardProps {
  title: string;
  subTitle: string;
  paragraphs : string [];
  buttonLabel: string;
  buttonClassename?: string;
  buttonStyle?: React.CSSProperties;
  titleClassName?: string;
  titleStyle?: React.CSSProperties;
  subTitleClassName?: string;
  subTitleStyle?: React.CSSProperties;
  titleSubTitleContainerClassName?: string;
  titleSubTitleContainerStyle?: React.CSSProperties;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
}

const ArticleCard = ({
  title,
  subTitle,
  paragraphs,
  buttonLabel,
  buttonClassename,
  buttonStyle,
  titleClassName,
  titleStyle,
  subTitleClassName,
  subTitleStyle,
  titleSubTitleContainerClassName = "text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black",
  titleSubTitleContainerStyle,
  containerClassName = "flex flex-col md:w-1/2 gap-3 lg:gap-6 xl:gap-10 2xl:gap-12 h-full my-auto",
  containerStyle
}: ArticleCardProps) => {
  return (
    <div className={containerClassName} style={containerStyle || {}}>
      <div className={titleSubTitleContainerClassName} style={titleSubTitleContainerStyle || {}}>
        <Text tag="h2" className={titleClassName} style={titleStyle || {}}>{title}</Text>
        <Text tag="h3" className={subTitleClassName} style={subTitleStyle || {}}>{subTitle}</Text>
      </div>
      <ParagraphsSections paragraphs={paragraphs} />
      <Button buttonLabel={buttonLabel} buttonClassename={buttonClassename} buttonStyle={buttonStyle || {}} />
    </div>
  );
};

export default ArticleCard;
