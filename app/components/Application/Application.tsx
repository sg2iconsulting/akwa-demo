"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";

export interface ApplicationProps {
  imageSrc: string;
  imageClassename?: string;
  title: string;
  titleTextColor: string;
  description: string;
  descriptionTextColor?: string;
  applicationBackgroundColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  buttonLabel?: string;
  roundedButton?: string;
}

const Application = ({
  imageSrc,
  imageClassename = "object-cover w-full h-full",
  title,
  titleTextColor,
  description,
  descriptionTextColor,
  applicationBackgroundColor,
  buttonBackgroundColor,
  buttonTextColor,
  buttonLabel,
  roundedButton = "9999px",
}: ApplicationProps) => {
  const MotionButton = motion(Button);

  return (
    <section className="w-full max-w-[878px] max-h-[981px] flex flex-col mx-auto">
      <div className="grid grid-rows-[1fr_1fr] w-full h-full max-h-[981px]">
        <div className="relative overflow-hidden rounded-t-[20px]">
          <img
            src={imageSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div
          style={{
            backgroundColor: applicationBackgroundColor,
          }}
          className="rounded-b-[20px] flex flex-col justify-between gap-2 md:gap-4 p-6 md:px-10 lg:px-16 2xl:py-16"
        >
          <p
            style={{ color: titleTextColor }}
            className="line-clamp-2 text-[16px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] 3xl:text-[60px] leading-tight font-bold"
          >
            {title}
          </p>
          <p
            style={{ color: descriptionTextColor }}
            className="text-[8px] md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px] font-medium line-clamp-4"
          >
            {description}
          </p>
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
      </div>
    </section>
  );
};

export default Application;
