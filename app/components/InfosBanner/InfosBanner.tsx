"use client";
import React from "react";
import useInView from "@/app/hook/useView";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

export interface InfosBannerProps {
  title: string;
  titleTextColor: string;
  description: string;
  descriptionTextColor: string;
  imageSrc: string;
  children?: React.ReactNode;
}

const InfosBanner = ({
  title,
  description,
  imageSrc,
  titleTextColor,
  descriptionTextColor,
  children,
}: InfosBannerProps) => {
  const { ref, isInView } = useInView();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const initial = isInView
    ? isMobile
      ? { opacity: 0, y: 0 }
      : { opacity: 0, x: 40 }
    : {};

  const animate = isInView
    ? isMobile
      ? { opacity: 1, y: 0 }
      : { opacity: 1, x: 0 }
    : isMobile
    ? { opacity: 0, y: 0 }
    : { opacity: 0, x: 40 };

  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto">
      <div className="w-full h-full px-5 md:px-10 lg:px-20">
        <div
          className="w-full h-[200px] sm:h-[400px] xl:h-[500px] 2xl:h-[675px] flex flex-col sm:flex-row items-center rounded-[24px] overflow-hidden"
          style={{
            backgroundImage: `url("/afriquiaGaz/section/sect-4.png")`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col w-full sm:w-[50%] h-full gap-5 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 justify-center px-6 md:px-10 xl:px-14 2xl:px-20">
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
              <motion.h2
                ref={ref}
                initial={initial}
                animate={animate}
                transition={{ duration: 0.8 }}
                style={{
                  color: titleTextColor,
                }}
                className="text-[16px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] 3xl:text-[60px] font-bold leading-tight z-40"
              >
                {title}
              </motion.h2>
              <p
                style={{
                  color: descriptionTextColor,
                }}
                className="font-medium text-[8px] sm:text-[11px] md:text-[16px] 2xl:text-[24px] line-clamp-5 lg:line-clamp-6 xl:line-clamp-none w-full z-40"
              >
                {description}
              </p>
            </div>
            {children} 
          </div>
          <div className="w-[50%] hidden h-[50%] sm:h-full sm:flex items-end">
            <img
              src={imageSrc}
              alt="Your Image"
              className="w-full h-full object-contain sm:object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfosBanner;
