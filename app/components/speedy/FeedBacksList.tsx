import React from "react";
import FeedBack from "./FeedBack";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const FeedBacks = [
  {
    fullName: "Loubna Serghini",
    link: "https://maps.app.goo.gl/YKfetooFgN9h8MCc8",
    comment:
      "Personnel compétent serviable Un grand merci spécial à Chakib pour son brave travail et son professionnalisme incroyable.",
  },
  {
    fullName: "Hama Vtc",
    link: "https://maps.app.goo.gl/Gcte4yr6AUfcvvNt8",
    comment: "Une super équipe.",
  },
  {
    fullName: "Khalid C",
    link: "",
    comment: "Travail remarquable , merci bcp a Mr rachid et mohcin.",
  },
  {
    fullName: "Alaaeddine Rabie",
    link: "https://maps.app.goo.gl/9ouL1GMP3XAJQLGY6",
    comment:
      "Très bon service et un très bon rapport qualité-prix. Merci Mohammed pour le bon service.",
  },
  {
    fullName: "Yassine El Alaoui",
    link: "",
    comment:
      "Grande expérience dans l'entretien automobile et un travail assidu.",
  },
  {
    fullName: "Moufid Jaouad",
    link: "https://maps.app.goo.gl/HYf69HZ7Gsjitaid8",
    comment: "Tres bon service Equipe professionnel Je recomande.",
  },
  {
    fullName: "Mohamed Addaou",
    link: "https://maps.app.goo.gl/VUL6TWbED3W59bVn6",
    comment: "Bonne équipe et avec un magnifique service.",
  },
  {
    fullName: "Hatim Mechkouri",
    link: "https://maps.app.goo.gl/9D8FxpCH2Fpfsk899",
    comment: "Bon équipe et bon service.",
  },
  {
    fullName: "Ahmed Bouassami",
    link: "https://maps.app.goo.gl/cpmvSPR3NgHJg1m87",
    comment: "C est bon cube 👍.",
  },
];

const FeedBacksList = () => {
  return (
    <div className="font-poppins w-full max-w-[2000px] mx-auto h-full ">
      <div className="w-full flex items-center px-5 md:px-10 lg:px-20 h-full bg-white">
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
            440: {
              slidesPerView: 2,
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
              <a
                href={feedBack.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" cursor-pointer"
              >
                <div className="">
                  <FeedBack
                    fullName={feedBack.fullName}
                    comment={feedBack.comment}
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeedBacksList;
