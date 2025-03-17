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
  backgroundItemColor?: string;
  backgroundButtonColor?: string;
  buttonTextColor?: string;
  label: string;
}

const PostCard = ({
  imgSrc,
  date,
  title,
  description,
  backgroundItemColor,
  backgroundButtonColor,
  buttonTextColor,
  label,
}: PostCardProps) => {
  return (
    <div className="w-full xl:w-[63%] xl:h-[695px] flex flex-col rounded-[20px] overflow-hidden">
      <div className="w-full rounded-t-[20px] overflow-hidden">
        <Image
          imageClassename="object-cover w-full h-full"
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
        <Paragraph className="text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px]">
          {date}
        </Paragraph>
        <Heading
          tag="h3"
          className="text-[15px] md:text-[23px] lg:text-2xl xl:text-[28px] 2xl:text-[36px] font-bold"
        >
          {title}
        </Heading>
        <Paragraph className="text-[10px] md:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] font-medium line-clamp-2">
          {description}
        </Paragraph>

        <ButtonText
          buttonTextLabel={label}
          buttonTextClassename="px-6 py-2 rounded-md"
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
