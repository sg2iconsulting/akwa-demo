import React from "react";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import ButtonText from "../../atoms/ButtonText/ButtonText";
import Image from "../../atoms/Image/Image";

export interface PostCardProps {
  imgSrc: string;
  date: string;
  title: string;
  description?: string;
  imageClassename?: string;
  dateClassename?: string;
  titleClassename?: string;
  descriptionClassename?: string;
  buttonClassename?: string;
  backgroundItemColor?: string;
  backgroundButtonColor?: string;
  buttonTextColor?: string;
  labelButton: string;
}

const PostCard = ({
  imgSrc,
  date,
  title,
  description,
  imageClassename,
  titleClassename,
  dateClassename,
  descriptionClassename,
  buttonClassename,
  backgroundItemColor,
  backgroundButtonColor,
  buttonTextColor,
  labelButton,
}: PostCardProps) => {
  return (
    <div className="w-full xl:w-[63%] xl:h-[695px] flex flex-col rounded-[20px] overflow-hidden">
      <div className="w-full rounded-t-[20px] overflow-hidden">
        <Image
          imageClassename={imageClassename}
          src={imgSrc}
          alt={title}
        />
      </div>

      <div
        className="w-full rounded-b-[20px] flex flex-col justify-center gap-2 md:gap-4 p-6 md:px-10 lg:px-16 "
        style={{
          backgroundColor: backgroundItemColor || undefined,
          color: buttonTextColor || undefined,
        }}
      >
        <Paragraph className={dateClassename}>
          {date}
        </Paragraph>
        <Heading
          tag="h3"
          className={titleClassename}
        >
          {title}
        </Heading>
        <Paragraph className={descriptionClassename}>
          {description}
        </Paragraph>

        <ButtonText
          buttonTextLabel={labelButton}
          buttonTextClassename={buttonClassename}
          buttonTextStyle={{
            backgroundColor: backgroundButtonColor || undefined,
            color: buttonTextColor || undefined,
          }}
        />
      </div>
    </div>
  );
};

export default PostCard;
