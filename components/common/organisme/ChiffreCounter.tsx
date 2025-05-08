"use client";
import React from "react";

import { cn } from "@/utils/cn";
import Heading from "../atoms/Heading";
import KeyFigure from "../molecule/KeyFigure";

export interface KeyFigureProps {
  value: number;
  sign?: string;
  duration: number;
  paragraphs: string[];
  className?: string;
  style?: React.CSSProperties;
  deviderClassename?: string;
  paragraphClassename?: string;
  valueClassename?: string;
  signClassename?: string;
}

export interface ChiffreCounterProps {
  title: string;
  titleClassName?: string;
  titleStyle?: React.CSSProperties;
  keyFigures: KeyFigureProps[];
  containerKeyFigureClassename?: string;
  containerKeyfigureStyle?: React.CSSProperties;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
}

const ChiffreCounter = ({
  title,
  titleClassName,
  titleStyle,
  keyFigures,
  containerKeyFigureClassename = "flex flex-wrap justify-center md:justify-between items-center w-full gap-5 xl:gap-14 text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[28px] xl:mb-8",
  containerKeyfigureStyle,
  containerClassName = "w-full h-full flex flex-col gap-8 md:gap-14 xl:gap-20 py-10 md:py-16 xl:py-20 2xl:py-28 px-5 md:px-10 lg:px-20 text-white bg-[#052337] ",
  containerStyle,
}: ChiffreCounterProps) => {
  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto h-full">
      <div className={containerClassName} style={containerStyle}>
        <Heading
          tag="h2"
          className={cn(
            "text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black",
            titleClassName
          )}
          style={titleStyle}
        >
          {title}
        </Heading>

        <div
          className={containerKeyFigureClassename}
          style={containerKeyfigureStyle || {}}
        >
          {keyFigures.map((figure, index) => (
            <KeyFigure
              key={index}
              value={figure.value}
              sign={figure.sign}
              duration={figure.duration}
              paragraphs={figure.paragraphs}
              className={cn(
                "font-bold lg:text-[28px] 2xl:text-[48px]",
                figure.className
              )}
              signClassename={cn("", figure.signClassename)}
              deviderClassename={cn("w-10 bg-white", figure.deviderClassename)}
              valueClassename={cn(
                "font-bold lg:text-[28px] 2xl:text-[48px]",
                figure.valueClassename
              )}
              paragraphClassename={cn(
                "text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]",
                figure.paragraphClassename
              )}
              style={figure.style}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChiffreCounter;
