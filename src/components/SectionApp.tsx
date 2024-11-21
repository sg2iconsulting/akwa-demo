"use client";
import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  imageSrc: string;
  title: string;
  text: string;
  btn?: boolean;
}

const SectionApp = ({ imageSrc, title, text }: SectionProps) => {
  return (
    <section className="w-full max-w-[1900px] h-auto flex flex-col mx-auto gap-2 md:gap-4 xl:gap-8 p-4 md:p-8">
      <div className="w-full h-[450px] md:h-[700px] lg:h-[400px] xl:h-[500px] rounded-[20px] xl:rounded-[50px] flex flex-col lg:flex-row xl:border-2">
        <div className="w-full lg:w-[55%] h-1/2 lg:h-full rounded-t-[20px] lg:rounded-l-[20px] xl:rounded-l-[50px] lg:rounded-r-[0px] bg-gradient-to-r from-[#2C5799] to-[#59A5D8] flex justify-center items-center text-white p-4 lg:p-16">
          <div className="w-full">
            <div className="flex flex-col gap-2 md:gap-4 xl:gap-8">
              <p className="text-lg md:text-[23px] lg:text-2xl xl:text-[40px] font-bold leading-tight xl:leading-9">
                {title}
              </p>
              <motion.button
                className="h-[35px] md:h-[45px] xl:h-[55px] w-[135px] md:w-[165px] xl:w-[200px] text-[10px] md:text-[13px] lg:text-[16px] font-medium rounded-full bg-white text-gray-900"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Télécharger
              </motion.button>
              <div className={`flex gap-5 2xl:gap-10 pt-2 2xl:pt-10`}>
                <img
                  src="/section/appStore.png"
                  alt=""
                  className="w-[38%] h-[80%] lg:w-[32%] lg:h-[72%] 2xl:w-auto 2xl:h-auto "
                />
                <img
                  src="/section/googlePlay.png"
                  alt=""
                  className="w-[38%] h-[80%] lg:w-[32%] lg:h-[72%] 2xl:w-auto 2xl:h-auto "
                />
              </div>
              <p className="text-[10px] md:text-[13px] lg:text-[16px] font-medium">
                {text}
              </p>
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
    </section>
  );
};

export default SectionApp;
