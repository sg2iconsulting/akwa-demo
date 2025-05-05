import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import useInView from "@/hook/useView";
import { useMediaQuery } from "react-responsive";

const marques = [
  {
    id: 1,
    image: "/speedy/marques/marelli.png",
  },
  {
    id: 2,
    image: "/speedy/marques/bosch.png",
  },
  {
    id: 3,
    image: "/speedy/marques/goodYear.png",
  },
  {
    id: 4,
    image: "/speedy/marques/bridgestone.png",
  },
  {
    id: 5,
    image: "/speedy/marques/energizer.png",
  },
  {
    id: 6,
    image: "/speedy/marques/marelli.png",
  },
  {
    id: 7,
    image: "/speedy/marques/bosch.png",
  },
  {
    id: 8,
    image: "/speedy/marques/goodYear.png",
  },
  {
    id: 9,
    image: "/speedy/marques/bridgestone.png",
  },
  {
    id: 10,
    image: "/speedy/marques/energizer.png",
  },
];

const MarquesSlider = () => {
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
    <div className="font-poppins w-full max-w-[2000px] mx-auto h-full flex flex-col px-5 md:px-10 lg:px-20 gap-4 lg:gap-7 ">
      <div className="w-full h-full ">
        <motion.h2
          ref={ref}
          initial={initial}
          animate={animate}
          transition={{ duration: 0.8 }}
          className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black"
        >
          Nos marques
        </motion.h2>
      </div>
      <div className="w-full flex items-center h-full bg-white">
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
