"use client";
import React from "react";
import { motion } from "framer-motion";
import { ImLinkedin } from "react-icons/im";
import DropdownButton from "./DropButton";

const Footer = () => {

  return (
    <section
      className={`font-poppins w-full xl:h-auto bg-[#052337] p-5 md:px-10 lg:px-20 text-white flex items-center mt-10 transition-all duration-300`}
    >
      <div className="w-full flex flex-col py-8 gap-y-5 md:flex-row justify-between items-center max-w-[1940px] mx-auto relative">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <img
            src="logo/akwaLogo.png"
            alt="Akwa Group Logo"
            className="w-[60px] md:w-[80px] lg:w-[100px] 2xl:w-[150px]"
          />
        </motion.div>
        <ul className="flex flex-wrap w-[60%] lg:w-auto lg:flex-nowrap xl:flex-row text-center justify-center gap-6 lg:gap-10 font-bold text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px]">
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
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Recrutement
          </motion.li>
          <li>
            <DropdownButton />
          </li>
        </ul>
        <div className="flex gap-4 lg:gap-6 xl:gap-10 py-4 xl:py-0">
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
