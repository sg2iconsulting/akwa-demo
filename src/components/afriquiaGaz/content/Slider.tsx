"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/styles/swiperBullets.css";

const Slider = () => {
  return (
    <section className="w-full pt-2 xl:pt-10">
      <div className="flex flex-col w-full xl:gap-8 max-w-[2000px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full px-3 md:px-7 xl:px-10 2xl:px-20"
        >
          <h1
            className={`flex flex-col text-[20px] md:text-[32px] lg:text-[45px] xl:text-[65px] 2xl:text-[100px] font-poppins font-extrabold leading-5 md:leading-7 lg:leading-[40px] xl:leading-[60px] 2xl:leading-[90px] py-3`}
          >
            Espace <span className={` text-[#3FABDF]`}>Professionel</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full px-3 md:px-7 xl:px-10 2xl:px-20"
        >
          <Swiper
            className="w-full h-full "
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <div className="flex justify-center w-full mb-7 md:mb-11 xl:mb-20">
                <div className="h-full w-full flex justify-center">
                  <img
                    src={"/afriquiaGaz/slider1.png"}
                    alt={"hero 1"}
                    className=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center w-full mb-7 md:mb-11 xl:mb-20">
                <div className="h-full w-full flex justify-center">
                  <img
                    src={"/afriquiaGaz/slider1.png"}
                    alt={"hero 1"}
                    className=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center w-full mb-7 md:mb-11 xl:mb-20">
                <div className="h-full w-full flex justify-center">
                  <img
                    src={"/afriquiaGaz/slider1.png"}
                    alt={"hero 1"}
                    className=""
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Slider;
