import React from "react";
import { motion } from "framer-motion";

const Item = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="w-full h-[90px] md:h-[126px] cursor-pointer rounded-[12px] bg-white border border-[#F1F1F1] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] "
    >
      <div className="p-4 flex items-center justify-evenly w-full h-full gap-2">
        <div className="flex flex-col gap-2 w-[80%] h-auto">
          <p className="text-[8px] md:text-[12px] xl:text-[16px]">
            July 20, 2021
          </p>
          <p className="text-[10px] md:text-[14px] xl:text-[18px] font-bold">
            AFRIQUIA GAZ PARTICIPE À LA 15ÈME ÉDITION DU SALON MAROCOTEL
          </p>
        </div>
        <div className="w-[20%] h-full md:w-[100px] md:h-[100px] aspect-square">
          <img
            src="/actuality/item.jpeg"
            alt=""
            className="w-full h-full rounded-[8px] object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Item;
