// import React, { ReactNode } from 'react';
// import HeroContent from '../../molecules/HeroContent/HeroContent';
// import AppDownloadSection from '../../molecules/AppDownloadSection/AppDownloadSection';
// import CTAButtons, { CTAButton } from '../../molecules/CTAButton/CTAButton';

// interface AppDownloadSectionProps {
//   title?: string;
//   googlePlayImageSrc?: string;
//   appStoreImageSrc?: string;
// }

// interface HeroSlideContentProps {
//   content?: ReactNode;
//   title?: string;
//   subtitle?: string;
//   cta?: CTAButton | CTAButton[];
//   appDownloadSection?: AppDownloadSectionProps;
//   titleClassName?: string;
//   subtitleClassName?: string;
//   ctaClassName?: string;
//   appDownloadTitleClassName?: string;
//   appButtonClassName?: string;
//   onCtaClick?: () => void;
// }

// const HeroSlideContent: React.FC<HeroSlideContentProps> = ({
//   content,
//   title,
//   subtitle,
//   cta,
//   appDownloadSection,
//   titleClassName = "text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] 2xl:text-[85px] font-bold leading-tight",
//   subtitleClassName = "text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold",
//   ctaClassName = "px-6 py-2 bg-[#D1FF33] text-black font-bold rounded-full",
//   appDownloadTitleClassName = "text-[14px] sm:text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px] font-extrabold",
//   appButtonClassName = "w-16 sm:w-24 md:w-28 lg:w-32 xl:w-44 2xl:w-auto",
//   onCtaClick
// }) => {
//   return (
//     <div className="absolute inset-0 flex items-center px-5 md:px-10 lg:px-20 2xl:px-24 z-10">
//       <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 text-white">
//         {content ? (
//           content
//         ) : (
//           <>
//             {(title || subtitle) && (
//               <HeroContent
//                 title={title || ""}
//                 subtitle={subtitle || ""}
//                 titleClassName={titleClassName}
//                 subtitleClassName={subtitleClassName}
//               />
//             )}

//             <CTAButtons
//               ctas={cta}
//               defaultClassName={ctaClassName}
//             />

//             {appDownloadSection && (
//               <AppDownloadSection
//                 title={appDownloadSection.title || ""}
//                 googlePlayImageSrc={appDownloadSection.googlePlayImageSrc || ""}
//                 appStoreImageSrc={appDownloadSection.appStoreImageSrc || ""}
//                 titleClassename={appDownloadTitleClassName}
//                 buttonClassename={appButtonClassName}
//               />
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HeroSlideContent;

import React, { ReactNode } from "react";
import { CTAButton } from "../../molecules/CTAButton/CTAButton";

interface AppDownloadSectionProps {
  title?: string;
  googlePlayImageSrc?: string;
  appStoreImageSrc?: string;
}

interface HeroSlideContentProps {
  content?: ReactNode;
  title?: string;
  subtitle?: string;
  cta?: CTAButton | CTAButton[];
  appDownloadSection?: AppDownloadSectionProps;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  ctaClassName?: string;
  appDownloadTitleClassName?: string;
  appButtonClassName?: string;
  onCtaClick?: () => void;
}

const HeroSlideContent: React.FC<HeroSlideContentProps> = ({
  content,
  title,
  subtitle,
  cta,
  appDownloadSection,
  titleClassName = "text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] font-bold leading-tight",
  subtitleClassName = "text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] font-medium",
  contentClassName,
  ctaClassName = "px-6 py-2 mt-4 rounded-full bg-white text-black font-bold inline-block",
  appDownloadTitleClassName = "text-[14px] sm:text-[20px] lg:text-[26px] font-bold",
  appButtonClassName = "w-auto",
  onCtaClick,
}) => {
  // Handle rendering a single CTA button
  const renderSingleCta = (button: CTAButton) => {
    // If no URL and onCtaClick is provided, use the click handler
    if (!button.url && onCtaClick) {
      return (
        <button
          className={`${ctaClassName || ""} ${button.className || ""}`}
          onClick={onCtaClick}
        >
          {button.label}
        </button>
      );
    }

    // Otherwise, render regular link
    return (
      <a
        href={button.url || "#"}
        className={`${ctaClassName || ""} ${button.className || ""}`}
        target="_self"
      >
        {button.label}
      </a>
    );
  };

  // When rendering CTA buttons
  const renderCta = () => {
    if (!cta) return null;

    if (Array.isArray(cta)) {
      return (
        <div className="flex flex-wrap gap-4 mt-4">
          {cta.map((button, index) => (
            <div key={index}>{renderSingleCta(button)}</div>
          ))}
        </div>
      );
    }

    return <div className="mt-4">{renderSingleCta(cta)}</div>;
  };

  // Render app download section
  const renderAppDownloadSection = () => {
    if (!appDownloadSection) return null;

    return (
      <div className="mt-8">
        {appDownloadSection.title && (
          <h3 className={appDownloadTitleClassName}>
            {appDownloadSection.title}
          </h3>
        )}
        <div className="flex flex-row items-center gap-4 mt-4">
          {appDownloadSection.googlePlayImageSrc && (
            <a href="#" className={appButtonClassName}>
              <img
                src={appDownloadSection.googlePlayImageSrc}
                alt="Download on Google Play"
                className="w-full h-auto"
              />
            </a>
          )}
          {appDownloadSection.appStoreImageSrc && (
            <a href="#" className={appButtonClassName}>
              <img
                src={appDownloadSection.appStoreImageSrc}
                alt="Download on App Store"
                className="w-full h-auto"
              />
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-20 w-[85%] text-white z-10">
      {title && <h2 className={titleClassName}>{title}</h2>}
      {subtitle && <p className={`${subtitleClassName} mt-4`}>{subtitle}</p>}
      {renderCta()}
      {content && <div className={contentClassName}>{content}</div>}
      {renderAppDownloadSection()}
    </div>
  );
};

export default HeroSlideContent;
