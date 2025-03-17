import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import useInView from "@/app/hook/useView";
import { useMediaQuery } from "react-responsive";

interface Slide {
  id: number;
  image: string;
  url?: string;
}

export interface MarquesProps {
  marques: Slide[];
  title: string;
  titleTextColor: string;
  ContainerBackgroundColor: string;
}

const MarquesSlider = ({
  marques,
  title,
  titleTextColor,
  ContainerBackgroundColor,
}: MarquesProps) => {
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
    <div
      className="font-poppins w-full max-w-[2000px] mx-auto h-full flex flex-col px-5 md:px-10 lg:px-20 gap-4 lg:gap-70"
      style={{
        backgroundColor: ContainerBackgroundColor || undefined,
      }}
    >
      <div className="w-full h-full ">
        <motion.h2
          ref={ref}
          initial={initial}
          animate={animate}
          transition={{ duration: 0.8 }}
          className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black"
          style={{
            color: titleTextColor || undefined,
          }}
        >
          {title}
        </motion.h2>
      </div>
      <div className="w-full flex items-center h-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2000}
          className="w-full"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            426: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1124: {
              slidesPerView: 5,
              spaceBetween: 60,
            },
            1214: {
              slidesPerView: 5,
              spaceBetween: 80,
            },
          }}
        >
          {marques.map((promo) => (
            <SwiperSlide
              key={promo.id}
              className="flex h-full my-auto items-center justify-center w-full"
            >
              <div className="flex items-center justify-center w-32 md:w-48 lg:w-full lg:h-24 xl:h-36 2xl:h-48 px-3 md:px-3 lg:px-O xl:py-2 xl:p-0">
                <img
                  src={promo.image}
                  alt={"promo.name"}
                  className="h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MarquesSlider;
