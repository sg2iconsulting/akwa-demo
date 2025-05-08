import React, { ReactNode } from "react";
import { CTAButton } from "./CTAButton";

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
}) => {
  const renderSingleCta = (button: CTAButton) => {
    if (!button.url && button.onClick) {
      return (
        <button
          className={`${ctaClassName || ""} ${button.className || ""}`}
          onClick={button.onClick}
        >
          {button.label}
        </button>
      );
    }

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
