import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { EffectCoverflow, Navigation } from "swiper/modules";

interface Slide {
  image: string;
}

const slides: Slide[] = [
  {
    image: "/akwagroup/images/carburant.png",
  },
  {
    image: "/akwagroup/images/dev.png",
  },
  {
    image: "/akwagroup/images/fluides.png",
  },
  {
    image: "/akwagroup/images/gaz.png",
  },
  {
    image: "/akwagroup/images/transition.png",
  },
  {
    image: "/akwagroup/images/carburant.png",
  },
  {
    image: "/akwagroup/images/dev.png",
  },
  {
    image: "/akwagroup/images/fluides.png",
  },
  {
    image: "/akwagroup/images/gaz.png",
  },
  {
    image: "/akwagroup/images/transition.png",
  },
];

const TrendingSlider: React.FC = () => {
  return (
    <section className="flex items-center justify-center w-full padding-y">
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          350: {
            slidesPerView: 1.25,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 0,
          },
        }}
        className="w-ful"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full">
            <img
              src={slide.image}
              className="rounded-2xl w-full  h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev slider-arrow bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-md">
        <FaArrowLeft className="size-5" />
      </div>
      <div className="swiper-button-next slider-arrow bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-md">
        <FaArrowRight className="size-5" />
      </div>
    </section>
  );
};

export default TrendingSlider;
