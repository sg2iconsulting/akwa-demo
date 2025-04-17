// app/components/organisms/PartnerSlider/PartnerSlider.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "../../atoms/Image/Image";
import Heading from "../../atoms/Heading/Heading";

interface PartnerLogo {
  image: string;
  alt?: string;
}

interface PartnerSliderProps {
  title?: string;
  logos: PartnerLogo[];
  containerClassName?: string;
  titleClassName?: string;
  slideClassName?: string;
  imageClassName?: string;
  headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  paginationStyles?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: boolean;
  loop?: boolean;
  showPagination?: boolean;
  showNavigation?: boolean;
}

const PartnerSlider: React.FC<PartnerSliderProps> = ({
  title = "Nos partenaires",
  logos = [],
  titleClassName = "text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black text-[#0E1B25] dark:text-white",
  slideClassName = "",
  imageClassName = "object-contain",
  headingTag = "h2",
  paginationStyles,
  slidesPerView = 1,
  spaceBetween = 30,
  autoplay = true,
  loop = true,
  showPagination = true,
  showNavigation = false,
}) => {
  const getResponsiveSlidesPerView = () => {
    return {
      320: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 30 },
      1024: { slidesPerView: 4, spaceBetween: 40 },
      1280: { slidesPerView: 5, spaceBetween: 50 },
    };
  };

  return (
    <div className="w-full py-8 md:py-12 xl:py-16 px-5 md:px-10 lg:px-20">
      {title && (
        <Heading tag={headingTag} className={titleClassName}>
          {title}
        </Heading>
      )}

      <style >
        {`
          .swiper {
            padding-bottom: 60px !important; /* Add padding at the bottom of swiper */
          }
          .swiper-pagination {
            position: absolute !important;
            bottom: 0 !important;
            left: 0 !important;
            width: 100% !important;
            margin-top: 40px !important;
          }
          .swiper-pagination-bullet {
            width: 10px !important;
            height: 10px !important;
            background: #1f2937 !important; /* grey-800 color with !important */
            opacity: 0.6 !important;
            margin: 0 6px !important;
          }
          .swiper-pagination-bullet-active {
            opacity: 1 !important;
            background: #000000 !important;
          }
        `}
      </style>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={getResponsiveSlidesPerView()}
        pagination={showPagination ? { clickable: true } : false}
        navigation={showNavigation}
        autoplay={
          autoplay
            ? {
                delay: 3000,
                disableOnInteraction: false,
              }
            : false
        }
        loop={loop}
        className="w-full"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className={`${slideClassName}`}>
            <div className="w-full h-[100px] md:h-[120px] xl:h-[140px] flex items-center justify-center p-4">
              <div className="w-[120px] md:w-[160px] xl:w-[200px] h-[60px] md:h-[80px] xl:h-[100px] relative">
                <Image
                  src={logo.image}
                  alt={logo.alt || `Partner ${index + 1}`}
                  imageClassename={`w-full h-full ${imageClassName}`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerSlider;
