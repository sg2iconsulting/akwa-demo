import React from "react";
import { motion } from "framer-motion";

export interface SectionProps {
  imageSrc: string;
  title: string;
  text: string;
  btn: boolean;
}

const Section = ({ imageSrc, title, text, btn }: SectionProps) => {
  return (
    <section className="w-full ">
      <div className="w-full max-w-[2000px] h-auto flex flex-col mx-auto gap-2 md:gap-4 xl:gap-8  px-3 md:px-7 xl:px-10 2xl:px-20">
        {/* <div className={`fixed top-4 right-4 z-50`}>
          <motion.button
            className="h-[35px] md:h-[45px] cursor-pointer xl:h-[55px] w-[135px] md:w-[165px] xl:w-[200px] text-[10px] md:text-[12px] xl:text-base text-white font-bold rounded-full bg-red-600 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Besoin de Gaz ?
          </motion.button>
        </div> */}

        <div className="w-full h-[450px] md:h-[700px] lg:h-[400px] xl:h-[500px] flex flex-col lg:flex-row border dark:border-[#373737] rounded-[20px] xl:rounded-[50px] ">
          <div className="w-full lg:w-[55%] h-1/2 lg:h-full rounded-t-[20px] lg:rounded-l-[20px] xl:rounded-l-[50px] lg:rounded-r-[0px] bg-gradient-to-r from-[#2C5799] to-[#59A5D8] flex justify-center items-center text-white p-4 lg:p-16">
            <div className="w-full">
              <div className="flex flex-col gap-2 md:gap-4 xl:gap-8">
                <p className="text-lg md:text-[23px] lg:text-2xl xl:text-[40px] font-bold leading-tight xl:leading-9">
                  {title}
                </p>
                <p className="text-[10px] md:text-[13px] lg:text-[16px] font-medium">
                  {text}
                </p>
                <motion.button
                  className="h-[35px] md:h-[45px] cursor-pointer xl:h-[55px] w-[135px] md:w-[165px] xl:w-[200px] text-[10px] md:text-[13px] lg:text-[16px] font-medium rounded-full bg-[#A2BB51]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  En savoir plus
                </motion.button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%] h-1/2 md:h-[400px] lg:h-full rounded-b-[20px] lg:rounded-r-[20px] xl:rounded-r-[50px] lg:rounded-l-[0px] overflow-hidden">
            <img
              src={imageSrc}
              alt=""
              className="object-cover object-center lg:object-right h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
