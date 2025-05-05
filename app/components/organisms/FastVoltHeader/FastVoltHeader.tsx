import React from "react";
import HeroSection, { SlideContent } from "../HeroSection/HeroSection";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import { cn } from "@/utils/cn";

interface FastVoltHeaderProps {
  slides?: SlideContent[];
  backgroundImageClassename?: string;
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

const FastVoltHeader: React.FC<FastVoltHeaderProps> = ({
  slides,
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
    <div className="mt-10 lg:mt-0">
      {/* <HeroSection
        slides={slides}
        backgroundImageClassename={backgroundImageClassename}
        title={title || ""}
        subtitle={subtitle || ""}
        appDownloadTitle={appDownloadTitle || ""}
        googlePlayImageSrc={googlePlayImageSrc || ""}
        appStoreImageSrc={appStoreImageSrc || ""}
        appDownloadTitleClassename={cn(
          appDownloadTitleClassename,
          "text-[14px] sm:text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px] font-extrabold"
        )}
        heroTitleClassename={cn(
          heroTitleClassename,
          "text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] 2xl:text-[85px] 3xl:text-[100px] font-bold leading-tight xl:mt-8 2xl:mt-12 3xl:mt-16"
        )}
        heroSubTitleClassename={cn(
          heroSubTitleClassename,
          "text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold"
        )}
        appButtonClassename={cn(
          appButtonClassename,
          "w-16 sm:w-24 md:w-28 lg:w-32 xl:w-44 2xl:w-auto"
        )}
      /> */}
    </div>
  );
};

export default FastVoltHeader;
