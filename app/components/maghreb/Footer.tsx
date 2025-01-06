"use client";
import React from "react";
import { motion } from "framer-motion";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <section
      className={`font-poppins w-full xl:h-[120px] bg-[#19517D] p-5 md:px-10 lg:px-20 text-white flex items-center mt-10 transition-all duration-300`}
    >
      <div className="w-full h-full flex flex-col gap-y-5 lg:flex-row justify-between items-center max-w-[1940px] mx-auto relative">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer flex gap-1 md:gap-2 lg:gap-3 2xl:gap-4 items-center"
        >
          <img
            src="/maghreb/maghrebLogo.png"
            alt="maghreb Logo"
            className="w-[70px] md:w-[80px] lg:w-[100px] 2xl:w-[120px]"
          />
          <img
            src="/maghreb/akwaLogo.png"
            alt="akwa Logo"
            className="w-[40px] md:w-[50px] lg:w-[60px] 2xl:w-[70px] mt-1 md:mt-[6px] lg:mt-[7px] 2xl:mt-2"
          />
        </motion.div>
        <ul className="flex flex-wrap w-[80%] lg:w-auto lg:flex-nowrap xl:flex-row text-center justify-center gap-6 xl:gap-16 font-bold text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px]">
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Contact
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {"Condition d'utilisation"}
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Politique de confidentialité
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            FAQ
          </motion.li>
        </ul>
        <div className="flex gap-4 xl:gap-6 py-4 xl:py-0">
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <ImLinkedin
              color="white"
              className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
