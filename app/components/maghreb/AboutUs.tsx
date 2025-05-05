"use client";
import React from "react";
import { motion } from "framer-motion";
import useInView from "../../../hook/useView";
import { useMediaQuery } from "react-responsive";

const AboutUs = () => {
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
    <section className="font-poppins w-full max-w-[2000px] mx-auto h-full">
      <div className="w-full p-5 md:px-10 lg:px-20 h-full">
        <div className="flex flex-col md:flex-row md:justify-between w-full h-full gap-5 md:gap-8 lg:gap-12">
          <div className="flex flex-col md:w-1/2 gap-3 lg:gap-6 xl:gap-10 2xl:gap-12 h-full my-auto">
            <motion.div
              ref={ref}
              initial={initial}
              animate={animate}
              transition={{ duration: 0.8 }}
              className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black"
            >
              <h2 className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black text-[#0085C3] dark:text-white">
                Qui sommes-nous?
              </h2>
              <h3 className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium text-[#334C60] dark:text-white">
                Maghreb Oxygéne
              </h3>
            </motion.div>
            <div className="text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] flex flex-col text-[#4C4C4C] dark:text-white">
              <p>
                Spécialiste des gaz industriels, des gaz médicaux et services
                associés, de la distribution des produits de soudage et des
                techniques annexes, de la diffusion d’équipements et
                consommables médicaux, Maghreb Oxygène s’engage au quotidien à
                apporter des solutions, des produits et services à ses clients,
                partout à travers le Maroc.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px] text-white font-bold bg-[#0085C3] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px]"
            >
              voir plus
            </motion.button>
          </div>
          <div className="flex gap-2 w-full h-full md:w-1/2  md:justify-end my-auto">
            <img src="/maghreb/aboutUs.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
