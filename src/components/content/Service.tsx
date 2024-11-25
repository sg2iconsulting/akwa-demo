'use client'
import React from "react";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Service = () => {
  return (
    <section className="w-full h-full">
      <div className="w-full h-full max-w-[2000px] mx-auto px-3 md:px-7 xl:px-10 2xl:px-20 ">
        <div className="flex flex-col md:flex-row justify-between w-full gap-2 md:gap-5 h-full">
          <Swiper
          className={`w-full h-full`}
          navigation={false}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            319: {
              slidesPerView: 2,
            },
            518: {
              slidesPerView: 3,
            },
            556: {
              slidesPerView: 3.2,
            },
            725: {
              slidesPerView: 3.5,
            },
            768: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 5,
            },
            
          }}>
            <SwiperSlide className="mb-16">
              <motion.div
                className="w-full h-full mx-auto cursor-pointer xl:w-auto xl:h-auto rounded-[15px] bg-cover bg-center"
                // style={{ backgroundImage: `url('/service/produit.png')` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className=" md:w-full md:h-full relative px-3 ">
                  <img
                    className="object-cover   md:w-full md:h-full rounded-[20px]"
                    src="/service/produit.png"
                  ></img>
                  <h2 className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] font-poppins text-center font-medium md:font-semibold text-white text-[14px] md:text-[18px] xl:text-[28px]">
                    Nos produits
                  </h2>
                </div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="mb-16">
              <motion.div
                className="w-full mx-auto cursor-pointer xl:w-auto xl:h-auto rounded-[15px] bg-cover bg-center"
                // style={{ backgroundImage: `url('/service/solution.png')` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className=" md:w-full md:h-full relative  px-3  ">
                  <img
                    className="object-cover   md:w-full md:h-full rounded-[20px]"
                    src="/service/solution.png"
                  ></img>
                  <h2 className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] font-poppins text-center font-medium md:font-semibold text-white text-[14px] md:text-[18px] xl:text-[28px]">
                    Nos solutions
                  </h2>
                </div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="mb-16">
              <motion.div
                className="w-full mx-auto cursor-pointer xl:w-auto xl:h-auto rounded-[15px] bg-cover bg-center"
                // style={{ backgroundImage: `url('/service/conseil.png')` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className=" md:w-full md:h-full relative  px-3 ">
                  <img
                    className="object-cover   md:w-full md:h-full rounded-[20px]"
                    src="/service/conseil.png"
                  ></img>
                  <h2 className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] font-poppins text-center font-medium md:font-semibold text-white text-[14px] md:text-[18px] xl:text-[28px]">
                    Conseil& Assistance
                  </h2>
                </div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="mb-16">
              <motion.div
                className="w-full mx-auto cursor-pointer xl:w-auto xl:h-auto rounded-[15px] bg-cover bg-center"
                // style={{ backgroundImage: `url('/service/efficacite.png')` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className=" md:w-full md:h-full relative  px-3 ">
                  <img
                    className="object-cover   md:w-full md:h-full rounded-[20px]"
                    src="/service/efficacite.png"
                  ></img>
                  <h2 className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] font-poppins text-center font-medium md:font-semibold text-white text-[14px] md:text-[18px] xl:text-[28px]">
                    Éfficacité Énergétique
                  </h2>
                </div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="mb-16">
              <motion.div
                className=" w-full mx-auto cursor-pointer xl:w-auto xl:h-auto rounded-[15px] bg-cover bg-center"
                // style={{ backgroundImage: `url('/service/faq.png')` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className=" md:w-full md:h-full relative  px-3 ">
                  <img
                    className="object-cover   md:w-full md:h-full rounded-[20px]"
                    src="/service/faq.png"
                  ></img>
                  <h2 className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] font-poppins text-center font-medium md:font-semibold text-white text-[14px] md:text-[18px] xl:text-[28px]">
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
