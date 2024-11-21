"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Posts = () => {
  return (
    <section className="">
      <div className="flex px-10 flex-col md:gap-3 mt-7 md:mt-0 max-w-[1900px] mx-auto">
        <div className=" pb-0 md:pt-16 lg:pb-5 xl:pl-2">
          <h1 className="text-2xl md:text-[36px] xl:text-[42px] 2xl:text-[60px] font-poppins font-extrabold w-full h-full text-center xl:text-start">
            Derniers Postes
          </h1>
        </div>

        <div className="mb-3 md:mb-0">
          <Swiper
            className={`w-full md:h-[350px] lg:h-[400px] xl:h-[550px]`}
            navigation={false}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              319: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
              1536: {
                slidesPerView: 4,
              },
            }}
          >
            <div className="md:w-[95%] md:h-[100%]">
              <div>
                <SwiperSlide className="py-10 px-6 w-full h-full flex items-center justify-center mb-7 lg:mb-10 2xl:mb-0">
                  <motion.div
                    className="xl:h-full xl:w-full h-[195px] w-[195px] cursor-pointer lg:h-[250px] lg:w-[250px] m-auto justify-center items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src="/posts/post1.png" alt="" className="m-auto" />
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide className="py-10 px-6 w-full h-full flex items-center justify-center mb-7 lg:mb-10 2xl:mb-0">
                  <motion.div
                    className="xl:h-full xl:w-full h-[195px] w-[195px] cursor-pointer lg:h-[250px] lg:w-[250px] m-auto justify-center items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src="/posts/post2.png" alt="" className="m-auto" />
                  </motion.div>
                </SwiperSlide>

                <SwiperSlide className="py-10 px-6 w-full h-full flex items-center justify-center mb-7 lg:mb-10 2xl:mb-0">
                  <motion.div
                    className="xl:h-full xl:w-full h-[195px] w-[195px] cursor-pointer lg:h-[250px] lg:w-[250px] m-auto justify-center items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src="/posts/post3.png" alt="" className="m-auto" />
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide className="py-10 px-6 w-full h-full flex items-center justify-center mb-7 lg:mb-10 2xl:mb-0">
                  <motion.div
                    className="xl:h-full xl:w-full h-[195px] w-[195px] cursor-pointer lg:h-[250px] lg:w-[250px] m-auto justify-center items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src="/posts/post4.png" alt="" className="m-auto" />
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide className="py-10 px-6 w-full h-full flex items-center justify-center mb-7 lg:mb-10 2xl:mb-0">
                  <motion.div
                    className="xl:h-full xl:w-full h-[195px] w-[195px] cursor-pointer lg:h-[250px] lg:w-[250px] m-auto justify-center items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src="/posts/post1.png" alt="" className="m-auto" />
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide className="py-10 px-6 w-full h-full flex items-center justify-center mb-7 lg:mb-10 2xl:mb-0">
                  <motion.div
                    className="xl:h-full xl:w-full h-[195px] w-[195px] cursor-pointer lg:h-[250px] lg:w-[250px] m-auto justify-center items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src="/posts/post2.png" alt="" className="m-auto" />
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
