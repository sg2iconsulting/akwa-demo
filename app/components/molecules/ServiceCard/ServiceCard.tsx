import React from "react";
import Image from "../../atoms/Image/Image";
import Heading from "../../atoms/Heading/Heading";

export interface ServiceCardProps {
  imgSrc: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({ imgSrc, title, className = "w-full h-full mx-auto cursor-pointer rounded-[15px] bg-cover bg-center", style }: ServiceCardProps) => {
  return (
    <div
      className={className || ""}
    >
      <div className="max-w-[320px] max-h-[467px] aspect-[320/467] relative overflow-hidden rounded-[20px]">
        <Image
          src={imgSrc}
          imageClassename={`w-full h-full object-cover`}
          imageStyle={style}
        />
        <Heading
          tag="h2"
          className="absolute line-clamp-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-poppins text-start font-bold text-white text-[14px] md:text-[18px] xl:text-[28px]"
        >
          {title}
        </Heading>
      </div>
    </div>
  );
};

export default ServiceCard;