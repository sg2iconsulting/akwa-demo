import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "../atoms/Image";
import Video from "../atoms/Video";

type ImageSlide = {
  type: "image";
  src: string;
  alt?: string;
};

type VideoSlide = {
  type: "video";
  src: string;
  posterSrc?: string;
};

type CustomSlide = {
  type: "custom";
  content: ReactNode;
};

type SlideContent = ImageSlide | VideoSlide | CustomSlide;

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
  slidesPerView?: number | "auto";
  paginationStyles?: string;
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
  paginationStyles = "",
}) => {
  if (!slides || slides.length === 0) {
    return null;
  }

  const renderSlideContent = (slide: SlideContent, index: number) => {
    switch (slide.type) {
      case "image":
        return (
          <Image
            src={slide.src}
            className={slideClassName}
            alt={slide.alt || `Slide ${index + 1}`}
          />
        );

      case "video":
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
            onCanPlay={(e) =>
              e.currentTarget
                .play()
                .catch((err) => console.log("Autoplay failed:", err))
            }
            poster={slide.posterSrc}
          />
        );

      case "custom":
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
        autoplay={
          autoplay ? { delay: delay, disableOnInteraction: false } : false
        }
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
