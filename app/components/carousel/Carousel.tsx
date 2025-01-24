"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import useInView from "../../hook/useView";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "@/app/styles/carousel.css";
import { useMediaQuery } from "react-responsive";

interface Slide {
  image: string;
}

export interface TrendingSliderProps {
  slides: Slide[];
  title: string;
  descrip: string;
  clrTitle: string;
  descripTitles:string;
  slidesStyle: string;
  navigationClr: string;
  navigationBg: string;
  hiddenTitle: boolean;
}

const TrendingSlider: React.FC<TrendingSliderProps> = ({slides, title, descrip, clrTitle, descripTitles, slidesStyle, navigationClr, navigationBg, hiddenTitle}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);
  const handleNext = () => swiperRef.current?.swiper?.slideNext();
  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();

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
      <div className={`${hiddenTitle ? "hidden" : ""} w-full p-5 md:px-10 lg:px-20 h-full`}>
        <motion.div
          ref={ref}
          initial={initial}
          animate={animate}
          transition={{ duration: 0.8 }}
          className={`md:pb-3 xl:pb-6`}
        >
          <h2 className={`${clrTitle} text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black dark:text-white`}>
            {title}
          </h2>
          <h3 className={`${descripTitles} text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium dark:text-white `}>
            {descrip}
          </h3>
        </motion.div>
      </div>
      <div className="w-full h-full relative">
        {" "}
        {/* Ensure relative position */}
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
          breakpoints={{
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
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              {" "}
              {/* Match height */}
              <img
                src={slide.image}
                className={`${slidesStyle} w-full h-full object-cover shadow-[0_0_20px_0_rgba(0,0,0,0.2)]`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation Buttons */}
        <div
          onClick={(e) => {
            e.preventDefault();
            handlePrev();
          }}
          className={`absolute ${navigationBg} flex items-center justify-center z-40 top-1/2 -translate-y-1/2 left-5 xl:left-10 cursor-pointer select-none max-md:hidden transform transition-transform hover:scale-110 duration-500 hover:ease-in-out`}
        >
          <FaChevronLeft className={`${navigationClr} text-[40px] xl:text-[60px] 2xl:text-[60px] p-2 2xl:p-4 font-bold`} />
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            handleNext();
          }}
          className={`absolute ${navigationBg} flex items-center justify-center z-40 top-1/2 -translate-y-1/2 right-5 xl:right-10 cursor-pointer select-none max-md:hidden transform transition-transform hover:scale-110 duration-500 hover:ease-in-out`}
        >
          <FaChevronRight className={`${navigationClr} text-[40px] xl:text-[60px] 2xl:text-[60px] p-2 2xl:p-4 font-bold`} />
        </div>
      </div>
    </section>
  );
};

export default TrendingSlider;
