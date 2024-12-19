import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import PromoCard from "./PromoCard";
import "@/app/styles/promosBullets.css";
import useInView from "@/app/hook/useView";
import { useMediaQuery } from "react-responsive";

const promoCards = [
  {
    id: 1,
    title: "Promo 1",
    description: "Description 1",
    image: "/promo1.jpg",
  },
  {
    id: 2,
    title: "Promo 2",
    description: "Description 2",
    image: "/promo2.jpg",
  },
  {
    id: 3,
    title: "Promo 3",
    description: "Description 3",
    image: "/promo3.jpg",
  },
  {
    id: 4,
    title: "Promo 4",
    description: "Description 4",
    image: "/promo4.jpg",
  },
  {
    id: 5,
    title: "Promo 5",
    description: "Description 5",
    image: "/promo5.jpg",
  },
];

const PromosSlider = () => {
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
    <div className="font-poppins w-full max-w-[2000px] mx-auto h-full">
      <div className="w-full h-full flex flex-col px-5 md:px-10 lg:px-20">
        <motion.h2
          ref={ref}
          initial={initial}
          animate={animate}
          transition={{ duration: 0.8 }}
          className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black xl:mb-7"
        >
          Promos du moment
        </motion.h2>
      </div>
      <div className="w-full p-5 md:px-10 lg:px-20 h-full">
        <Swiper
          // slidesPerView={2.5}
          spaceBetween={10}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView:1,
            },
            890: {
              slidesPerView:1.1,
            },
            1024: {
              slidesPerView: 1.2,
              spaceBetween: 0,
            },
            1124: {
              slidesPerView: 1.3,
              spaceBetween: 0,
            },
            1214: {
              slidesPerView: 1.4,
              spaceBetween: 0,
            },
            1310: {
              slidesPerView: 1.6,
              spaceBetween: 0,
            },
            1440: {
              slidesPerView: 1.8,
              spaceBetween: 0,
            },
            1596: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1780: {
              slidesPerView: 2.3,
              spaceBetween: 0,
            },
            1900: {
              slidesPerView: 2.5,
              spaceBetween: 0,
            },
          }}
        >
          {promoCards.map((promo) => (
            <SwiperSlide key={promo.id} className="mb-16">
              <div className="p-1">
                <PromoCard />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PromosSlider;
