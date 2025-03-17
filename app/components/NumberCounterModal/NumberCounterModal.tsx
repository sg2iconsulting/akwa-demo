import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "../animation/AnimatedCounter";
import { NumbersCounterItem } from "../NumbersCounter/NumbersCounter";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  imgSrc: string;
  title: string;
  titleTextColor?: string;
  componentBackgroundColor?: string;
  data: NumbersCounterItem[];
}

const NumberCounterModal = ({ isVisible, onClose, imgSrc, title, titleTextColor, componentBackgroundColor, data }: ModalProps) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-[250px] sm:w-[400px] md:w-[600px] lg:w-[750px] xl:w-auto 2xl:w-[1070px] mx-4 sm:mx-8 lg:mx-16 xl:mx-24 rounded-lg xl:rounded-[20px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row-reverse xl:h-auto h-full w-full ">
          <div className="relative flex flex-col w-full xl:w-[670px] 2xl:w-[850px] bg-white">
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[450px] xl:h-[600px] 2xl:h-[780px] ">
              <img
                src={imgSrc || "/akwagroup/images/akwaCarte.png"}
                alt="Carte Modal"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="bg-white flex justify-center items-center h-[60px] xl:h-[102px]  2xl:pb-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-28 h-7 md:w-36 md:h-10 xl:w-52 xl:h-12 2xl:w-[290px] 2xl:h-[67px] text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px]"
              >
                Voir la vidéo
              </motion.button>
            </div>
          </div>

          <div 
          style={{
            color: titleTextColor || "white",
            backgroundColor: componentBackgroundColor || "#052337"
        }}
          className="w-full md:w-[250px] lg:w-[400px] py-6 sm:py-8 md:py-6 xl:py-10 px-4 sm:px-6 md:px-8 flex flex-col gap-3 lg:gap-5 xl:gap-10 justify-evenly md:items-center">
            <motion.h2 
            style={{
                color: titleTextColor || "black"
            }}
            className="text-[14px] sm:text-[16px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] font-black">
              {title}
            </motion.h2>
            <div className="flex justify-between md:items-baseline md:flex-col gap-6 xl:gap-10">
              {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-1 xl:gap-3 md:w-20 lg:w-32 xl:w-40 2xl:w-48">
                  <motion.div className="text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[24px] 2xl:text-[32px] font-bold flex items-baseline">
                    {item.plusSign && <span className="text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[24px] 2xl:text-[32px]">+</span>}
                    <AnimatedCounter modal={true} value={item.number} duration={3} />
                  </motion.div>
                  <hr 
                  style={{
                    color: item.lineColor || "white"
                  }}
                  className="w-4 xl:w-16 2xl:w-20" />
                  <p 
                  style={{
                    color: item.descriptiontextColor || "white"
                }}
                  className="text-center text-[4px] sm:text-[8px] lg:text-[12px] xl:text-[16px] 2xl:text-[20px] font-semibold">
                    {item.description} 
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-lg lg:text-3xl xl:text-4xl 2xl:text-6xl"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default NumberCounterModal;
