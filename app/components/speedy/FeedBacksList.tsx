import React from "react";
import FeedBack from "./FeedBack";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const FeedBacks = [
  {
    fullName: "Loubna Serghini",
    comment:
      "Personnel compétent serviable Un grand merci spécial à Chakib pour son brave travail et son professionnalisme incroyable.",
  },
  {
    fullName: "Hama Vtc",
    comment: "Une super équipe.",
  },
  {
    fullName: "Khalid C",
    comment: "Travail remarquable , merci bcp a Mr rachid et mohcin.",
  },
  {
    fullName: "Alaaeddine Rabie",
    comment:
      "Très bon service et un très bon rapport qualité-prix. Merci Mohammed pour le bon service.",
  },
  {
    fullName: "Yassine El Alaoui",
    comment:
      "Grande expérience dans l'entretien automobile et un travail assidu.",
  },
];

const FeedBacksList = () => {
  return (
    <div className="font-poppins w-full max-w-[2000px] mx-auto h-full">
      <div className="w-full flex items-center px-5 md:px-10 lg:px-20 h-full mt-4 bg-white">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false, 
          }}
          speed={2000} 
          className="w-full h-full flex justify-center items-center"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {FeedBacks.map((feedBack, id) => (
            <SwiperSlide
              key={id}
              className="flex h-full items-center justify-center w-full "
            >
              <div className="">
                <FeedBack
                  fullName={feedBack.fullName}
                  comment={feedBack.comment}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeedBacksList;
