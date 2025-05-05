"use client";
import React from "react";
import useInView from "@/hook/useView";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

export interface SectProps {
  title: string;
  descrip: string;
  imgSrc: string;
  space: boolean;
}

const Sect = ({ title, descrip, imgSrc, space }: SectProps) => {
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
          className={`w-full h-[200px] sm:h-[400px] xl:h-[500px] 2xl:h-[675px] flex flex-col sm:flex-row items-center text-white rounded-[24px] overflow-hidden`}
          style={{
            backgroundImage: `url("/afriquiaGaz/section/sect-4.png")`,
            backgroundSize: "cover",
          }}
        >
          <div
            className={` flex flex-col w-full sm:w-[50%] h-full gap-5 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 justify-center px-6 md:px-10 xl:px-14 2xl:px-20`}
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
              <p className="font-medium text-[8px] sm:text-[11px] md:text-[16px] 2xl:text-[24px] line-clamp-5 lg:line-clamp-6 xl:line-clamp-none w-full z-40">
                {descrip}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`${
                space ? "hidden" : ""
              } bg-[#A2BB51] text-[8px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[22px] z-40 w-24 h-6 md:w-36 md:h-10 xl:w-56 xl:h-12 2xl:w-[290px] 2xl:h-[67px] text-white font-bold rounded-full`}
            >
              En savoir plus
            </motion.button>
            <div
              className={`${
                space ? "" : "hidden"
              } flex gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-8`}
            >
              <motion.img
                src="/fastVolt/appStore.png"
                alt=""
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-[100px] md:w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[210px] cursor-pointer "
              />
              <motion.img
                src="/fastVolt/googlePlay.png"
                alt=""
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-[100px] md:w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[210px] cursor-pointer "
              />
            </div>
          </div>
          <div className=" w-[50%] hidden h-[50%] sm:h-full sm:flex items-end">
            <img
              src={imgSrc}
              alt="Your Image"
              className={`w-full h-full ${
                space ? "object-contain sm:object-cover" : "object-contain"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sect;
