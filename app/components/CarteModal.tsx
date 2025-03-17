import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./animation/AnimatedCounter";
import { IoCloseCircle } from "react-icons/io5";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  imgSrc: string;
}

const CarteModal = ({ isVisible, onClose, imgSrc }: ModalProps) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
          {/* Right Section: Image and Button */}
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
                onClick={handleOpenModal}
                className="w-28 h-7 md:w-36 md:h-10 xl:w-52 xl:h-12 2xl:w-[290px] 2xl:h-[67px] text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px]"
              >
                Voir la vidéo
              </motion.button>
            </div>
          </div>

          {/* Left Section: Content */}
          <div className="w-full md:w-[250px] lg:w-[400px] bg-[#052337] text-white py-6 sm:py-8 md:py-6 xl:py-10 px-4 sm:px-6 md:px-8 flex flex-col gap-3 lg:gap-5 xl:gap-10 justify-evenly md:items-center">
            <motion.h2 className="text-[14px] sm:text-[16px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] font-black">
              Chiffres Clés
            </motion.h2>
            <div className="flex justify-between md:items-baseline md:flex-col gap-6 xl:gap-10">
              {[
                { value: 20000, label1: "Emplois directs et", label2: "indirects" },
                { value: 2, label1: "Sociétés cotées en", label2: "bourse" },
                { value: 70, label1: "Sociétés", label2: "" },
                { value: 40, label1: "Marques phares", label2: "" },
              ].map(({ value, label1, label2 }, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-1 xl:gap-3 md:w-20 lg:w-32 xl:w-40 2xl:w-48">
                  <motion.div className="text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[24px] 2xl:text-[32px] font-bold flex items-baseline">
                    {value > 10 && <span className="text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[24px] 2xl:text-[32px]">+</span>}
                    <AnimatedCounter value={value} duration={3} />
                  </motion.div>
                  <hr className="w-4 xl:w-16 2xl:w-20 bg-white" />
                  <p className="text-center text-[4px] sm:text-[8px] lg:text-[12px] xl:text-[16px] 2xl:text-[20px] font-semibold">
                    {label1} <br />
                    {label2}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-lg lg:text-3xl xl:text-4xl 2xl:text-6xl"
        >
          ×
        </button>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#121212] p-2 md:p-4 lg:p-6 rounded-lg shadow-lg w-[90%]">
              <div className="w-full flex justify-between">
                <h2 className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-bold mb-4 px-2 text-white">
                  Akwa Afrique
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleCloseModal}
                  className="text-white mb-4 px-2"
                >
                  <IoCloseCircle className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px]" />
                </motion.button>
              </div>
              {/* Video player */}
               
                <video
                  src="https://sg2i.com/wp-content/uploads/2024/12/AkwaAfrica.mp4"
                  className="w-full object-cover"
                  controls
                  autoPlay
                />
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarteModal;
