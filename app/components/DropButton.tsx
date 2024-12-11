"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.7 }}
        onClick={toggleDropdown}
        className="cursor-pointer font-bold text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px] relative"
      >
        <div className="flex items-center gap-1">
          <p>Nos Filiales</p>
          <div>
            <HiChevronRight
              height={10}
              width={10}
              className={`lg:text-lg xl:text-xl transform transition-transform duration-500 ${
                isOpen ? "rotate-90 md:-rotate-90" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </motion.button>
      <div
        className={`absolute left-[70px] -bottom-[101px] md:left-[85px] md:-bottom-[21px] lg:-left-6 lg:bottom-[3px] xl:-left-8 xl:bottom-[24px] 2xl:-left-7 rounded-[10px] mb-4 w-28 md:w-32 xl:w-[170px] 2xl:w-[195px] flex flex-col gap-2 text-start lg:py-2 bg-[#052337] text-white overflow-hidden md:transition-all md:duration-700 md:ease-out ${
          isOpen ? "block md:max-h-[160px] 2xl:max-h-[180px]" : "hidden md:block md:max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2 pl-3 lg:pl-5 md:py-1 xl:py-2">
          {[
            "Afriquia Gaz",
            "Afriquia smdc",
            "Fastvolt",
            "Maghreb oxygene",
            "Speedy",
          ].map((option, index) => (
            <motion.div
              key={index}
              className="font-normal"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            >
              <a
                href="#"
                className="flex gap-2 items-center text-[9px] md:text-[11px] xl:text-[14px] 2xl:text-[17px]"
              >
                <p>{option}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownButton;
