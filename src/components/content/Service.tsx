import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section className="px-10 my-5 xl:my-24">
      <div className="flex flex-wrap justify-center 2xl:justify-between 2xl:gap-0 gap-16 items-center gap-y-4 xl:gap-y-10 w-full max-w-[1800px] mx-auto">
        <motion.div
          className="w-[300px] h-[70px] md:w-[350px] cursor-pointer md:h-[90px] xl:w-[480px] xl:h-[140px] 2xl:w-[320px] 2xl:h-[467px] flex items-center justify-center rounded-[15px] bg-cover bg-center"
          style={{ backgroundImage: `url('/service/produit.png')` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-center px-7 w-full">
            <h2 className="font-poppins text-center font-medium md:font-semibold text-white text-[14px] md:text-[22px] xl:text-[36px] 3xl:text-[50px]">
              Nos produits
            </h2>
          </div>
        </motion.div>
        <motion.div
          className="w-[300px] h-[70px] md:w-[350px] cursor-pointer md:h-[90px] xl:w-[480px] xl:h-[140px] 2xl:w-[320px] 2xl:h-[467px] flex items-center justify-center rounded-[15px] bg-cover bg-center"
          style={{ backgroundImage: `url('/service/solution.png')` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-center px-7 w-full">
            <h2 className="font-poppins text-center font-medium md:font-semibold text-white text-[14px] md:text-[22px] xl:text-[36px] 3xl:text-[50px]">
              Nos solutions
            </h2>
          </div>
        </motion.div>
        <motion.div
          className="w-[300px] h-[70px] md:w-[350px] cursor-pointer md:h-[90px] xl:w-[480px] xl:h-[140px] 2xl:w-[320px] 2xl:h-[467px] flex items-center justify-center rounded-[15px] bg-cover bg-center"
          style={{ backgroundImage: `url('/service/conseil.png')` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-center px-7 w-full">
            <h2 className="font-poppins text-center font-medium md:font-semibold text-white text-[14px] md:text-[22px] xl:text-[36px] 3xl:text-[50px]">
              Conseil& Assistance
            </h2>
          </div>
        </motion.div>
        <motion.div
          className="w-[300px] h-[70px] md:w-[350px] cursor-pointer md:h-[90px] xl:w-[480px] xl:h-[140px] 2xl:w-[320px] 2xl:h-[467px] flex items-center justify-center rounded-[15px] bg-cover bg-center"
          style={{ backgroundImage: `url('/service/efficacite.png')` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-center px-7 w-full">
            <h2 className="font-poppins text-center font-medium md:font-semibold text-white text-[14px] md:text-[22px] xl:text-[36px] 3xl:text-[50px]">
              Éfficacité Énergétique
            </h2>
          </div>
        </motion.div>
        <motion.div
          className="w-[300px] h-[70px] md:w-[350px] cursor-pointer md:h-[90px] xl:w-[480px] xl:h-[140px] 2xl:w-[320px] 2xl:h-[467px] flex items-center justify-center rounded-[15px] bg-cover bg-center"
          style={{ backgroundImage: `url('/service/faq.png')` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-center px-7 w-full">
            <h2 className="font-poppins text-center font-medium md:font-semibold text-white text-[14px] md:text-[22px] xl:text-[36px] 3xl:text-[50px]">
              FAQ
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
