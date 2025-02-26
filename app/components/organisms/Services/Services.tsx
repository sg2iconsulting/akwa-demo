"use client";
import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "@/app/styles/afriquiaswiperBullets.css";
import ServiceCard from "../../molecules/ServiceCard/ServiceCard";

export interface ServicesSlide {
  imgSrc: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface ServicesProps {
  slides: ServicesSlide[];
}

const Services = ({ slides }: ServicesProps) => {
  return (
    <section className="w-full h-full max-w-[2000px] mx-auto">
      <div className="w-full h-full px-5 md:px-10 lg:px-20">
        <div className="flex justify-between items-center w-full h-full">
          <Swiper
            className="w-full h-full"
            navigation={false}
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            speed={2500}
            loop
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              319: {
                slidesPerView: 2.3,
                spaceBetween: 10,
              },
              518: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              556: {
                slidesPerView: 3.2,
              },
              725: {
                slidesPerView: 3.5,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1000: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="py-3 xl:py-5 w-full h-full">
                <ServiceCard
                  imgSrc={slide.imgSrc}
                  title={slide.title}
                  className={slide.className}
                  style={slide.style}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;