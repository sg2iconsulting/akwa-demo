"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/app/styles/afriquiaswiperBullets.css";

const SliderV = () => {
  return (
    <section className="w-full h-full max-w-[2000px] mx-auto">
      <div className="w-full h-full px-5 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className=""
        >
          <Swiper
            className=""
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            speed={2000}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              319: {
                spaceBetween: 20,
              },
              640: {
                spaceBetween: 20,
              },
              768: {
                spaceBetween: 30,
              },
              1024: {
                spaceBetween: 40,
              },
              1440: {
                spaceBetween: 60,
              },
              1700: {
                spaceBetween: 80,
              },
              2000: {
                spaceBetween: 100,
              },
            }}
          >
            <SwiperSlide className="">
              <div className="w-[100%] h-full flex justify-center py-3 xl:py-5 mb-5 md:mb-8 lg:mb-12 xl:mb-20 2xl:mb-24 px-[2px] md:px-[4px] lg:px-[6px] xl:px-[8px]">
                <div
                  className="w-full h-[300px] md:h-[420px] lg:h-[460px] xl:h-[580px] 2xl:h-[725px] flex justify-center items-center bg-white rounded-[10px] shadow-lg dark:bg-[#1E1E1E] xl:rounded-[25px]"
                  style={{
                    boxShadow:
                      "0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="w-[100%] h-[90%] md:h-[85%] xl:h-[90%] px-5 flex flex-col lg:flex-row justify-between md:justify-center md:items-center gap-6 lg:gap-10 xl:gap-12 2xl:gap-16">
                    <div className="w-full lg:w-[45%] h-full flex flex-col md:justify-center order-2 lg:order-1 gap-2 md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-16">
                      <div className="px-3 text-[12px] md:text-[18px] lg:text-[28px] xl:text-[45px] 2xl:text-[60px] leading-[10px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px] 2xl:leading-[55px] font-poppins font-bold w-full">
                        {"Bouteille Nouvelle Génération Clic-On"}
                      </div>

                      <div className="px-3 text-[#494949] md:text-[14px] xl:text-[18px] 2xl:text-[22px] text-[10px] font-poppins font-medium w-full line-clamp-4 lg:line-clamp-6 ">
                        {
                          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }
                      </div>
                    </div>
                    <div className="w-full lg:w-[50%] h-full order-1 lg:order-2">
                      <iframe
                        className="w-full h-full rounded-[10px] 2xl:rounded-[25px]"
                        src={
                          "https://www.youtube.com/embed/HTMeFNhrnMs?si=JqlXF9DqSiu2aBKl"
                        }
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="w-[100%] h-full flex justify-center py-3 xl:py-5 mb-5 md:mb-8 lg:mb-12 xl:mb-20 2xl:mb-24 px-[2px] md:px-[4px] lg:px-[6px] xl:px-[8px]">
                <div
                  className="w-full h-[300px] md:h-[420px] lg:h-[460px] xl:h-[580px] 2xl:h-[725px] flex justify-center items-center bg-white rounded-[10px] shadow-lg dark:bg-[#1E1E1E] xl:rounded-[25px]"
                  style={{
                    boxShadow:
                      "0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="w-[100%] h-[90%] md:h-[85%] xl:h-[90%] px-5 flex flex-col lg:flex-row justify-between md:justify-center md:items-center gap-6 lg:gap-10 xl:gap-12 2xl:gap-16">
                    <div className="w-full lg:w-[45%] h-full flex flex-col md:justify-center order-2 lg:order-1 gap-2 md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-16">
                      <div className="px-3 text-[12px] md:text-[18px] lg:text-[28px] xl:text-[45px] 2xl:text-[60px] leading-[10px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px] 2xl:leading-[55px] font-poppins font-bold w-full">
                        {"Conseils pour protéger ta famille"}
                      </div>

                      <div className="px-3 text-[#494949] md:text-[14px] xl:text-[18px] 2xl:text-[22px] text-[10px] font-poppins font-medium w-full line-clamp-4 lg:line-clamp-6 ">
                        {
                          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
                        }
                      </div>
                    </div>
                    <div className="w-full lg:w-[50%] h-full order-1 lg:order-2">
                      <iframe
                        className="w-full h-full rounded-[10px] 2xl:rounded-[25px]"
                        src={
                          "https://www.youtube.com/embed/SlMqBIkuIRU?si=vf40_-Lbn0gU0H3T"
                        }
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="w-[100%] h-full flex justify-center py-3 xl:py-5 mb-5 md:mb-8 lg:mb-12 xl:mb-20 2xl:mb-24 px-[2px] md:px-[4px] lg:px-[6px] xl:px-[8px]">
                <div
                  className="w-full h-[300px] md:h-[420px] lg:h-[460px] xl:h-[580px] 2xl:h-[725px] flex justify-center items-center bg-white rounded-[10px] shadow-lg dark:bg-[#1E1E1E] xl:rounded-[25px]"
                  style={{
                    boxShadow:
                      "0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="w-[100%] h-[90%] md:h-[85%] xl:h-[90%] px-5 flex flex-col lg:flex-row justify-between md:justify-center md:items-center gap-6 lg:gap-10 xl:gap-12 2xl:gap-16">
                    <div className="w-full lg:w-[45%] h-full flex flex-col md:justify-center order-2 lg:order-1 gap-2 md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-16">
                      <div className="px-3 text-[12px] md:text-[18px] lg:text-[28px] xl:text-[45px] 2xl:text-[60px] leading-[10px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px] 2xl:leading-[55px] font-poppins font-bold w-full">
                        {"Système de branchement Clic-On"}
                      </div>

                      <div className="px-3 text-[#494949] md:text-[14px] xl:text-[18px] 2xl:text-[22px] text-[10px] font-poppins font-medium w-full line-clamp-4 lg:line-clamp-6 ">
                        {
                          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum."
                        }
                      </div>
                    </div>
                    <div className="w-full lg:w-[50%] h-full order-1 lg:order-2">
                      <iframe
                        className="w-full h-full rounded-[10px] 2xl:rounded-[25px]"
                        src={
                          "https://www.youtube.com/embed/9Xp5Nfd4OyI?si=D1GYq8Fl2Bn0-Af2"
                        }
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default SliderV;
