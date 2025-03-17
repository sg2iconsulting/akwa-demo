import React from 'react'
import { motion } from 'framer-motion';
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/app/styles/maghrebBullets.css";
import { Swiper, SwiperSlide } from "swiper/react";

const MaghrebNavback = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px]">
        <video
          src="/maghreb/MaghrebOxygene.mp4" 
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop
          speed={2000}
          className="relative w-full h-full z-10 bg-black bg-opacity-40"
        >
          <SwiperSlide>
            <div className="w-full h-full absolute inset-0 flex items-center px-5 md:px-10 lg:px-20 2xl:px-24">
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 text-white">
                <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
                  <div className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] 2xl:text-[100px] font-bold leading-tight">
                    <p className="">Industrie</p>
                  </div>
                  <div className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold">
                    <p className="w-[80%] md:w-[65%]">
                      Pour permettre aux industriels d’optimiser leurs coûts et
                      d’atteindre le niveau de qualité que les produits
                      industriels exigent, Maghreb Oxygène leur apporte des
                      solutions intégrées gaz et soudage.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 md:gap-y-3 lg:gap-y-4 xl:gap-y-5 2xl:gap-y-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8 lg:h-[35px] lg:w-[150px] xl:h-[50px] xl:w-[200px] 2xl:w-[290px] 2xl:h-[67px] rounded-full bg-[#0085C3] cursor-pointer text-[6px] sm:text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold text-white mt-3 md:mt-4 lg:mt-6 xl:mt-8"
                  >
                    En savoir plus
                  </motion.button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full absolute inset-0 flex items-center px-5 md:px-10 lg:px-20 2xl:px-24">
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 text-white">
                <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
                  <div className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] 2xl:text-[100px] font-bold leading-tight">
                    <p className="">Santé</p>
                  </div>
                  <div className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold">
                    <p className="w-[80%] md:w-[65%]">
                      Maghreb Oxygène produit, conditionne et distribue des gaz
                      médicaux comme l’oxygène médical gazeux ou liquide, le
                      protoxyde d’azote et l’air synthétique, conformément aux
                      spécifications de la pharmacopée Européenne.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 md:gap-y-3 lg:gap-y-4 xl:gap-y-5 2xl:gap-y-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8 lg:h-[35px] lg:w-[150px] xl:h-[50px] xl:w-[200px] 2xl:w-[290px] 2xl:h-[67px] rounded-full bg-[#0085C3] cursor-pointer text-[6px] sm:text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold text-white mt-3 md:mt-4 lg:mt-6 xl:mt-8"
                  >
                    En savoir plus
                  </motion.button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
  )
}

export default MaghrebNavback