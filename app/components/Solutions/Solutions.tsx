"use client";
import React from "react";
import { motion } from "framer-motion";
import "@/app/styles/carousel.css";
import { useMediaQuery } from "react-responsive";
import useInView from "@/hook/useView";
import { IoCheckmarkCircle } from "react-icons/io5";

interface SolutionsProps {
  paragraphs: string[];
  firstTitle: string;
  firstTitleTextColor: string;
  secondTitle: string;
  secondTitleTextColor: string;
  paragraphTextColor: string;
  iconTextColor: string;
}

const Solutions: React.FC<SolutionsProps> = ({
  paragraphs,
  firstTitle,
  firstTitleTextColor,
  secondTitle,
  secondTitleTextColor,
  paragraphTextColor,
  iconTextColor,
}) => {
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

  // Split the paragraphs array into two halves
  const halfLength = Math.ceil(paragraphs.length / 2);
  const leftParagraphs = paragraphs.slice(0, halfLength);
  const rightParagraphs = paragraphs.slice(halfLength);

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
          <div className="w-[40%]">
            <h2
              style={{
                color: firstTitleTextColor || "black",
              }}
              className={` leading-none text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black dark:text-white`}
            >
              {firstTitle}
            </h2>
          </div>
          <h3
            style={{
              color: secondTitleTextColor || "#A2C24C",
            }}
            className={`text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium  dark:text-white mt-2 lg:mt-0`}
          >
            {secondTitle}
          </h3>
        </motion.div>
      </div>
      <div className={`w-full p-5 md:px-10 lg:px-20 h-full`}>
        <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-x-10 2xl:gap-x-16 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-4 lg:gap-6 2xl:gap-8">
            {leftParagraphs.map((paragraph, index) => (
              <div key={index} className="flex items-center gap-2 lg:gap-4">
                <div>
                  <IoCheckmarkCircle
                    color={iconTextColor || "#D1FF33"}
                    className="md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
                  />
                </div>
                <h3
                  style={{
                    color: paragraphTextColor || "black",
                  }}
                  className=" text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold"
                >
                  {paragraph}
                </h3>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 lg:gap-6 2xl:gap-8">
            {rightParagraphs.map((paragraph, index) => (
              <div key={index} className="flex items-center gap-2 lg:gap-4">
                <div>
                  <IoCheckmarkCircle
                    color={iconTextColor || "#D1FF33"}
                    className="md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
                  />
                </div>
                <h3 className=" text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold">
                  {paragraph}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
