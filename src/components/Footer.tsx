"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="font-poppins w-full min-h-[175px] xl:h-[175px] bg-[#387CCC] dark:bg-[#1E1E1E] px-2 lg:px-5 xl:px-10 text-white flex items-center mt-10">
      <div className="w-full flex flex-col py-8 xl:py-0 gap-y-5 xl:flex-row justify-between items-center max-w-[1940px] mx-auto ">
        <div>
          <img
            src="/logo/fotterLogo.png"
            alt=""
            className="w-48 lg:w-56 xl:w-64"
          />
        </div>
        <ul className="flex flex-wrap lg:flex-nowrap  xl:flex-row text-center justify-center gap-4 xl:gap-16 font-bold text-[10px] md:text-[13px] xl:text-[16px]">
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
            Condition d'utilisation
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
        </ul>
        <div className="flex gap-4 lg:gap-6 xl:gap-10 py-4 xl:py-0">
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaFacebookF
              color="white"
              className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6   "
            />
          </motion.div>
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaInstagram
              color="white"
              className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6   "
            />
          </motion.div>
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaTwitter
              color="white"
              className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6   "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
