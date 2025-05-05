"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import useInView from "@/hook/useView";
import { useMediaQuery } from "react-responsive";

const posts = [
  {
    id: 1,
    image: "/maghreb/posts/image-1.png",
  },
  {
    id: 2,
    image: "/maghreb/posts/image-2.png",
  },
  {
    id: 3,
    image: "/maghreb/posts/image-3.png",
  },
  {
    id: 4,
    image: "/maghreb/posts/image-4.png",
  },
  {
    id: 5,
    image: "/maghreb/posts/image-5.png",
  },
  {
    id: 6,
    image: "/maghreb/posts/image-1.png",
  },
  {
    id: 7,
    image: "/maghreb/posts/image-2.png",
  },
  {
    id: 8,
    image: "/maghreb/posts/image-3.png",
  },
  {
    id: 9,
    image: "/maghreb/posts/image-4.png",
  },
  {
    id: 10,
    image: "/maghreb/posts/image-5.png",
  },
];

const LastPosts = () => {
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
          className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black text-[#0085C3] dark:text-white"
        >
          Derniers Postes
        </motion.h2>
      </div>
      <div className="w-full h-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={4.5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2000}
          className="w-full"
          breakpoints={{
            320: {
              slidesPerView: 2.5,
              spaceBetween: 0,
            },
            426: {
              slidesPerView: 3.5,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4.4,
              spaceBetween: 0,
            },
            1124: {
              slidesPerView: 4.5,
              spaceBetween: 0,
            },
            1214: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide
              key={post.id}
              className="flex justify-start h-full my-auto w-full text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] font-bold"
            >
              <div className="w-full flex px-3 md:px-3 lg:px-O xl:py-2 xl:p-0 relative">
                <img
                  src={post.image}
                  alt={""}
                  className="h-full object-contain"
                />
                <div className="absolute inset-0 flex items-end px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-5 lg:py-4 xl:px-3 xl:py-7 2xl:px-5 2xl:py-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-[60px] h-[20px] sm:w-[80px] md:w-[90px] md:h-[28px] lg:w-[100px] lg:h-[30px] xl:w-[110px] xl:h-[33px] 2xl:w-[118px] 2xl:h-[36px] bg-[#0085C3] rounded-full text-white"
                  >
                    voir le poste
                  </motion.button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LastPosts;
