"use client";
import React from "react";
import { motion } from "framer-motion";

export interface ApplicationProps {
  imgSrc: string;
  title: string;
  descrip: string;
  color: string;
  app: boolean;
}

const Application = ({ imgSrc, title, descrip, color, app }: ApplicationProps) => {
  return (
    <section className="w-full h-full flex flex-col">
      <div className="flex flex-col h-full w-full">
        <div className="flex-grow rounded-t-[20px] overflow-hidden">
          <img src={imgSrc} alt="" className="object-cover w-full h-full" />
        </div>
        <div
          className={`flex-grow ${color} rounded-b-[20px] text-white flex flex-col justify-between gap-2 md:gap-4 p-6 md:px-10 lg:px-16 2xl:py-16`}
        >
          <p className="text-[16px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] 3xl:text-[60px] leading-tight font-bold">
            {title}
          </p>
          <p className="text-[8px] md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px] font-medium line-clamp-4">
            {descrip}
          </p>
          <motion.button
            className={`w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px] rounded-full cursor-pointer mt-2 text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold mb-2 ${app ? "text-white bg-[#A2BB51]" : "bg-white text-[#225780]"}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            En savoir plus
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Application;
