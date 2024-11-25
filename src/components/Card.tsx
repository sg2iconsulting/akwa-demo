import React from "react";
import { motion } from "framer-motion";

export interface CardProps {
  imageSrc: string;
  title: string;
}

const Card = ({ imageSrc, title }: CardProps) => {
  return (
    <motion.div
      className="w-full h-full flex cursor-pointer justify-center items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div
        id="content"
        className="h-[233px] w-[217px] xl:w-[317px] xl:h-[333px] 2xl:w-[417px] 2xl:h-[433px] flex items-center rounded-[50px] justify-center relative  aspect-square"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#074586] bg-opacity-70 rounded-[50px] z-10"></div>
        <div className="flex flex-col justify-end h-full w-full bg-opacity-100 p-8 gap-3  text-white">
          <h2 className="font-inter font-semibold text-[14px] xl:text-[18px] 2xl:text-[32px] opacity-100 z-20">
            {title}
          </h2>
          <button className="w-[124px] xl:w-[160px] 2xl:w-[224px] h-[32px] xl:h-[44px] 2xl:h-[64px] text-[12px] xl:text-[16px] 2xl:text-[20px] bg-[#A2BB51] rounded-[50px] text-center z-20">
            En savoir plus
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
