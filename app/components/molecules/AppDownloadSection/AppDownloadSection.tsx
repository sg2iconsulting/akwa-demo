import React from "react";
import Heading from "../../atoms/Heading/Heading";
import AppDownloadButton from "../../atoms/AppDownloadButton/AppDownloadButton";

interface AppDownloadSectionProps {
  title: string;
  googlePlayImageSrc: string;
  appStoreImageSrc: string;
  titleClassename?: string;
  buttonClassename?: string;
}

const AppDownloadSection: React.FC<AppDownloadSectionProps> = ({
  title,
  googlePlayImageSrc,
  appStoreImageSrc,
  titleClassename = "text-[14px] sm:text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px] font-extrabold",
  buttonClassename = "w-16 sm:w-24 md:w-28 lg:w-32 xl:w-44 2xl:w-auto",
}) => {
  return (
    <div className="flex flex-col gap-y-2 md:gap-y-3 lg:gap-y-4 xl:gap-y-5 2xl:gap-y-6">
      <Heading tag="h2" className={titleClassename} >{title}</Heading>
      <div className="flex gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
        <AppDownloadButton
          imageSrc={googlePlayImageSrc}
          altText="Get on Google Play"
          className={buttonClassename}
        />
        <AppDownloadButton
          imageSrc={appStoreImageSrc}
          altText="Download on App Store"
          className={buttonClassename}
        />
      </div>
    </div>
  );
};

export default AppDownloadSection; 