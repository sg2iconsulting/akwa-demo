import React from "react";
import { motion } from "framer-motion";

const Item = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="w-full h-[90px] md:h-[126px] cursor-pointer rounded-[12px] dark:bg-[#1E1E1E] dark:border-[#1E1E1E] bg-white border border-[#F1F1F1] shadow-slider-shadow  "
    >
      <div className="p-4 flex items-center justify-evenly w-full h-full gap-2">
        <div className="flex flex-col gap-2 w-[80%] h-auto">
          <p className="text-[8px] md:text-[12px] xl:text-[16px]">
            July 20, 2021
          </p>
          <p className="text-[10px] md:text-[14px] xl:text-[18px] font-bold ">
            Afriquia gaz participe à la 15ème édition du salon maroctel
          </p>
        </div>
        <div className="w-[20%] h-full md:w-[100px] md:h-[100px] aspect-square">
          <img
            src="/afriquiagaz/actuality/item.jpeg"
            alt=""
            className="w-full h-full rounded-[8px] object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Item;
