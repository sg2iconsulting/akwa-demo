"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Slider = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col w-full xl:my-10 xl:gap-8 max-w-[2000px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full xl:px-10 2xl:px-20"
        >
          <h1
            className={`flex flex-col text-[20px] md:text-[32px] lg:text-[45px] xl:text-[65px] 2xl:text-[100px] font-poppins font-extrabold leading-4 md:leading-6 lg:leading-9 xl:leading-[50px] 2xl:leading-[80px] px-[28px] md:px-[38px] py-3 xl:px-[10px]`}
          >
            Espace <span className={` text-[#3FABDF]`}>Professionel</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full px-5"
        >
          <Swiper
            className="w-full"
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            loop={true}
          >
            <SwiperSlide>
              <div className="flex justify-center w-full mb-7 lg:mb-10">
                <div className="h-full w-full flex justify-center">
                  <img src={"/hero1.png"} alt={"hero 1"} className="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center w-full mb-7 lg:mb-10">
                <div className="h-full w-full flex justify-center">
                  <img src={"/hero1.png"} alt={"hero 1"} className="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center w-full mb-7 lg:mb-10">
                <div className="h-full w-full flex justify-center">
                  <img src={"/hero1.png"} alt={"hero 1"} className="" />
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
