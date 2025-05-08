"use client";

import React, { useState } from "react";
import Slider from "../molecule/Slider";

import { CTAButton } from "../molecule/CTAButton";
import HeroSlide from "../organisme/HeroSlide";
import VideoModal from "../organisme/VideoModal";
import { ctaHandlers } from "@/Handlers";

export type ImageSlide = {
  type: "image";
  src: string;
  alt?: string;
};

export type VideoSlide = {
  type: "video";
  src: string;
  posterSrc?: string;
};

export type CustomSlide = {
  type: "custom";
  content: React.ReactNode;
};

export type SliderSlideContent = ImageSlide | VideoSlide | CustomSlide;

export interface AppDownloadSectionProps {
  title?: string;
  googlePlayImageSrc?: string;
  appStoreImageSrc?: string;
}

export interface HeroSlideItem {
  type: "image" | "video" | "custom";
  src: string;
  posterSrc?: string;
  content?: React.ReactNode;
  title?: string;
  subtitle?: string;
  cta?: CTAButton | CTAButton[];
  appDownloadSection?: AppDownloadSectionProps;
}

interface HeroSliderProps {
  slides: HeroSlideItem[];
  ctaHandlers?: Record<string, () => void>;
  className?: string;
  slideClassName?: string;
  containerClassName?: string;
  effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
  autoplay?: boolean;
  delay?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  loop?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  ctaClassName?: string;
  appDownloadTitleClassName?: string;
  appButtonClassName?: string;
  darkOverlay?: boolean;
  overlayOpacity?: number;
  enableVideoModal?: boolean;
  paginationStyles?: string;
  paginationColor?: string;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  className = "w-full h-full",
  slideClassName = "w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover",
  containerClassName = "w-full h-full",
  effect = "fade",
  autoplay = true,
  delay = 5000,
  showNavigation = false,
  showPagination = true,
  loop = true,
  titleClassName,
  subtitleClassName,
  contentClassName,
  ctaClassName,
  appDownloadTitleClassName,
  appButtonClassName,
  darkOverlay = true,
  overlayOpacity = 40,
  enableVideoModal = false,
  paginationColor = "#FFFFFF",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideoSrc, setModalVideoSrc] = useState("");
  const [modalVideoTitle, setModalVideoTitle] = useState("");

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
              background: ${paginationColor};
            }

            .swiper-button-next, .swiper-button-prev {
              color: white;
            }`;

  const handleOpenVideoModal = (videoSrc: string, videoTitle?: string) => {
    if (!enableVideoModal) return;

    setModalVideoSrc(videoSrc);
    setModalVideoTitle(videoTitle || "");
    setIsModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setIsModalOpen(false);
  };

  const injectCtaHandlers = (
    cta: CTAButton | CTAButton[] | undefined
  ): CTAButton | CTAButton[] | undefined => {
    if (!cta) return undefined;

    const ctaArray = Array.isArray(cta) ? cta : [cta];

    return ctaArray.map((item) => ({
      ...item,
      onClick:
        item.onClick ||
        (item.handlerKey && ctaHandlers && ctaHandlers[item.handlerKey]) ||
        (() => console.warn(`No handler for CTA key: ${item.handlerKey}`)),
    }));
  };

  const sliderSlides: SliderSlideContent[] = slides.map((slide) => {
    if (slide.type === "custom" && slide.content) {
      return {
        type: "custom",
        content: slide.content,
      };
    }

    let ctaClickHandler;
    if (slide.type === "video" && enableVideoModal) {
      const hasValidUrl =
        slide.cta &&
        (Array.isArray(slide.cta)
          ? slide.cta.some((btn) => btn.url && btn.url !== "#")
          : slide.cta.url && slide.cta.url !== "#");

      if (!hasValidUrl) {
        ctaClickHandler = () => handleOpenVideoModal(slide.src, slide.title);
      }
    }

    const slideContent = (
      <HeroSlide
        type={slide.type}
        src={slide.src}
        posterSrc={slide.posterSrc}
        content={slide.content}
        title={slide.title}
        subtitle={slide.subtitle}
        cta={injectCtaHandlers(slide.cta)}
        appDownloadSection={slide.appDownloadSection}
        slideClassName={slideClassName}
        titleClassName={titleClassName}
        subtitleClassName={subtitleClassName}
        contentClassName={contentClassName}
        ctaClassName={ctaClassName}
        appDownloadTitleClassName={appDownloadTitleClassName}
        appButtonClassName={appButtonClassName}
        darkOverlay={darkOverlay}
        overlayOpacity={overlayOpacity}
        onVideoClick={
          slide.type === "video" && enableVideoModal
            ? () => handleOpenVideoModal(slide.src, slide.title)
            : undefined
        }
        modalEnabled={enableVideoModal}
        onCtaClick={ctaClickHandler}
      />
    );

    return {
      type: "custom",
      content: slideContent,
    };
  });

  return (
    <>
      <Slider
        slides={sliderSlides}
        className={className}
        containerClassName={containerClassName}
        effect={effect}
        autoplay={autoplay}
        delay={delay}
        showNavigation={showNavigation}
        showPagination={showPagination}
        loop={loop}
        paginationStyles={paginationStyles}
      />

      {enableVideoModal && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={handleCloseVideoModal}
          videoSrc={modalVideoSrc}
          videoTitle={modalVideoTitle}
        />
      )}
    </>
  );
};

export default HeroSlider;
