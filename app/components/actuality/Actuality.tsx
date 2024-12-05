"use client";
import React from "react";
import Item from "./Item";
import { motion } from "framer-motion";
import useInView from "@/app/hook/useView";

const Actuality = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="w-full">
      <div className="w-full h-full max-w-[2000px] mx-auto flex flex-col gap-4 lg:gap-7 px-5 md:px-10 lg:px-20">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.8 }}
          className="font-black w-full text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] text-[#0E1B25] font-poppins dark:text-white"
        >
          Actualités
        </motion.h2>
        <div className=" flex flex-col xl:flex-row mx-auto xl:justify-between items-center w-full gap-3 xl:gap-0">
          <div className="w-full xl:w-[60%] xl:h-[700px] flex flex-col rounded-[20px] overflow-hidden">
            <div className="w-full rounded-t-[20px] overflow-hidden">
              <img
                src="/actuality/actu.jpeg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full bg-[#052337] rounded-b-[20px] text-white flex flex-col justify-center gap-2 md:gap-4 p-6 md:px-10 lg:px-16">
              <p className="text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                July 20, 2021
              </p>
              <p className="text-lg text-[18px] md:text-[23px] lg:text-2xl xl:text-[40px] 2xl:text-[36px] font-bold">
                Nouveau casque protecteur
              </p>
              <p className="text-[10px] md:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] font-medium">
                Après avoir étudié les attentes et besoins de nos clients,
                Afriquia Gaz a décidé de développer un casque protecteur, en
                rendant la bouteille beaucoup plus pratique, plus ergonomique,
                plus sécurisée et avec un nouveau design.
              </p>

              <motion.button
                className="w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px] rounded-full bg-[#19A0BF] cursor-pointer mt-2 text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Lire l'article
              </motion.button>
            </div>
          </div>
          <div className="w-full xl:w-[35%] flex flex-col justify-between gap-4">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actuality;
