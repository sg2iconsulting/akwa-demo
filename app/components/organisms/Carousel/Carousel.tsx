"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import useInView from "../../../hook/useView";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import Heading from "../../atoms/Heading/Heading";
import Image from "../../atoms/Image/Image";
import Icon from "../../atoms/Icon/Icon";
import { IconType } from "react-icons";
import { cn } from "@/app/utils/cn";

interface Slide {
  image: string;
}

export interface CarouselProps {
  slides: Slide[];
  slideClassename?: string;
  leftChevronIcon?: IconType;
  leftChevronIconClassename?: string;
  rightChevronIcon?: IconType;
  rightChevronIconClassename?: string;
  title: string;
  titleClassename?: string;
  description: string;
  descriptionClassename?: string;
  titleTextColor: string;
  descriptionTextColor: string;
  slidesStyle?: React.CSSProperties;
  navigationStyle?: React.CSSProperties;
  navigationIconColor?: string;
  hiddenTitle?: "block" | "none";
  breakpoints?: {
    [width: number]: {
      slidesPerView: number;
      spaceBetween: number;
    };
  };
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  title,
  description,
  slideClassename,
  leftChevronIcon = FaChevronLeft,
  leftChevronIconClassename,
  rightChevronIcon = FaChevronRight,
  rightChevronIconClassename,
  titleClassename,
  descriptionClassename,
  titleTextColor,
  descriptionTextColor,
  slidesStyle,
  navigationIconColor,
  navigationStyle,
  hiddenTitle,
  breakpoints = {
    319: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    426: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 0,
    },
  },
}) => {
  const swiperRef = useRef<any>(null);
  const handleNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };
  const handlePrev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

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

  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto h-full">
      <div
        style={{
          display: hiddenTitle || "block",
        }}
        className={`w-full px-5 md:px-10 lg:px-20 h-full`}
      >
        <motion.div
          ref={ref}
          initial={initial}
          animate={animate}
          transition={{ duration: 0.8 }}
          className={`md:pb-3 xl:pb-6`}
        >
          <Heading
            tag="h2"
            className={cn(
              "text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black dark:text-white",
              titleClassename
            )}
            style={{ color: titleTextColor }}
          >
            {title}
          </Heading>
          <Heading
            tag="h3"
            className={cn(
              "text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium dark:text-white",
              descriptionClassename
            )}
            style={{ color: descriptionTextColor }}
          >
            {description}
          </Heading>
        </motion.div>
      </div>
      <div className="w-full h-full relative mt-6 lg:mt-10">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={800}
          slidesPerView="auto"
          coverflowEffect={{
            slideShadows: false,
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
          }}
          className="h-full"
          breakpoints={breakpoints}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <Image
                src={slide.image}
                imageClassename={cn(
                  "w-full h-full object-cover shadow-[0_0_20px_0_rgba(0,0,0,0.2)]",
                  slideClassename
                )}
                imageStyle={slidesStyle}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation Buttons */}
        <div
          onClick={handlePrev}
          style={navigationStyle}
          className={`absolute flex items-center justify-center z-40 top-1/2 -translate-y-1/2 left-5 xl:left-10 cursor-pointer select-none max-md:hidden transform transition-transform hover:scale-110 duration-500 hover:ease-in-out`}
        >
          <Icon
            icon={leftChevronIcon || FaChevronLeft}
            iconSize={30}
            iconColor={navigationIconColor}
            iconClassename={cn(
              "xl:text-[50px] 2xl:text-[70px] font-bold",
              leftChevronIconClassename
            )}
          />
        </div>
        <div
          onClick={handleNext}
          style={navigationStyle}
          className={`absolute flex items-center justify-center z-40 top-1/2 -translate-y-1/2 right-5 xl:right-10 cursor-pointer select-none max-md:hidden transform transition-transform hover:scale-110 duration-500 hover:ease-in-out`}
        >
          <Icon
            icon={rightChevronIcon || FaChevronRight}
            iconSize={30}
            iconColor={navigationIconColor}
            iconClassename={cn(
              "xl:text-[50px] 2xl:text-[70px] font-bold",
              rightChevronIconClassename
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
