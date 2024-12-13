import React from "react";
import { motion } from "framer-motion";
import useInView from "../hook/useView";
import { useMediaQuery } from "react-responsive";

export interface SectonProps {
  title: string;
  descrip: string;
  imgSrc: string;
}

const Section = ({ title, descrip, imgSrc }: SectonProps) => {

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
    <section className="font-poppins w-full max-w-[2000px] mx-auto">
      <div className="w-full h-full p-5 md:px-10 lg:px-20">
        <div
          className="relative bg-cover w-full rounded-3xl 2xl:rounded-[50px] p-3 text-white flex flex-col justify-center gap-2 aspect-[3/1] 2xl:h-[675px] "
          style={{ backgroundImage: `url(${imgSrc})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 z-40 rounded-3xl 2xl:rounded-[50px]"></div>
          <motion.h2
            ref={ref}
            initial={initial}
            animate={animate}
            transition={{ duration: 0.8 }}
            className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black md:ml-4 lg:ml-8 xl:ml-16 z-50"
          >
            {title}
          </motion.h2>
          <p className="font-medium text-[8px] sm:text-[11px] md:text-[16px] xl:text-[24px] 2xl:text-[36px] sm:w-2/3 md:ml-4 lg:ml-8 xl:ml-16 z-50">
            {descrip}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px]  text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] mt-1 sm:mt-2 md:mt-3 lg:mt-7 xl:mt-12 md:ml-4 lg:ml-8 xl:ml-16 z-50"
          >
            voir plus
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Section;
