"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Navigation } from "swiper/modules";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { motion } from "framer-motion";

interface Slide {
  image: string;
}

const slides: Slide[] = [
  {
    image: "/akwagroup/images/carburant.png",
  },
  {
    image: "/akwagroup/images/dev.png",
  },
  {
    image: "/akwagroup/images/fluides.png",
  },
  {
    image: "/akwagroup/images/gaz.png",
  },
  {
    image: "/akwagroup/images/transition.png",
  },
  {
    image: "/akwagroup/images/carburant.png",
  },
  {
    image: "/akwagroup/images/dev.png",
  },
  {
    image: "/akwagroup/images/fluides.png",
  },
  {
    image: "/akwagroup/images/gaz.png",
  },
  {
    image: "/akwagroup/images/transition.png",
  },
];

const TrendingSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const handleNext = () => swiperRef.current?.swiper?.slideNext();
  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();
  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto h-full">
      <div className="w-full p-5 md:px-10 lg:px-20 h-full">
        <div className="flex flex-col">
          <h1 className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black">
            6 Pôles
          </h1>
          <h3 className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium">
            diversifiés pour apporter des réponses globales
          </h3>
        </div>
      </div>
      <div className="w-full px-5 md:px-10 lg:px-20 h-full relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          coverflowEffect={{
            slideShadows: false,
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{
            319: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 0,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="w-full">
              <img
                src={slide.image}
                className="rounded-2xl w-full  h-full object-cover shadow-[0_0_20px_0_rgba(0,0,0,0.2)]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div
          whileHover={{ scale: 1.15 }}
          onClick={handlePrev}
          className="bg-black bg-opacity-50 p-4 rounded-full flex items-center justify-center z-40 top-1/2 -translate-y-1/2 absolute left-24 xl:left-28 2xl:left-36 cursor-pointer select-none max-lg:hidden"
        >
          <BsChevronCompactLeft className="text-[20px] xl:text-[32px] 2xl:text-[48px] text-white" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.15 }}
          onClick={handleNext}
          className="bg-black bg-opacity-50 p-4 rounded-full flex items-center justify-center z-40 top-1/2 -translate-y-1/2 absolute right-24 xl:right-28 2xl:right-36 cursor-pointer select-none max-lg:hidden"
        >
          <BsChevronCompactRight className="text-[20px] xl:text-[32px] 2xl:text-[48px] text-white" />
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingSlider;
