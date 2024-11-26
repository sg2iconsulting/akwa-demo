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
    <section className="w-full pt-7">
      <div className="w-full max-w-[2000px] px-3 md:px-7 xl:px-10 2xl:px-20 mx-auto">
        <div className="w-full">
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
                slidesPerView: 1.3,
              },
              364: {
                slidesPerView: 1.5,
              },
              518: {
                slidesPerView: 2.2,
              },
              556: {
                slidesPerView: 2.4,
              },
              725: {
                slidesPerView: 3,
              },
              840: {
                slidesPerView: 3.3,
              },
              1100: {
                slidesPerView: 3.7,
              },
              1533: {
                slidesPerView: 3,
              },
              1877: {
                slidesPerView: 4,
              },
            }}
          >
            <div className="w-[100%] h-[100%] flex justify-center items-center">
              <div className="w-full h-full flex justify-between">
                <SwiperSlide className="mb-16">
                  <Card
                    imageSrc="/afriquiagaz/Cards/card1.jpeg"
                    title="Propane 34 Kg pour particuliers"
                  />
                </SwiperSlide>
                <SwiperSlide className="mb-16">
                  <Card
                    imageSrc="/afriquiagaz/Cards/card2.png"
                    title="Gamme de nos bouteilles"
                  />
                </SwiperSlide>
                <SwiperSlide className="mb-16">
                  <Card
                    imageSrc="/afriquiagaz/Cards/card3.jpeg"
                    title="Citernes pour particuliers"
                  />
                </SwiperSlide>
                <SwiperSlide className="mb-16">
                  <Card
                    imageSrc="/afriquiagaz/Cards/card4.png"
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
