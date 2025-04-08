// import React from "react";
// import HeroBackground from "../../atoms/HeroBackground/HeroBackground";
// import HeroContent from "../../molecules/HeroContent/HeroContent";
// import AppDownloadSection from "../../molecules/AppDownloadSection/AppDownloadSection";

// interface HeroSectionProps {
//   slides: { type: string; src: string }[];
//   backgroundImageSrc?: string;
//   backgroundImageClassename?: string;
//   title: string;
//   subtitle: string;
//   appDownloadTitle: string;
//   googlePlayImageSrc: string;
//   appStoreImageSrc: string;
//   appDownloadTitleClassename?: string;
//   heroTitleClassename?: string;
//   heroSubTitleClassename?: string;
//   appButtonClassename?: string;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({
//   slides,
//   backgroundImageSrc,
//   backgroundImageClassename,
//   title,
//   subtitle,
//   appDownloadTitle,
//   googlePlayImageSrc,
//   appStoreImageSrc,
//   appDownloadTitleClassename,
//   heroTitleClassename,
//   heroSubTitleClassename,
//   appButtonClassename,
// }) => {
//   return (
//     <div className="w-full h-full relative">
//       {/* <div className="absolute inset-0 flex flex-col items-center justify-center sm:justify-normal xl:justify-center text-center text-white"></div> */}
//       <HeroBackground
//         images={slides}
//         className={backgroundImageClassename}
//         title={title}
//         subtitle={subtitle}
//         appDownloadTitle={appDownloadTitle}
//         googlePlayImageSrc={googlePlayImageSrc}
//         appStoreImageSrc={appStoreImageSrc}
//         appDownloadTitleClassename={appDownloadTitleClassename}
//         heroTitleClassename={heroTitleClassename}
//         heroSubTitleClassename={heroSubTitleClassename}
//         appButtonClassename={appButtonClassename}

//       />

//       {/* <div className="w-full h-full absolute inset-0 flex items-center px-5 md:px-10 lg:px-20 2xl:px-24 pointer-events-none">
//         <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 text-white"> */}
//       {/* <HeroContent
//             title={title}
//             subtitle={subtitle}
//             titleClassName={heroTitleClassename}
//             subtitleClassName={heroSubTitleClassename}
//           /> */}

//       {/* <AppDownloadSection
//             title={appDownloadTitle}
//             googlePlayImageSrc={googlePlayImageSrc}
//             appStoreImageSrc={appStoreImageSrc}
//             titleClassename={appDownloadTitleClassename}
//             buttonClassename={appButtonClassename}
//           /> */}
//       {/* <div className="pointer-events-auto">
//             <AppDownloadSection
//               title={appDownloadTitle}
//               googlePlayImageSrc={googlePlayImageSrc}
//               appStoreImageSrc={appStoreImageSrc}
//               titleClassename={appDownloadTitleClassename}
//               buttonClassename={appButtonClassename}
//             />
//           </div> */}
//       {/* </div>
//       </div> */}
//     </div>
//   );
// };

// export default HeroSection;


import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "../../atoms/Image/Image";
import Video from "../../atoms/Video/Video";

// Match these types with HeroSlider's expected types
export type ImageSlide = {
  type: 'image';
  src: string;
  alt?: string;
}

export type VideoSlide = {
  type: 'video';
  src: string;
  posterSrc?: string;
}

export type CustomSlide = {
  type: 'custom';
  content: ReactNode;
}

export type SlideContent = ImageSlide | VideoSlide | CustomSlide;

interface SliderProps {
  slides: SlideContent[];
  className?: string;
  slideClassName?: string;
  containerClassName?: string;
  effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
  autoplay?: boolean;
  delay?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  loop?: boolean;
  spaceBetween?: number;
  slidesPerView?: number | 'auto';
}

const Slider: React.FC<SliderProps> = ({
  slides,
  className = "w-full h-full",
  slideClassName = "w-full h-full",
  containerClassName = "w-full h-full",
  effect = "slide",
  autoplay = true,
  delay = 3000,
  showNavigation = true,
  showPagination = true,
  loop = true,
  spaceBetween = 0,
  slidesPerView = 1,
}) => {
  const paginationStyles = `
    .swiper-pagination {
      position: absolute;
      bottom: 20px !important;
      z-index: 50 !important;
    }
    
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: white;
      opacity: 0.6;
    }
    
    .swiper-pagination-bullet-active {
      opacity: 1;
      background: #8BBA25;
    }

    .swiper-button-next, .swiper-button-prev {
      color: white;
    }
  `;

  if (!slides || slides.length === 0) {
    return null;
  }

  const renderSlideContent = (slide: SlideContent, index: number) => {
    switch (slide.type) {
      case 'image':
        return (
          <Image 
            src={slide.src} 
            className={slideClassName}
            alt={slide.alt || `Slide ${index + 1}`} 
          />
        );
      
      case 'video':
        return (
          <Video
            src={slide.src} 
            className={slideClassName}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            onCanPlay={(e) => e.currentTarget.play().catch(err => console.log('Autoplay failed:', err))}
            poster={slide.posterSrc}
          />
        );
      
      case 'custom':
        return slide.content;
      
      default:
        return null;
    }
  };

  return (
    <div className={containerClassName}>
      <style>{paginationStyles}</style>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect={effect}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop}
        autoplay={autoplay ? { delay: delay, disableOnInteraction: false } : false}
        pagination={showPagination ? { clickable: true } : false}
        navigation={showNavigation}
        className={className}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {renderSlideContent(slide, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;