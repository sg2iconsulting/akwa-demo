// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "@/app/styles/afriquiaswiperBullets.css";

// const HeroSliders = () => {
//   return (
//     <section className="w-full max-w-[2000px] mx-auto h-full">
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="w-full px-[16px] md:px-[36px] lg:px-[65px] h-full"
//       >
//         <Swiper
//           className="w-full h-full "
//           modules={[Navigation, Pagination, Autoplay]}
//           pagination={{
//             clickable: true,
//           }}
//           slidesPerView={1}
//           speed={2000}
//           loop={true}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//         >
//           <SwiperSlide>
//             <div className="flex justify-center w-full py-3 xl:py-5 mb-5 md:mb-8 lg:mb-12 xl:mb-20 2xl:mb-24 ">
//               <div className="h-full w-full flex justify-center mx-[6px] lg:mx-[8px] xl:mx-[16px]">
//                 <img
//                   src={"/afriquiaGaz/slider1.png"}
//                   alt={"hero 1"}
//                   className=""
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="flex justify-center w-full py-3 xl:py-5 mb-5 md:mb-8 lg:mb-12 xl:mb-20 2xl:mb-24 ">
//               <div className="h-full w-full flex justify-center mx-[6px] lg:mx-[8px] xl:mx-[16px]">
//                 <img
//                   src={"/afriquiaGaz/slider1.png"}
//                   alt={"hero 1"}
//                   className=""
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="flex justify-center w-full py-3 xl:py-5 mb-5 md:mb-8 lg:mb-12 xl:mb-20 2xl:mb-24 ">
//               <div className="h-full w-full flex justify-center mx-[6px] lg:mx-[8px] xl:mx-[16px]">
//                 <img
//                   src={"/afriquiaGaz/slider1.png"}
//                   alt={"hero 1"}
//                   className=""
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSliders;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/app/styles/afriquiaswiperBullets.css";

const HeroSliders = () => {
  return (
    <section className="w-full max-w-[2000px] mx-auto h-full">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full px-5 md:px-10 lg:px-20 h-full"
      >
        <Swiper
          className="w-full h-full "
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          speed={2000}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            319: {
              spaceBetween: 20,
            },
            640: {
              spaceBetween: 20,
            },
            768: {
              spaceBetween: 30,
            },
            1024: {
              spaceBetween: 40,
            },
            1440: {
              spaceBetween: 60,
            },
            1700: {
              spaceBetween: 80,
            },
            2000: {
              spaceBetween: 100,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex justify-center w-full py-3 xl:py-5 mb-7 lg:mb-20 2xl:mb-24">
              <div className="h-full w-full flex justify-center">
                <img
                  src={"/afriquiaGaz/slider1.png"}
                  alt={"hero 1"}
                  className=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center w-full py-3 xl:py-5 mb-7 lg:mb-20 2xl:mb-24">
              <div className="h-full w-full flex justify-center">
                <img
                  src={"/afriquiaGaz/slider1.png"}
                  alt={"hero 1"}
                  className=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center w-full py-3 xl:py-5 mb-7 lg:mb-20 2xl:mb-24">
              <div className="h-full w-full flex justify-center">
                <img
                  src={"/afriquiaGaz/slider1.png"}
                  alt={"hero 1"}
                  className=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </section>
  );
};

export default HeroSliders;