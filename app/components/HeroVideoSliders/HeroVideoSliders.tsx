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

export interface Slide {
  videoSrcUrl: string;
  title?: string;
  description?: string;
  backgroundColor?: string;
  titleTextColor?: string;
  descriptionTextColor?: string;
}

interface HeroVideoProps {
  slides: Slide[];
}

const HeroVideoSliders: React.FC<HeroVideoProps> = ({ slides }) => {
  return (
    <section className="w-full h-full max-w-[2000px] mx-auto">
      <div className="w-full h-full px-5 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            speed={2000}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              319: { spaceBetween: 20 },
              640: { spaceBetween: 20 },
              768: { spaceBetween: 30 },
              1024: { spaceBetween: 40 },
              1440: { spaceBetween: 60 },
              1700: { spaceBetween: 80 },
              2000: { spaceBetween: 100 },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full flex justify-center py-3 xl:py-5 mb-5 md:mb-8 lg:mb-12 xl:mb-20 2xl:mb-24 px-2 md:px-4 lg:px-6 xl:px-8">
                  <div
                    className="w-full h-[300px] md:h-[420px] lg:h-[460px] xl:h-[580px] 2xl:h-[725px] flex justify-center items-center rounded-[10px] shadow-lg xl:rounded-[25px]"
                    style={{ 
                        backgroundColor: slide.backgroundColor || "white",
                        boxShadow:
                      "0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="w-full h-[90%] md:h-[85%] xl:h-[90%] px-5 flex flex-col lg:flex-row justify-between md:justify-center md:items-center gap-6 lg:gap-10 xl:gap-12 2xl:gap-16">
                      <div className="w-full lg:w-[45%] h-full flex flex-col md:justify-center order-2 lg:order-1 gap-2 md:gap-6 lg:gap-10 xl:gap-12 2xl:gap-16">
                        <div
                          className="px-3 font-poppins font-bold w-full text-[12px] md:text-[18px] lg:text-[28px] xl:text-[45px] 2xl:text-[60px] leading-[10px] md:leading-[20px] lg:leading-[28px] xl:leading-[40px] 2xl:leading-[55px]"
                          style={{ color: slide.titleTextColor || "black" }}
                        >
                          {slide.title}
                        </div>

                        <div
                          className="px-3 font-poppins font-medium w-full text-[10px] md:text-[14px] xl:text-[18px] 2xl:text-[22px] line-clamp-4 lg:line-clamp-6"
                          style={{ color: slide.descriptionTextColor || "black" }}
                        >
                          {slide.description}
                        </div>
                      </div>
                      <div className="w-full lg:w-[50%] h-full order-1 lg:order-2">
                        <iframe
                          className="w-full h-full rounded-[10px] 2xl:rounded-[25px]"
                          src={slide.videoSrcUrl}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroVideoSliders;