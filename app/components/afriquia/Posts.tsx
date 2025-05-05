"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "@/app/styles/afriquiaswiperBullets.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useInView from "@/hook/useView";
import { useMediaQuery } from "react-responsive";

export interface PostProp {
  pro: boolean;
}

const Posts = ({ pro }: PostProp) => {
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
    <section className="w-full h-full max-w-[2000px] mx-auto">
      <div className="flex flex-col w-full h-full px-5 md:px-10 lg:px-20">
        <div className="">
          <motion.h2
            ref={ref}
            initial={initial}
            animate={animate}
            transition={{ duration: 0.8 }}
            className={`font-black text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] w-full h-full text-start`}
          >
            {pro ? "Derniers Posts LinkedIn" : "Derniers Posts"}
          </motion.h2>
        </div>

        <div className="">
          <Swiper
            className={`w-full flex justify-between`}
            navigation={false}
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            speed={2000}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              319: {
                slidesPerView: 2.3,
                spaceBetween: 10,
              },
              518: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            <div className="">
              <div>
                <SwiperSlide className="py-3 xl:py-5 w-full h-full flex items-center justify-between">
                  <motion.div
                    className="cursor-pointer relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/afriquiaGaz/posts/post1.png"
                      alt=""
                      className="m-auto"
                    />
                    <div className="absolute inset-0 flex items-end px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-7 2xl:px-8 2xl:py-8 text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-[60px] h-[20px] sm:w-[80px] md:w-[90px] md:h-[28px] lg:w-[100px] lg:h-[30px] xl:w-[110px] xl:h-[33px] 2xl:w-[118px] 2xl:h-[36px] bg-[#A2BB51] rounded-full text-white font-bold"
                      >
                        voir le poste
                      </motion.button>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide className="py-3 xl:py-5 w-full h-full flex items-center justify-between">
                  <motion.div
                    className="cursor-pointer relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/afriquiaGaz/posts/post2.png"
                      alt=""
                      className="m-auto"
                    />
                    <div className="absolute inset-0 flex items-end px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-7 2xl:px-8 2xl:py-8 text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-[60px] h-[20px] sm:w-[80px] md:w-[90px] md:h-[28px] lg:w-[100px] lg:h-[30px] xl:w-[110px] xl:h-[33px] 2xl:w-[118px] 2xl:h-[36px] bg-[#A2BB51] rounded-full text-white font-bold"
                      >
                        voir le poste
                      </motion.button>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide className="py-3 xl:py-5 w-full h-full flex items-center justify-between">
                  <motion.div
                    className="cursor-pointer relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/afriquiaGaz/posts/post3.png"
                      alt=""
                      className="m-auto"
                    />
                    <div className="absolute inset-0 flex items-end px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-7 2xl:px-8 2xl:py-8 text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-[60px] h-[20px] sm:w-[80px] md:w-[90px] md:h-[28px] lg:w-[100px] lg:h-[30px] xl:w-[110px] xl:h-[33px] 2xl:w-[118px] 2xl:h-[36px] bg-[#A2BB51] rounded-full text-white font-bold"
                      >
                        voir le poste
                      </motion.button>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide className="py-3 xl:py-5 w-full h-full flex items-center justify-between">
                  <motion.div
                    className="cursor-pointer relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/afriquiaGaz/posts/post4.png"
                      alt=""
                      className="m-auto"
                    />
                    <div className="absolute inset-0 flex items-end px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-7 2xl:px-8 2xl:py-8 text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-[60px] h-[20px] sm:w-[80px] md:w-[90px] md:h-[28px] lg:w-[100px] lg:h-[30px] xl:w-[110px] xl:h-[33px] 2xl:w-[118px] 2xl:h-[36px] bg-[#A2BB51] rounded-full text-white font-bold"
                      >
                        voir le poste
                      </motion.button>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide className="py-3 xl:py-5 w-full h-full flex items-center justify-between">
                  <motion.div
                    className="cursor-pointer relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/afriquiaGaz/posts/post1.png"
                      alt=""
                      className="m-auto"
                    />
                    <div className="absolute inset-0 flex items-end px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-7 2xl:px-8 2xl:py-8 text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-[60px] h-[20px] sm:w-[80px] md:w-[90px] md:h-[28px] lg:w-[100px] lg:h-[30px] xl:w-[110px] xl:h-[33px] 2xl:w-[118px] 2xl:h-[36px] bg-[#A2BB51] rounded-full text-white font-bold"
                      >
                        voir le poste
                      </motion.button>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide className="py-3 xl:py-5 w-full h-full flex items-center justify-between">
                  <motion.div
                    className="cursor-pointer relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/afriquiaGaz/posts/post2.png"
                      alt=""
                      className="m-auto"
                    />
                    <div className="absolute inset-0 flex items-end px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-7 2xl:px-8 2xl:py-8 text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-[60px] h-[20px] sm:w-[80px] md:w-[90px] md:h-[28px] lg:w-[100px] lg:h-[30px] xl:w-[110px] xl:h-[33px] 2xl:w-[118px] 2xl:h-[36px] bg-[#A2BB51] rounded-full text-white font-bold"
                      >
                        voir le poste
                      </motion.button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Posts;
