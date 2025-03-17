"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoCallSharp } from "react-icons/io5";
import useInView from "@/app/hook/useView";
import { useMediaQuery } from "react-responsive";

export interface ContactBannerProps {
  imageBackgroundSrc: string;
  imageBackgroundClassename: string;
  title: string;
  titleTextColor: string;
  description: string;
  descriptionTextColor: string;
  numberPhone: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  roundedButton: string;
}

const Contact = ({
  imageBackgroundClassename = "object-cover w-full h-full bg-center rounded-[15px]",
  imageBackgroundSrc = "/maghreb/contactBanner.png",
  title,
  titleTextColor = "white",
  description,
  descriptionTextColor = "white",
  numberPhone,
  buttonBackgroundColor = "#0085C3",
  buttonTextColor,
  roundedButton,
}: ContactBannerProps) => {
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
    <section className="font-poppins w-full max-w-[2000px] mx-auto mt-5">
      <div className="w-full sm:h-full px-5 md:px-10 lg:px-20 relative h-[200px]  ">
        <img src={imageBackgroundSrc} className={imageBackgroundClassename} />
        <div className="absolute inset-0 flex flex-col justify-center gap-y-4 md:gap-y-8 lg:gap-y-8 xl:gap-y-12 2xl:gap-y-16 3xl:gap-y-20 px-5 md:px-10 2xl:px-20">
          <div className="leading-tight px-5 md:px-10 lg:px-20 xl:px-28 flex flex-col gap-2">
            <div>
              <motion.h2
                ref={ref}
                initial={initial}
                animate={animate}
                transition={{ duration: 0.8 }}
                style={{
                  color: titleTextColor,
                }}
                className="text-[16px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] 3xl:text-[60px] font-bold"
              >
                {title}
              </motion.h2>
            </div>
            <div>
              <p
                style={{
                  color: descriptionTextColor,
                }}
                className="font-medium text-[10px] md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px] 3xl:text-[36px]"
              >
                {description}
              </p>
            </div>
          </div>
          <div className="px-5 md:px-10 lg:px-20 xl:px-28">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: buttonBackgroundColor,
                color: buttonTextColor,
                borderRadius: roundedButton,
              }}
              className="flex justify-center items-center gap-2 xl:gap-4 w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8 lg:h-[35px] lg:w-[150px] xl:h-[50px] xl:w-[200px] 2xl:w-[290px] 2xl:h-[67px] rounded-full cursor-pointer text-[6px] sm:text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold"
            >
              <div>
                <IoCallSharp />
              </div>
              <p>{numberPhone}</p>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
