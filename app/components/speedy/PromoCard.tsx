import React from "react";
import { motion } from "framer-motion";

const PromoCard = () => {
  return (
    <div className="w-full md:w-[678px] h-[369px] bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] px-9">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center py-5 gap-y-4">
        <div className="dark:text-black w-full  h-1/2 sm:h-full  sm:w-1/2 flex flex-col items-center sm:items-start justify-center sm:justify-start gap-4 sm:gap-10">
          <div className="w-full flex flex-col text-center sm:text-start">
            <p className="text-sm sm:text-lg text-[#787878] ">PIRELLI</p>
            <p className="text-xl sm:text-4xl font-bold">P-ZERO PZ4</p>
            <p className="text-sm sm:text-xl">235/50 R19 99W</p>
          </div>
          <div className="w-full flex flex-col gap-2 text-center items-center sm:text-start sm:items-start">
            <div>
              <p className="text-sm sm:text-lg text-[#787878]">Prix unitaire web</p>
              <p className="text-lg sm:text-xl font-bold">1760 DH</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-[215px] h-[36px] md:h-[50px] bg-[#D52435] text-lg font-bold sm:text-xl text-white "
            >
              Acheter
            </motion.button>
          </div>
        </div>
        <div className="w-full h-1/2 sm:h-full sm:w-1/2 mt-2 flex justify-center sm:justify-end p-2 md:p-0">
          <img src="/speedy/pneu.png" className="w-28 sm:w-60 sm:mt-4" />
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
