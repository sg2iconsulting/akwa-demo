// // import React from 'react';
// // import Slider from '../../molecules/Slider/Slider';
// // import HeroSlide from '../HeroSlide/HeroSlide';
// // import { CTAButton } from '../../molecules/CTAButton/CTAButton';

// // export type ImageSlide = {
// //   type: 'image';
// //   src: string;
// //   alt?: string;
// // }

// // export type VideoSlide = {
// //   type: 'video';
// //   src: string;
// //   posterSrc?: string;
// // }

// // export type CustomSlide = {
// //   type: 'custom';
// //   content: React.ReactNode;
// // }

// // export type SliderSlideContent = ImageSlide | VideoSlide | CustomSlide;

// // export interface AppDownloadSectionProps {
// //   title?: string;
// //   googlePlayImageSrc?: string;
// //   appStoreImageSrc?: string;
// // }

// // export interface HeroSlideItem {
// //   type: 'image' | 'video' | 'custom';
// //   src: string;
// //   posterSrc?: string;
// //   content?: React.ReactNode;
// //   title?: string;
// //   subtitle?: string;
// //   cta?: CTAButton | CTAButton[];
// //   appDownloadSection?: AppDownloadSectionProps;
// // }

// // interface HeroSliderProps {
// //   slides: HeroSlideItem[];
// //   className?: string;
// //   slideClassName?: string;
// //   containerClassName?: string;
// //   effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
// //   autoplay?: boolean;
// //   delay?: number;
// //   showNavigation?: boolean;
// //   showPagination?: boolean;
// //   loop?: boolean;
// //   titleClassName?: string;
// //   subtitleClassName?: string; 
// //   ctaClassName?: string;
// //   appDownloadTitleClassName?: string;
// //   appButtonClassName?: string;
// //   darkOverlay?: boolean;
// //   overlayOpacity?: number;
// // }

// // const HeroSlider: React.FC<HeroSliderProps> = ({
// //   slides,
// //   className = "w-full h-full",
// //   slideClassName = "w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover",
// //   containerClassName = "w-full h-full",
// //   effect = "fade",
// //   autoplay = true,
// //   delay = 5000,
// //   showNavigation = false,
// //   showPagination = true,
// //   loop = true,
// //   titleClassName,
// //   subtitleClassName,
// //   ctaClassName,
// //   appDownloadTitleClassName,
// //   appButtonClassName,
// //   darkOverlay = true,
// //   overlayOpacity = 40,
// // }) => {

// //   const sliderSlides: SliderSlideContent[] = slides.map((slide) => {
  
// //     if (slide.type === 'custom' && slide.content) {
// //       return {
// //         type: 'custom',
// //         content: slide.content
// //       };
// //     }
    
  
// //     const slideContent = (
// //       <HeroSlide
// //         type={slide.type}
// //         src={slide.src}
// //         posterSrc={slide.posterSrc}
// //         content={slide.content}
// //         title={slide.title}
// //         subtitle={slide.subtitle}
// //         cta={slide.cta}
// //         appDownloadSection={slide.appDownloadSection}
// //         slideClassName={slideClassName}
// //         titleClassName={titleClassName}
// //         subtitleClassName={subtitleClassName}
// //         ctaClassName={ctaClassName}
// //         appDownloadTitleClassName={appDownloadTitleClassName}
// //         appButtonClassName={appButtonClassName}
// //         darkOverlay={darkOverlay}
// //         overlayOpacity={overlayOpacity}
// //       />
// //     );
    
  
// //     return {
// //       type: 'custom',
// //       content: slideContent
// //     };
// //   });

// //   return (
// //     <Slider
// //       slides={sliderSlides}
// //       className={className}
// //       containerClassName={containerClassName}
// //       effect={effect}
// //       autoplay={autoplay}
// //       delay={delay}
// //       showNavigation={showNavigation}
// //       showPagination={showPagination}
// //       loop={loop}
// //     />
// //   );
// // };

// // export default HeroSlider;

// import React, { useState } from 'react';
// import Slider from '../../molecules/Slider/Slider';
// import HeroSlide from '../HeroSlide/HeroSlide';
// import { CTAButton } from '../../molecules/CTAButton/CTAButton';
// import VideoModal from '../VideoModal/VideoModal';

// export type ImageSlide = {
//   type: 'image';
//   src: string;
//   alt?: string;
// }

// export type VideoSlide = {
//   type: 'video';
//   src: string;
//   posterSrc?: string;
// }

// export type CustomSlide = {
//   type: 'custom';
//   content: React.ReactNode;
// }

// export type SliderSlideContent = ImageSlide | VideoSlide | CustomSlide;

// export interface AppDownloadSectionProps {
//   title?: string;
//   googlePlayImageSrc?: string;
//   appStoreImageSrc?: string;
// }

// export interface HeroSlideItem {
//   type: 'image' | 'video' | 'custom';
//   src: string;
//   posterSrc?: string;
//   content?: React.ReactNode;
//   title?: string;
//   subtitle?: string;
//   cta?: CTAButton | CTAButton[];
//   appDownloadSection?: AppDownloadSectionProps;
// }

// interface HeroSliderProps {
//   slides: HeroSlideItem[];
//   className?: string;
//   slideClassName?: string;
//   containerClassName?: string;
//   effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
//   autoplay?: boolean;
//   delay?: number;
//   showNavigation?: boolean;
//   showPagination?: boolean;
//   loop?: boolean;
//   titleClassName?: string;
//   subtitleClassName?: string; 
//   ctaClassName?: string;
//   appDownloadTitleClassName?: string;
//   appButtonClassName?: string;
//   darkOverlay?: boolean;
//   overlayOpacity?: number;
//   enableVideoModal?: boolean; 
// }

