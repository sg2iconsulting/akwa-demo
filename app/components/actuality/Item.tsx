import React from "react";
import { motion } from "framer-motion";

export interface ItemsProp {
  imgSrc: string;
  title: string;
  date: string;
}

const Item = ({ imgSrc, title, date }: ItemsProp) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="w-full h-[90px] md:h-[126px] cursor-pointer rounded-[12px] bg-white border dark:bg-[#1E1E1E] dark:border-[#1E1E1E] border-[#F1F1F1] shadow-slider-shadow  "
    >
      <div className="p-4 flex items-center justify-evenly w-full h-full gap-2">
        <div className="flex flex-col gap-2 w-[80%] h-auto">
          <p className="text-[8px] md:text-[12px] xl:text-[13px]">{date}</p>
          <p className="text-[10px] md:text-[14px] xl:text-[15px] font-bold ">
            {title}
          </p>
        </div>
        <div className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] aspect-square">
          <img
            src={imgSrc}
            alt=""
            className="w-full h-full rounded-[8px] object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Item;
