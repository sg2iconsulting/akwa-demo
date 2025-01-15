"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "@/app/styles/afriquiaswiperBullets.css"

const Service = () => {
  return (
    <section className="w-full h-full max-w-[2000px] mx-auto">
      <div className="w-full h-full px-5 md:px-10 lg:px-20 ">
        <div className="flex justify-between items-center w-full h-full">
          <Swiper
            className={`w-full h-full`}
            navigation={false}
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            speed={2500}
            loop
            autoplay={{ delay: 2000, disableOnInteraction: false}}
            breakpoints={{
              319: {
                slidesPerView: 2.3,
                spaceBetween: 10
              },
              518: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              556: {
                slidesPerView: 3.2,
              },
              725: {
                slidesPerView: 3.5,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              1000: {
                slidesPerView: 5,
                spaceBetween: 10
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30
              },
            }}
          >
            <SwiperSlide className="py-3 xl:py-5 ">
              <motion.div
                className="w-full h-full mx-auto cursor-pointer rounded-[15px] bg-cover bg-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full relative ">
                  <img
                    className="object-cover  w-full h-full rounded-[20px]"
                    src="/afriquiaGaz/service/produit.png"
                  ></img>
                  <h2 className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] font-poppins text-start font-bold text-white text-[14px] md:text-[18px] xl:text-[28px]">
                    Nos produits
                  </h2>
                </div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="py-3 xl:py-5 ">
              <motion.div
                className="w-full mx-auto cursor-pointer rounded-[15px] bg-cover bg-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full relative   ">
                  <img
                    className="object-cover  w-full h-full rounded-[20px]"
                    src="/afriquiaGaz/service/solution.png"
                  ></img>
                  <h2 className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] font-poppins text-start font-bold text-white text-[14px] md:text-[18px] xl:text-[28px]">
                    Nos solutions
                  </h2>
                </div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="py-3 xl:py-5 ">
              <motion.div
                className="w-full mx-auto cursor-pointer rounded-[15px] bg-cover bg-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full relative  ">
                  <img
                    className="object-cover  w-full h-full rounded-[20px]"
                    src="/afriquiaGaz/service/conseil.png"
                  ></img>
                  <h2 className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] font-poppins text-start font-bold text-white text-[14px] md:text-[18px] xl:text-[28px]">
                    Conseil& Assistance
                  </h2>
                </div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="py-3 xl:py-5 ">
              <motion.div
                className="w-full mx-auto cursor-pointer rounded-[15px] bg-cover bg-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full relative  ">
                  <img
                    className="object-cover  w-full h-full rounded-[20px]"
                    src="/afriquiaGaz/service/efficacite.png"
                  ></img>
                  <h2 className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] font-poppins text-start font-bold text-white text-[14px] md:text-[18px] xl:text-[28px]">
                    Éfficacité Énergétique
                  </h2>
                </div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="py-3 xl:py-5 ">
              <motion.div
                className=" w-full mx-auto cursor-pointer rounded-[15px] bg-cover bg-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full relative  ">
                  <img
                    className="object-cover  w-full h-full rounded-[20px]"
                    src="/afriquiaGaz/service/faq.png"
                  ></img>
                  <h2 className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] font-poppins text-start font-bold text-white text-[14px] md:text-[18px] xl:text-[28px]">
                    FAQ
                  </h2>
                </div>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Service;
