// // import React from "react";
// // import Image from "../Image/Image";

// // interface HeroBackgroundProps {
// //   imageSrc: string;
// //   className?: string;
// // }

// // const HeroBackground: React.FC<HeroBackgroundProps> = ({
// //   imageSrc,
// //   className = "w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover",
// // }) => {
// //   return <Image src={imageSrc} className={className} alt="Hero background" />;
// // };

// // export default HeroBackground;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import Image from "../Image/Image";

// interface HeroBackgroundProps {
//   images: string[];
//   className?: string;
//   containerClassName?: string;
//   effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
//   autoplay?: boolean;
//   delay?: number;
//   showNavigation?: boolean;
//   showPagination?: boolean;
// }

// const HeroBackground: React.FC<HeroBackgroundProps> = ({
//   images,
//   className,
//   containerClassName = "w-full h-full",
//   effect = "fade",
//   autoplay = true,
//   delay = 1000,
//   showNavigation = true,
//   showPagination = true,
// }) => {
//   if (!images || images.length === 0) {
//     return null;
//   }

//   if (images.length === 1) {
//     return <Image src={images[0]} className={className} alt="Hero background" />;
//   }

//   return (
//     <div className="h-full w-full">
//       <Swiper
//         modules={[Autoplay, Pagination, EffectFade]}
//         effect={effect}
//         slidesPerView={1}
//         spaceBetween={0}
//         loop={true}
//         autoplay={autoplay ? { delay: delay, disableOnInteraction: false } : false}
//         pagination={showPagination ? { clickable: true } : false}
//         // navigation={showNavigation}
//         className="w-full h-full"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index} className="w-full h-full">
//             <Image
//               src={image}
//               className="w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover bg-fuchsia-400 z-20"
//               alt={`Hero background ${index + 1}`}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HeroBackground;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import HeroContent from "../../molecules/HeroContent/HeroContent";
import AppDownloadSection from "../../molecules/AppDownloadSection/AppDownloadSection";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "../Image/Image";

interface HeroBackgroundProps {
  images: { type: string; src: string }[];
  className?: string;
  effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
  autoplay?: boolean;
  delay?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  // Add content props
  title?: string;
  subtitle?: string;
  appDownloadTitle?: string;
  googlePlayImageSrc?: string;
  appStoreImageSrc?: string;
  appDownloadTitleClassename?: string;
  heroTitleClassename?: string;
  heroSubTitleClassename?: string;
  appButtonClassename?: string;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({
  images,
  className,
  effect = "slide",
  autoplay = true,
  delay = 3000,
  showNavigation = true,
  showPagination = true,
  title,
  subtitle,
  appDownloadTitle,
  googlePlayImageSrc,
  appStoreImageSrc,
  appDownloadTitleClassename,
  heroTitleClassename,
  heroSubTitleClassename,
  appButtonClassename,
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
`;

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="h-full w-full relative z-0">
      <style>{paginationStyles}</style>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect={effect}
        slidesPerView={1}
        spaceBetween={0}
        speed={2000}
        loop={true}
        autoplay={
          autoplay ? { delay: delay, disableOnInteraction: false } : false
        }
        pagination={showPagination ? { clickable: true } : false}
        className="w-full h-full"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="w-full h-full relative">
            {/* <Image 
              src={image} 
              className="w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover"
              alt={`Hero background ${index + 1}`} 
            /> */}
            {item.type === "image" ? (
              <Image
                src={item.src}
                className={className}
                alt={`Hero background ${index + 1}`}
              />
            ) : (
              <video
                src={item.src}
                className={className}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                controls={false}
                disablePictureInPicture
                disableRemotePlayback
              />
            )}

            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="absolute inset-0 flex items-center px-5 md:px-10 lg:px-20 2xl:px-24">
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 text-white">
                <HeroContent
                  title={title || ""}
                  subtitle={subtitle || ""}
                  titleClassName={heroTitleClassename}
                  subtitleClassName={heroSubTitleClassename}
                />

                <AppDownloadSection
                  title={appDownloadTitle || ""}
                  googlePlayImageSrc={googlePlayImageSrc || ""}
                  appStoreImageSrc={appStoreImageSrc || ""}
                  titleClassename={appDownloadTitleClassename}
                  buttonClassename={appButtonClassename}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBackground;
