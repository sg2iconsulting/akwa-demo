"use client";
import React from "react";
import Item from "../Item/Item";
import { motion } from "framer-motion";
import useInView from "@/app/hook/useView";
import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";

interface ItemsProps {
  imgSrc: string;
  title: string;
  descrip?: string;
  date: string;
  url: string;
}

export interface ActProps {
  items: ItemsProps[];
  backgroundItemColor: string;
  backgroundButtonColor: string;
  titleTextColor: string;
  buttonTextColor: string;
  label: string;
}

const Actuality = ({
  backgroundItemColor,
  backgroundButtonColor,
  titleTextColor,
  buttonTextColor,
  label,
  items,
}: ActProps) => {
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
    <section className="w-full ">
      <div className="w-full h-full max-w-[2000px] mx-auto flex flex-col gap-4 lg:gap-7 px-5 md:px-10 lg:px-20">
        <motion.h2
          ref={ref}
          initial={initial}
          animate={animate}
          transition={{ duration: 0.8 }}
          style={{
            color: titleTextColor || undefined,
          }}
          className={`font-black w-full text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-poppins dark:text-white`}
        >
          Actualités
        </motion.h2>
        <div className=" flex flex-col xl:flex-row mx-auto xl:justify-between items-center w-full gap-3 xl:gap-0">
          <div className="w-full xl:w-[63%] xl:h-[695px] flex flex-col rounded-[20px] overflow-hidden">
            <div className="w-full rounded-t-[20px] overflow-hidden">
              <img
                src={items[0].imgSrc}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div
              style={{
                backgroundColor: backgroundItemColor || undefined,
                color: buttonTextColor || undefined,
              }}
              className={`w-full rounded-b-[20px] flex flex-col justify-center gap-2 md:gap-4 p-6 md:px-10 lg:px-16`}
            >
              <p className="text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                {items[0].date}
              </p>
              <p className="text-[15px] md:text-[23px] lg:text-2xl xl:text-[28px] 2xl:text-[36px] font-bold">
                {items[0].title}
              </p>
              <p className="text-[10px] md:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] font-medium line-clamp-2">
                {items[0].descrip}
              </p>
              <MotionButton
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                label={label}
                backgroundColor={backgroundButtonColor}
                textColor={buttonTextColor}
                onClick={() => console.log("Button clicked!")}
              />
            </div>
          </div>
          <div className="w-full xl:w-[35%] flex flex-col justify-between gap-2 xl:gap-4">
            <Item
              imgSrc={items[1].imgSrc}
              title={items[1].title}
              date={items[1].date}
              url={items[1].url}
              containerBackgroundColor="white"
              containerBorderStyle="1px solid #F1F1F1"
              textColor="black"
            />
            <Item
              imgSrc={items[2].imgSrc}
              title={items[2].title}
              date={items[2].date}
              url={items[2].url}
              containerBackgroundColor="white"
              containerBorderStyle="1px solid #F1F1F1"
              textColor="black"
            />
            <Item
              imgSrc={items[3].imgSrc}
              title={items[3].title}
              date={items[3].date}
              url={items[3].url}
              containerBackgroundColor="white"
              containerBorderStyle="1px solid #F1F1F1"
              textColor="black"
            />
            <Item
              imgSrc={items[4].imgSrc}
              title={items[4].title}
              date={items[4].date}
              url={items[4].url}
              containerBackgroundColor="white"
              containerBorderStyle="1px solid #F1F1F1"
              textColor="black"
            />
            <Item
              imgSrc={items[5].imgSrc}
              title={items[5].title}
              date={items[5].date}
              url={items[5].url}
              containerBackgroundColor="white"
              containerBorderStyle="1px solid #F1F1F1"
              textColor="black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actuality;
