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
    <section className="flex items-center justify-center w-full padding-y relative">
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
          350: {
            slidesPerView: 1.25,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 0,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full py-8">
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
        className="bg-black bg-opacity-50 p-4 rounded-full flex items-center justify-center  z-[100] absolute left-14 cursor-pointer select-none max-lg:hidden"
      >
        <BsChevronCompactLeft className="text-[48px] text-white" />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.15 }}
        onClick={handleNext}
        className="bg-black bg-opacity-50 p-4 rounded-full flex items-center justify-center z-[100] absolute right-14 cursor-pointer select-none max-lg:hidden"
      >
        <BsChevronCompactRight className="text-[48px] text-white" />
      </motion.div>
    </section>
  );
};

export default TrendingSlider;
