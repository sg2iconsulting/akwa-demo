// import React, { ReactNode } from 'react';
// import HeroSlideMedia from '../../molecules/HeroSlideMedia/HeroSlideMedia';
// import DarkOverlay from '../../molecules/DarkOverlay/DarkOverlay';
// import HeroSlideContent from '../HeroSlideContent/HeroSlideContent';
// import { CTAButton } from '../../molecules/CTAButton/CTAButton';

// interface AppDownloadSectionProps {
//   title?: string;
//   googlePlayImageSrc?: string;
//   appStoreImageSrc?: string;
// }

// interface HeroSlideProps {
//   type: 'image' | 'video' | 'custom';
//   src: string;
//   posterSrc?: string;
//   content?: ReactNode;
//   title?: string;
//   subtitle?: string;
//   cta?: CTAButton | CTAButton[];
//   appDownloadSection?: AppDownloadSectionProps;
//   slideClassName?: string;
//   titleClassName?: string;
//   subtitleClassName?: string;
//   ctaClassName?: string;
//   appDownloadTitleClassName?: string;
//   appButtonClassName?: string;
//   darkOverlay?: boolean;
//   overlayOpacity?: number;
// }

// const HeroSlide: React.FC<HeroSlideProps> = ({
//   type,
//   src,
//   posterSrc,
//   content,
//   title,
//   subtitle,
//   cta,
//   appDownloadSection,
//   slideClassName = "w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover",
//   titleClassName,
//   subtitleClassName,
//   ctaClassName,
//   appDownloadTitleClassName,
//   appButtonClassName,
//   darkOverlay = true,
//   overlayOpacity = 40,
// }) => {
//   return (
//     <div className="relative w-full h-full">
//       <HeroSlideMedia
//         type={type}
//         src={src}
//         posterSrc={posterSrc}
//         className={slideClassName}
//         alt={title || "Hero slide"}
//       />
      
//       <DarkOverlay enabled={darkOverlay} opacity={overlayOpacity} />
      
//       <HeroSlideContent
//         content={content}
//         title={title}
//         subtitle={subtitle}
//         cta={cta}
//         appDownloadSection={appDownloadSection}
//         titleClassName={titleClassName}
//         subtitleClassName={subtitleClassName}
//         ctaClassName={ctaClassName}
//         appDownloadTitleClassName={appDownloadTitleClassName}
//         appButtonClassName={appButtonClassName}
//       />
//     </div>
//   );
// };

// export default HeroSlide;

import React, { ReactNode } from 'react';
import HeroSlideMedia from '../../molecules/HeroSlideMedia/HeroSlideMedia';
import DarkOverlay from '../../molecules/DarkOverlay/DarkOverlay';
import HeroSlideContent from '../HeroSlideContent/HeroSlideContent';
import { CTAButton } from '../../molecules/CTAButton/CTAButton';

interface AppDownloadSectionProps {
  title?: string;
  googlePlayImageSrc?: string;
  appStoreImageSrc?: string;
}

interface HeroSlideProps {
  type: 'image' | 'video' | 'custom';
  src: string;
  posterSrc?: string;
  content?: ReactNode;
  title?: string;
  subtitle?: string;
  cta?: CTAButton | CTAButton[];
  appDownloadSection?: AppDownloadSectionProps;
  slideClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  ctaClassName?: string;
  appDownloadTitleClassName?: string;
  appButtonClassName?: string;
  darkOverlay?: boolean;
  overlayOpacity?: number;
  onVideoClick?: () => void;
  modalEnabled?: boolean; 
  onCtaClick?: () => void;
}

const HeroSlide: React.FC<HeroSlideProps> = ({
  type,
  src,
  posterSrc,
  content,
  title,
  subtitle,
  cta,
  appDownloadSection,
  slideClassName = "w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover",
  titleClassName,
  subtitleClassName,
  contentClassName,
  ctaClassName,
  appDownloadTitleClassName,
  appButtonClassName,
  darkOverlay = true,
  overlayOpacity = 40,
  onVideoClick,
  modalEnabled = false, 
  onCtaClick
}) => {
  return (
    <div className="relative w-full h-full">
      <HeroSlideMedia
        type={type}
        src={src}
        posterSrc={posterSrc}
        className={slideClassName}
        alt={title || "Hero slide"}
        onVideoClick={onVideoClick}
        modalEnabled={modalEnabled}
      />
      
      <DarkOverlay enabled={darkOverlay} opacity={overlayOpacity} />
      
      <HeroSlideContent
        content={content}
        contentClassName={contentClassName}
        title={title}
        subtitle={subtitle}
        cta={cta}
        appDownloadSection={appDownloadSection}
        titleClassName={titleClassName}
        subtitleClassName={subtitleClassName}
        ctaClassName={ctaClassName}
        appDownloadTitleClassName={appDownloadTitleClassName}
        appButtonClassName={appButtonClassName}
        onCtaClick={onCtaClick}
      />
    </div>
  );
};

export default HeroSlide;