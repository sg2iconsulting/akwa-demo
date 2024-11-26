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
    <section className="w-full mt-6">
      <div className="flex flex-col max-w-[2000px] mx-auto w-full gap-2 px-3 md:px-7 xl:px-10 2xl:px-20">
        <div className="">
          <h2 className="text-[22px] md:text-[28px] xl:text-[42px] 2xl:text-[60px] font-poppins font-bold w-full h-full text-start">
            Derniers Postes
          </h2>
        </div>

        <div className="">
          <Swiper
            className={`w-full flex justify-between`}
            navigation={false}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              319: {
                slidesPerView: 1.6,
              },
              518: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
            }}
          >
            <div className="md:w-[100%] md:h-[100%]">
              <div>
                <SwiperSlide className="py-10 px-6 w-1/2 h-1/2 md:w-full md:h-full flex items-center justify-center mb-7 lg:mb-10 2xl:mb-5">
                  <motion.div
                    className="cursor-pointer "
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/afriquiagaz/posts/post1.png"
                      alt=""
                      className="m-auto"
                    />
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide className="py-10 px-6 w-1/2 h-1/2 md:w-full md:h-full flex items-center justify-center mb-7 lg:mb-10 2xl:mb-5">
                  <motion.div
                    className="cursor-pointer "
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/afriquiagaz/posts/post2.png"
                      alt=""
                      className="m-auto"
                    />
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide className="py-10 px-6 w-1/2 h-1/2 md:w-full md:h-full flex items-center justify-center mb-7 lg:mb-10 2xl:mb-5">
                  <motion.div
                    className="cursor-pointer "
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/afriquiagaz/posts/post3.png"
                      alt=""
                      className="m-auto"
                    />
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide className="py-10 px-6 w-1/2 h-1/2 md:w-full md:h-full flex items-center justify-center mb-7 lg:mb-10 2xl:mb-5">
                  <motion.div
                    className="cursor-pointer "
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/afriquiagaz/posts/post4.png"
                      alt=""
                      className="m-auto"
                    />
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide className="py-10 px-6 w-1/2 h-1/2 md:w-full md:h-full flex items-center justify-center mb-7 lg:mb-10 2xl:mb-5">
                  <motion.div
                    className="cursor-pointer "
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/afriquiagaz/posts/post1.png"
                      alt=""
                      className="m-auto"
                    />
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide className="py-10 px-6 w-1/2 h-1/2 md:w-full md:h-full flex items-center justify-center mb-7 lg:mb-10 2xl:mb-5">
                  <motion.div
                    className="cursor-pointer "
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/afriquiagaz/posts/post2.png"
                      alt=""
                      className="m-auto"
                    />
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
