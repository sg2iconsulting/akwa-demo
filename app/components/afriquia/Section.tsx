"use client";
import React from "react";
import { motion } from "framer-motion";
import useInView from "../../../hook/useView";
import { useMediaQuery } from "react-responsive";

export interface SectionProps {
  title: string;
  descrip: string;
  imgSrc: string;
}

const Section = ({ title, descrip, imgSrc }: SectionProps) => {
  const { ref, isInView } = useInView();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const initial = isInView
    ? isMobile
      ? { opacity: 0, y: 0 }
      : { opacity: 0, x: 40 }
    : {};

  const animate = isInView
    ? isMobile
      ? { opacity: 1, y: 0 }
      : { opacity: 1, x: 0 }
    : isMobile
    ? { opacity: 0, y: 0 }
    : { opacity: 0, x: 40 };

  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto ">
      <div className="w-full h-full px-5 md:px-10 lg:px-20">
        <div
          className={`w-full h-[200px] sm:h-[300px] md:h-[350px] xl:h-[500px] 2xl:h-[675px] flex items-center text-white rounded-[15px] lg:rounded-[24px] xl:rounded-[35px] 2xl:rounded-[50px] `}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className={`flex flex-col w-full h-full gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 justify-center px-6 md:px-10 xl:px-14 2xl:px-20`}
          >
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
              <motion.h2
                ref={ref}
                initial={initial}
                animate={animate}
                transition={{ duration: 0.8 }}
                className="text-[16px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] 3xl:text-[60px] font-bold leading-tight z-40"
              >
                {title}
              </motion.h2>
              <p className="font-medium text-[8px] sm:text-[11px] md:text-[16px] 2xl:text-[24px] sm:w-[95%] z-40 line-clamp-4">
                {descrip}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`bg-[#A2BB51] text-[8px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px] z-40 w-24 h-6 md:w-36 md:h-10 xl:w-56 xl:h-12 2xl:w-[290px] 2xl:h-[67px] text-white font-bold rounded-full`}
            >
              En savoir plus
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
