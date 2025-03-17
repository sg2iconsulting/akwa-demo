import React from "react";
import { motion } from "framer-motion";
import { BsLightning } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

const FastVoltNavback = () => {
  return (
    <>
      <div className="w-full h-full relative">
        <img
          src="/fastVolt/navBackFv.png"
          className="w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center sm:justify-normal xl:justify-center text-center text-white"></div>
        <div className="w-full h-full absolute inset-0 flex items-center px-5 md:px-10 lg:px-20 2xl:px-24">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 text-white">
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
              <div className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] 2xl:text-[100px] font-bold leading-tight">
                <p className="">À vous l’expérience</p>
                <p className="">unique de l’électrique !</p>
              </div>
              <div className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold">
                <p className="w-[80%] md:w-[75%]">
                  Le temps d’une pause café, rechargez vos batteries et prenez
                  la route vers une mobilité durable, avec les bornes de
                  recharge rapide FastVolt destinées aux véhicules électriques
                  et hybrides rechargeables que vous retrouverez dans les
                  principaux axes routiers et centres urbains.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 md:gap-y-3 lg:gap-y-4 xl:gap-y-5 2xl:gap-y-6">
              <p className="text-[14px] sm:text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px] font-extrabold">
                Télécharger l’application FastVolt
              </p>
              <div className="flex gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/fastVolt/googlePlay.png"
                    className="w-16 sm:w-24 md:w-28 lg:w-32 xl:w-44 2xl:w-auto cursor-pointer"
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/fastVolt/appStore.png"
                    className="w-16 sm:w-24 md:w-28 lg:w-32 xl:w-44 2xl:w-auto cursor-pointer"
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-10 lg:justify-between mt-10 w-full px-5 md:px-10 lg:px-20 gap-y-4">
        <div className="flex gap-1 lg:gap-2 2xl:gap-4 items-center">
          <FiMapPin
            color="#D1FF33"
            className="md:w-8 md:h-8 2xl:w-[40px] 2xl:h-[40px]"
          />
          <h2 className="text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[22px] font-bold">
            Réseau de bornes le plus important du royaume
          </h2>
        </div>
        <div className="flex gap-1 lg:gap-2 2xl:gap-4 items-center">
          <MdAccessTimeFilled
            color="#D1FF33"
            className="md:w-8 md:h-8 2xl:w-[50px] 2xl:h-[50px]"
          />
          <h2 className="text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[22px] font-bold">
            30 minutes de durée de recharge
          </h2>
        </div>
        <div className="flex gap-1 lg:gap-2 2xl:gap-4 items-center">
          <BsLightning
            color="#D1FF33"
            className="md:w-8 md:h-8  2xl:w-[50px] 2xl:h-[50px]"
          />
          <h2 className="text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[22px] font-bold">
            Puissance de recharge jusqu’a 100 Kw DC{" "}
          </h2>
        </div>
      </div>
    </>
  );
};

export default FastVoltNavback;
