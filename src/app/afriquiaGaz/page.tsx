"use client";
import Content from "@/components/afriquiaGaz/content/Content";
import Footer from "@/components/afriquiaGaz/Footer";
import Navbar from "@/components/afriquiaGaz/Navbar";
import React from "react";
import { motion } from "framer-motion";

const espace_professionel = () => {
  return (
    <div className="flex flex-col font-poppins">
      <Navbar
        space={"Espace Particulier"}
        btnColor={"bg-[#387CCC]"}
        link={"/afriquiaGaz/particulier"}
      />
      {/* <div className={` top-96 w-full fixed z-50`}>
        <div className=" max-w-[2000px] mx-auto flex justify-end px-3 md:px-7 xl:px-10 2xl:px-20 w-full ">

          <motion.button
            className="h-[35px] md:h-[45px] cursor-pointer xl:h-[55px] w-[135px] md:w-[165px] xl:w-[200px] text-[10px] md:text-[12px] xl:text-base text-white font-bold rounded-full bg-red-600 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            >
            Besoin de Gaz ?
          </motion.button>
            </div>
        </div> */}
      <div className={` bottom-60 xl:bottom-52 w-full fixed z-50`}>
        <div className=" max-w-[2000px] mx-auto flex justify-end px-3 md:px-7 xl:px-10 2xl:px-20 w-full ">
          <motion.button
            className="h-[35px] md:h-[45px] cursor-pointer xl:h-[55px] w-[135px] md:w-[165px] xl:w-[200px] text-[10px] md:text-[12px] xl:text-base text-white font-bold rounded-full bg-red-600 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Besoin de Gaz ?
          </motion.button>
        </div>
      </div>
      <div className="">
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default espace_professionel;
