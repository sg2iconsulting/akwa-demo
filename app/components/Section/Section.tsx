"use client";
import React from "react";
import { motion } from "framer-motion";
import useInView from "../../hook/useView";
import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";

export interface SectionProps {
  title: string;
  description: string;
  imgSrc: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  textColor?: string;
  containerStyle?: React.CSSProperties;
  backgroundStyle?: React.CSSProperties;
  backgroundImagePosition?: string;
  buttonLabel?: string;
}

const Section = ({
  title,
  description,
  imgSrc,
  buttonBackgroundColor,
  containerStyle,
  textColor,
  backgroundImagePosition,
  buttonTextColor,
  backgroundStyle,
  buttonLabel
}: SectionProps) => {
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
    <section className="font-poppins w-full max-w-[2000px] mx-auto ">
      <div className="w-full h-full px-5 md:px-10 lg:px-20">
        <div
          className={`relative bg-cover w-full h-[200px] sm:h-[300px] md:h-[350px] xl:h-[500px] 2xl:h-[675px] flex flex-col gap-1 md:gap-2 aspect-[3/1] rounded-[20px]`}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundPosition: backgroundImagePosition,
            // // overflow: "hidden",
            // borderRadius: "20px",
            ...containerStyle,
          }}
        >
          <div
            className={`absolute inset-0 z-30`}
            style={{ ...backgroundStyle }}
          ></div>
          <div
            style={{
              color: textColor || "white",
            }}
            className="w-full h-full flex flex-col gap-4 md:gap-8 xl:gap-12 justify-center px-6 md:px-16 xl:px-24"
          >
            <div className="flex flex-col gap-4">
              <motion.h2
                ref={ref}
                initial={initial}
                animate={animate}
                transition={{ duration: 0.8 }}
                className="text-[13px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-bold leading-tight z-40"
              >
                {title}
              </motion.h2>
              <p className="font-medium text-[8px] sm:text-[11px] md:text-[16px] 2xl:text-[24px] sm:w-[95%] z-40 line-clamp-4">
                {description}
              </p>
            </div>
            <div className="z-40">
              <Button
                label={buttonLabel || "En savoir plus"}
                backgroundColor={buttonBackgroundColor || "#A2BB51"}
                textColor={buttonTextColor || "white"}
                roundedButton="9999px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
