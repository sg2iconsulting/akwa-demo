import React from "react";
import Item from "./Item";
import { motion } from "framer-motion";

const Actuality = () => {
  return (
    <section className="w-full">
      <div className="w-full h-full max-w-[2000px] mx-auto flex gap-7 flex-col px-3 md:px-7 xl:px-10 2xl:px-20">
        <h2 className="font-bold w-full text-[22px] md:text-[28px] lg:text-[36px] xl:text-[40px] 2xl:text-[60px] font-poppins">
          Actualités
        </h2>
        <div className=" flex flex-col xl:flex-row mx-auto xl:justify-between items-center w-full gap-4 lg:gap-6 xl:gap-0">
          <div className="w-full xl:w-[60%] xl:h-[700px] flex flex-col rounded-[20px] xl:rounded-[50px] overflow-hidden">
            <div className="w-full rounded-t-[20px] xl:rounded-t-[50px] overflow-hidden">
              <img
                src="/actuality/actu.jpeg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full bg-[#387CCC] rounded-b-[20px] xl:rounded-b-[50px] text-white flex flex-col justify-center gap-2 md:gap-4 p-6 md:px-10 lg:px-16">
              <p className="text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px]">
                July 20, 2021
              </p>
              <p className="text-lg md:text-[23px] lg:text-2xl xl:text-[40px] font-bold">
                Nouveau casque protecteur
              </p>
              <p className="text-[10px] md:text-[13px] lg:text-[16px] font-medium">
                Après avoir étudié les attentes et besoins de nos clients,
                Afriquia Gaz a décidé de développer un casque protecteur, en
                rendant la bouteille beaucoup plus pratique, plus ergonomique,
                plus sécurisée et avec un nouveau design.
              </p>
              <motion.button
                className="h-[40px] md:h-[50px] w-[150px] md:w-[200px] rounded-full bg-[#A2BB51] cursor-pointer mt-2 text-[10px] md:text-[13px] xl:text-[16px] font-medium"
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
