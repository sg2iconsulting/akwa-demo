"use client";
import React from "react";
import Item from "./Item";
import { motion } from "framer-motion";
import useInView from "@/app/hook/useView";
import { useMediaQuery } from "react-responsive";

export interface ActProps {
  imgSrc: string;
  color: string;
  btnColor: string;
  title: string;
  descrip: string;
}

const Actuality = ({imgSrc, color, btnColor, title, descrip}: ActProps) => {
  const { ref, isInView } = useInView();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const initial = isInView
  ? isMobile
    ? { opacity: 0, y: 25 }
    : { opacity: 0, x: 40 }
  : {};

const animate = isInView
  ? isMobile
    ? { opacity: 1, y: 0 }
    : { opacity: 1, x: 0 }
  : isMobile
  ? { opacity: 0, y: 25 }
  : { opacity: 0, x: 40 };

  return (
    <section className="w-full">
      <div className="w-full h-full max-w-[2000px] mx-auto flex flex-col gap-4 lg:gap-7 px-5 md:px-10 lg:px-20">
        <motion.h2
          ref={ref}
          initial={initial}
          animate={animate}
          transition={{ duration: 0.8 }}
          className="font-black w-full text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] text-[#0E1B25] font-poppins dark:text-white"
        >
          Actualités
        </motion.h2>
        <div className=" flex flex-col xl:flex-row mx-auto xl:justify-between items-center w-full gap-3 xl:gap-0">
          <div className="w-full xl:w-[63%] xl:h-[695px] flex flex-col rounded-[20px] overflow-hidden">
            <div className="w-full rounded-t-[20px] overflow-hidden">
              <img
                src={imgSrc}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className={`w-full ${color} rounded-b-[20px] text-white flex flex-col justify-center gap-2 md:gap-4 p-6 md:px-10 lg:px-16`}>
              <p className="text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                July 20, 2021
              </p>
              <p className="text-lg text-[18px] md:text-[23px] lg:text-2xl xl:text-[28px] 2xl:text-[36px] font-bold">
                {title}
              </p>
              <p className="text-[10px] md:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] font-medium">
                {descrip}
              </p>

              <motion.button
                className={`w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px] rounded-full ${btnColor} cursor-pointer mt-2 text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold mb-2`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {"Lire l'article"}
              </motion.button>
            </div>
          </div>
          <div className="w-full xl:w-[35%] flex flex-col justify-between gap-4">
            <Item imgSrc="/actuality/item1.png" title="afriquia gaz participe à la 15ème édition du salon marocotel" date="July 20, 2021"/>
            <Item imgSrc="/actuality/item2.png" title="les dépositaires utilisateurs d’i-gaz récompensés" date="July 20, 2021"/>
            <Item imgSrc="/actuality/item3.png" title="afriquia gaz s’allie à l’association tibu maroc et ouvre un centre pour la jeunesse d’inzegane" date="July 20, 2021"/>
            <Item imgSrc="/actuality/item4.png" title="les nouvelles bouteilles d’afriquia gaz révolutionnent le marché" date="July 20, 2021"/>
            <Item imgSrc="/actuality/item5.png" title="afriquia gaz s’allie à l’association tibu maroc et ouvre un centre pour la jeunesse d’inzegane" date="July 20, 2021"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actuality;
