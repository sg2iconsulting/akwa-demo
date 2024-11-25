"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "./Card";

const ListCard = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[2000px] h-auto flex flex-col mx-auto gap-2 md:gap-4 xl:gap-8  px-3 md:px-7 xl:px-10 2xl:px-20">
        <div className="md:flex items-center justify-around w-full xl:mx-auto gap-5 2xl:justify-around 2xl:w-full hidden flex-wrap">
          <div className="">
            <Card
              imageSrc="/Cards/card1.jpeg"
              title="Propane 34 Kg pour particuliers"
            />
          </div>
          <div className="">
            <Card imageSrc="/Cards/card2.png" title="Gamme de nos bouteilles" />
          </div>
          <div className="">
            <Card
              imageSrc="/Cards/card3.jpeg"
              title="Citernes pour particuliers"
            />
          </div>
          <div className="">
            <Card
              imageSrc="/Cards/card4.png"
              title="Service de livraison Allo Gaz"
            />
          </div>
        </div>
        <div className="w-full md:hidden md:mb-0">
          <Swiper
            className={`w-full h-[320px]`}
            navigation={false}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
          >
            <div className="w-[100%] h-[100%] flex justify-center items-center">
              <div className="w-full h-full ">
                <SwiperSlide className="p-10">
                  <Card
                    imageSrc="/Cards/card1.jpeg"
                    title="Propane 34 Kg pour particuliers"
                  />
                </SwiperSlide>
                <SwiperSlide className="p-10">
                  <Card
                    imageSrc="/Cards/card2.png"
                    title="Gamme de nos bouteilles"
                  />
                </SwiperSlide>
                <SwiperSlide className="p-10">
                  <Card
                    imageSrc="/Cards/card3.jpeg"
                    title="Citernes pour particuliers"
                  />
                </SwiperSlide>
                <SwiperSlide className="p-10">
                  <Card
                    imageSrc="/Cards/card4.png"
                    title="Service de livraison Allo Gaz"
                  />
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ListCard;
