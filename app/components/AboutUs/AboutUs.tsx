"use client";
import React from "react";
import { motion } from "framer-motion";
import useInView from "../../../hook/useView";
import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";

export interface AboutUsProps {
  imageSrc: string;
  imageClassename: string;
  firstTitle: string;
  firstTitleColor: string;
  secondTitle: string;
  secondTitleColor: string;
  textParagraph: string;
  textParagraphColor: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  buttonLabel: string;
  roundedButton: string;
}

const AboutUs = ({
  imageSrc = "/maghreb/aboutUs.png",
  imageClassename = "flex gap-2 w-full h-full md:w-1/2  md:justify-end my-auto",
  firstTitle,
  firstTitleColor,
  secondTitle,
  secondTitleColor,
  textParagraph,
  textParagraphColor,
  buttonBackgroundColor,
  buttonLabel,
  buttonTextColor,
  roundedButton,
}: AboutUsProps) => {
  const { ref, isInView } = useInView();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const MotionButton = motion(Button);

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
    <section className="font-poppins w-full max-w-[2000px] mx-auto h-full">
      <div className="w-full p-5 md:px-10 lg:px-20 h-full">
        <div className="flex flex-col md:flex-row md:justify-between w-full h-full gap-5 md:gap-8 lg:gap-12">
          <div className="flex flex-col md:w-1/2 gap-3 lg:gap-6 xl:gap-10 2xl:gap-12 h-full my-auto">
            <motion.div
              ref={ref}
              initial={initial}
              animate={animate}
              transition={{ duration: 0.8 }}
              className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black"
            >
              <h2
                style={{
                  color: firstTitleColor,
                }}
                className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black dark:text-white"
              >
                {firstTitle}
              </h2>
              <h3
                style={{
                  color: secondTitleColor,
                }}
                className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium dark:text-white"
              >
                {secondTitle}
              </h3>
            </motion.div>
            <div
              style={{
                color: textParagraphColor,
              }}
              className="text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] flex flex-col dark:text-white"
            >
              <p>{textParagraph}</p>
            </div>
            <MotionButton
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              label={buttonLabel}
              backgroundColor={buttonBackgroundColor}
              textColor={buttonTextColor}
              roundedButton={roundedButton}
              onClick={() => console.log("Button clicked!")}
            />
          </div>
          <div className={imageClassename}>
            <img src={imageSrc} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
