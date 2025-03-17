import React from "react";
import HeroBackground from "../../atoms/HeroBackground/HeroBackground";
import HeroContent from "../../molecules/HeroContent/HeroContent";
import AppDownloadSection from "../../molecules/AppDownloadSection/AppDownloadSection";

interface HeroSectionProps {
  backgroundImageSrc: string;
  backgroundImageClassename?: string;
  title: string;
  subtitle: string;
  appDownloadTitle: string;
  googlePlayImageSrc: string;
  appStoreImageSrc: string;
  appDownloadTitleClassename?: string;
  heroTitleClassename?: string;
  heroSubTitleClassename?: string;
  appButtonClassename?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImageSrc,
  backgroundImageClassename,
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
  return (
    <div className="w-full h-full relative">
      <HeroBackground imageSrc={backgroundImageSrc} className={backgroundImageClassename} />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center sm:justify-normal xl:justify-center text-center text-white"></div>
      
      <div className="w-full h-full absolute inset-0 flex items-center px-5 md:px-10 lg:px-20 2xl:px-24">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 text-white">
          <HeroContent
            title={title}
            subtitle={subtitle}
            titleClassName={heroTitleClassename}
            subtitleClassName={heroSubTitleClassename}
          />
          
          <AppDownloadSection
            title={appDownloadTitle}
            googlePlayImageSrc={googlePlayImageSrc}
            appStoreImageSrc={appStoreImageSrc}
            titleClassename={appDownloadTitleClassename}
            buttonClassename={appButtonClassename}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 