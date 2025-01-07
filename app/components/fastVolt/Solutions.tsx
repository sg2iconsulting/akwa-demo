"use client";
import React from "react";
import { motion } from "framer-motion";
import "@/app/styles/carousel.css";
import { useMediaQuery } from "react-responsive";
import useInView from "@/app/hook/useView";
import { IoCheckmarkCircle } from "react-icons/io5";

const Solutions = () => {
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
    <section className="font-poppins w-full max-w-[2000px] mx-auto h-full mt-6 lg:mt-0">
      <div className={`w-full px-5 md:px-10 lg:px-20 h-full `}>
        <motion.div
          ref={ref}
          initial={initial}
          animate={animate}
          transition={{ duration: 0.8 }}
          className={`md:pb-3 xl:pb-6`}
        >
          <div className="hidden sm:block">
            <h2
              className={`w-full leading-none text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black text-black dark:text-white`}
            >
              Une solution rapide et proche
            </h2>
            <h2
              className={`w-full leading-none text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black text-black dark:text-white`}
            >
              de chez vous
            </h2>
          </div>
          <div className="sm:hidden">
            <h2
              className={`w-full leading-none text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black text-black dark:text-white`}
            >
              Une solution rapide et proche de chez vous
            </h2>
          </div>
          <h3
            className={`text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium text-[#A2C24C] dark:text-white mt-2 lg:mt-0`}
          >
            Découvrez nos avantages
          </h3>
        </motion.div>
      </div>
      <div className={`w-full p-5 md:px-10 lg:px-20 h-full`}>
        <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-x-10 2xl:gap-x-16 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-4 lg:gap-6 2xl:gap-8">
            <div className="flex items-center gap-2 lg:gap-4">
              <div>
                <IoCheckmarkCircle
                  color="#D1FF33"
                  className="md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
                />
              </div>
              <h3 className=" text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold">
                Une formule d’abonnement adaptée pour votre confort 
              </h3>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <div>
                <IoCheckmarkCircle
                  color="#D1FF33"
                  className="md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
                />
              </div>
              <h3 className=" text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold">
                1er réseau de bornes de recharge rapide au Maroc avec une
                puissance de charge allant jusqu’à 100KW DC 
              </h3>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <div>
                <IoCheckmarkCircle
                  color="#D1FF33"
                  className="md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
                />
              </div>
              <h3 className=" text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold">
                Une offre inédite au Maroc
              </h3>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <div>
                <IoCheckmarkCircle
                  color="#D1FF33"
                  className="md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
                />
              </div>
              <h3 className=" text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold">
                Recharge rapide en seulement 30min
              </h3>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 lg:gap-6 2xl:gap-8">
            <div className="flex items-center gap-2 lg:gap-4">
              <div>
                <IoCheckmarkCircle
                  color="#D1FF33"
                  className="md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
                />
              </div>
              <h3 className=" text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold">
                Une application dédiée pour localiser les bornes de recharge
                rapide les plus proches, organiser et payer le chargement de son
                véhicule
              </h3>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <div>
                <IoCheckmarkCircle
                  color="#D1FF33"
                  className="md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
                />
              </div>
              <h3 className=" text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold">
                Plus de de 100 points de recharges disponibles au Maroc
              </h3>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <div>
                <IoCheckmarkCircle
                  color="#D1FF33"
                  className="md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
                />
              </div>
              <h3 className=" text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold">
                Disponible sur les principaux axes autoroutiers
              </h3>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <div>
                <IoCheckmarkCircle
                  color="#D1FF33"
                  className="md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
                />
              </div>
              <h3 className=" text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold">
                L’accès à un ensemble de services réservés aux abonnés de
                FastVolt
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
