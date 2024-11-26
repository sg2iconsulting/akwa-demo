"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/styles/swiperBullets.css";

const SliderV = () => {
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
            Espace <span className={` text-[#387CCC]`}>Particulier</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className=""
        >
          <Swiper
            className=""
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            <SwiperSlide className="">
              <div className="w-[100%] h-[330px] md:h-[480px] lg:h-[460px] xl:h-[580px] flex justify-center px-3 md:px-7 xl:px-10 2xl:px-20">
                <div className="w-full h-[300px] md:h-[430px] lg:h-[400px] xl:h-[509px] flex justify-center items-center bg-white rounded-[20px] dark:border dark:border-[#373737] dark:bg-[#1E1E1E] xl:rounded-[50px] shadow-slider-shadow">
                  <div className="w-[100%] h-[90%] md:h-[85%] xl:h-[90%] px-5 flex flex-col lg:flex-row justify-between md:justify-center md:items-center gap-5 md:gap-2">
                    <div className="w-full lg:w-1/2 h-full flex flex-col md:justify-center order-2 lg:order-1 gap-2 lg:gap-3">
                      <div className="px-3 text-[12px] md:text-[18px] lg:text-[20px] xl:text-[30px] 2xl:text-[40px] font-poppins font-bold w-full md:w-3/4">
                        {"Bouteille Nouvelle Génération Clic-On"}
                      </div>

                      <div className="px-3 md:text-[15px] xl:text-[18px] 2xl:text-[24px] text-[10px] font-poppins font-medium w-full line-clamp-4 lg:line-clamp-6 ">
                        {
                          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }
                      </div>
                    </div>
                    <div className="w-full lg:w-[60%] h-full order-1 lg:order-2">
                      <iframe
                        className="w-full h-full rounded-[15px]"
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
              <div className="w-[100%] h-[330px] md:h-[480px] lg:h-[460px] xl:h-[580px] flex justify-center px-3 md:px-7 xl:px-10 2xl:px-20">
                <div className="w-full h-[300px] md:h-[430px] lg:h-[400px] xl:h-[509px] flex justify-center items-center bg-white rounded-[20px] dark:border dark:border-[#373737] dark:bg-[#1E1E1E] xl:rounded-[50px] shadow-slider-shadow">
                  <div className="w-[100%] h-[90%] md:h-[85%] xl:h-[90%] px-5 flex flex-col lg:flex-row justify-between md:justify-center md:items-center gap-5 md:gap-2">
                    <div className="w-full lg:w-1/2 h-full flex flex-col md:justify-center order-2 lg:order-1 gap-2 lg:gap-3">
                      <div className="px-3 text-[12px] md:text-[18px] lg:text-[20px] xl:text-[30px] 2xl:text-[40px] font-poppins font-bold w-full md:w-3/4">
                        {"Conseils pour protéger ta famille"}
                      </div>

                      <div className="px-3 md:text-[15px] xl:text-[18px] 2xl:text-[24px] text-[10px] font-poppins font-medium w-full line-clamp-4 lg:line-clamp-6 ">
                        {
                          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
                        }
                      </div>
                    </div>
                    <div className="w-full lg:w-[60%] h-full order-1 lg:order-2">
                      <iframe
                        className="w-full h-full rounded-[15px]"
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
              <div className="w-[100%] h-[330px] md:h-[480px] lg:h-[460px] xl:h-[580px] flex justify-center px-3 md:px-7 xl:px-10 2xl:px-20 ">
                <div className="w-full h-[300px] md:h-[430px] lg:h-[400px] xl:h-[509px] flex justify-center items-center bg-white rounded-[20px] dark:border dark:border-[#373737] dark:bg-[#1E1E1E] xl:rounded-[50px] shadow-slider-shadow">
                  <div className="w-[100%] h-[90%] md:h-[85%] xl:h-[90%] px-5 flex flex-col lg:flex-row justify-between md:justify-center md:items-center gap-5 md:gap-2">
                    <div className="w-full lg:w-1/2 h-full flex flex-col md:justify-center order-2 lg:order-1 gap-2 lg:gap-3 ">
                      <div className="px-3 text-[12px] md:text-[18px] lg:text-[20px] xl:text-[30px] 2xl:text-[40px] font-poppins font-bold w-full md:w-3/4">
                        {"Système de branchement Clic-On"}
                      </div>

                      <div className="px-3 md:text-[15px] xl:text-[18px] 2xl:text-[24px] text-[10px] font-poppins font-medium w-full line-clamp-4 lg:line-clamp-6 ">
                        {
                          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum."
                        }
                      </div>
                    </div>
                    <div className="w-full lg:w-[60%] h-full order-1 lg:order-2">
                      <iframe
                        className="w-full h-full rounded-[15px]"
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