// const HeroSlider: React.FC<HeroSliderProps> = ({
//   slides,
//   className = "w-full h-full",
//   slideClassName = "w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover",
//   containerClassName = "w-full h-full",
//   effect = "fade",
//   autoplay = true,
//   delay = 5000,
//   showNavigation = false,
//   showPagination = true,
//   loop = true,
//   titleClassName,
//   subtitleClassName,
//   ctaClassName,
//   appDownloadTitleClassName,
//   appButtonClassName,
//   darkOverlay = true,
//   overlayOpacity = 40,
//   enableVideoModal = false, 
// }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalVideoSrc, setModalVideoSrc] = useState('');
//   const [modalVideoTitle, setModalVideoTitle] = useState('');

//   const handleOpenVideoModal = (videoSrc: string, videoTitle?: string) => {
//     if (!enableVideoModal) return;
    
//     setModalVideoSrc(videoSrc);
//     setModalVideoTitle(videoTitle || '');
//     setIsModalOpen(true);
//   };

//   const handleCloseVideoModal = () => {
//     setIsModalOpen(false);
//   };

//   const sliderSlides: SliderSlideContent[] = slides.map((slide) => {
//     if (slide.type === 'custom' && slide.content) {
//       return {
//         type: 'custom',
//         content: slide.content
//       };
//     }
    
//     const slideContent = (
//       <HeroSlide
//         type={slide.type}
//         src={slide.src}
//         posterSrc={slide.posterSrc}
//         content={slide.content}
//         title={slide.title}
//         subtitle={slide.subtitle}
//         cta={slide.cta}
//         appDownloadSection={slide.appDownloadSection}
//         slideClassName={slideClassName}
//         titleClassName={titleClassName}
//         subtitleClassName={subtitleClassName}
//         ctaClassName={ctaClassName}
//         appDownloadTitleClassName={appDownloadTitleClassName}
//         appButtonClassName={appButtonClassName}
//         darkOverlay={darkOverlay}
//         overlayOpacity={overlayOpacity}
//         onVideoClick={slide.type === 'video' && enableVideoModal ? 
//           () => handleOpenVideoModal(slide.src, slide.title) : undefined}
//         modalEnabled={enableVideoModal}
//       />
//     );
    
//     return {
//       type: 'custom',
//       content: slideContent
//     };
//   });

//   return (
//     <>
//       <Slider
//         slides={sliderSlides}
//         className={className}
//         containerClassName={containerClassName}
//         effect={effect}
//         autoplay={autoplay}
//         delay={delay}
//         showNavigation={showNavigation}
//         showPagination={showPagination}
//         loop={loop}
//       />
      
//       {enableVideoModal && (
//         <VideoModal
//           isOpen={isModalOpen}
//           onClose={handleCloseVideoModal}
//           videoSrc={modalVideoSrc}
//           videoTitle={modalVideoTitle}
//         />
//       )}
//     </>
//   );
// };

// export default HeroSlider;

import React, { useState } from 'react';
import Slider from '../../molecules/Slider/Slider';
import HeroSlide from '../HeroSlide/HeroSlide';
import { CTAButton } from '../../molecules/CTAButton/CTAButton';
import VideoModal from '../VideoModal/VideoModal';

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
  content: React.ReactNode;
}

export type SliderSlideContent = ImageSlide | VideoSlide | CustomSlide;

export interface AppDownloadSectionProps {
  title?: string;
  googlePlayImageSrc?: string;
  appStoreImageSrc?: string;
}

export interface HeroSlideItem {
  type: 'image' | 'video' | 'custom';
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
  ctaClassName?: string;
  appDownloadTitleClassName?: string;
  appButtonClassName?: string;
  darkOverlay?: boolean;
  overlayOpacity?: number;
  enableVideoModal?: boolean; 
  paginationStyles?: string;
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
  ctaClassName,
  appDownloadTitleClassName,
  appButtonClassName,
  darkOverlay = true,
  overlayOpacity = 40,
  enableVideoModal = false, 
  paginationStyles,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideoSrc, setModalVideoSrc] = useState('');
  const [modalVideoTitle, setModalVideoTitle] = useState('');

  const handleOpenVideoModal = (videoSrc: string, videoTitle?: string) => {
    if (!enableVideoModal) return;
    
    setModalVideoSrc(videoSrc);
    setModalVideoTitle(videoTitle || '');
    setIsModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setIsModalOpen(false);
  };

  const sliderSlides: SliderSlideContent[] = slides.map((slide) => {
    if (slide.type === 'custom' && slide.content) {
      return {
        type: 'custom',
        content: slide.content
      };
    }
    
    let ctaClickHandler;
    if (slide.type === 'video' && enableVideoModal) {
      const hasValidUrl = slide.cta && 
                         (Array.isArray(slide.cta) 
                           ? slide.cta.some(btn => btn.url && btn.url !== '#') 
                           : slide.cta.url && slide.cta.url !== '#');
      
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
        cta={slide.cta}
        appDownloadSection={slide.appDownloadSection}
        slideClassName={slideClassName}
        titleClassName={titleClassName}
        subtitleClassName={subtitleClassName}
        ctaClassName={ctaClassName}
        appDownloadTitleClassName={appDownloadTitleClassName}
        appButtonClassName={appButtonClassName}
        darkOverlay={darkOverlay}
        overlayOpacity={overlayOpacity}
        onVideoClick={slide.type === 'video' && enableVideoModal ? 
          () => handleOpenVideoModal(slide.src, slide.title) : undefined}
        modalEnabled={enableVideoModal}
        onCtaClick={ctaClickHandler}
      />
    );
    
    return {
      type: 'custom',
      content: slideContent
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