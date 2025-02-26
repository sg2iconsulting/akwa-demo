import React from "react";
import Image from "../../atoms/Image/Image";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import InputSectionBanner from "../../molecules/InputSectionBanner/InputSectionBanner";

export interface BannerInscriptionProps {
  imageBackgroundSource: string;
  imageClassName?: string;
  buttonLabel: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
}

const BannerInscription = ({
  imageBackgroundSource = "/fastVolt/inscripBanner.png",
  imageClassName = "object-cover w-full h-full bg-center rounded-[15px]",
  buttonBackgroundColor = "#8BBA25",
  buttonLabel = "S'inscrire",
  buttonTextColor = "white",
}: BannerInscriptionProps) => {
  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto">
      <div className="w-full sm:h-full px-5 md:px-10 lg:px-20 relative h-[200px]">
        <Image
          src={imageBackgroundSource}
          imageClassename={imageClassName}
          containerClassname="w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center gap-y-4 sm:justify-between sm:items-center px-5 md:px-10 2xl:px-20 text-white">
          <div className="leading-tight px-5 md:pl-10 lg:pr-5 lg:px-20 xl:pl-28 flex flex-col gap-2">
            <div className="w-2/3">
              <Heading tag="h2" className="text-[13px] md:text-[16px] lg:text-[20px] xl:text-[32px] 2xl:text-[48px] font-bold">
                Inscrivez-vous à notre Newsletter
              </Heading>
            </div>
            <div className="w-2/3">
              <Paragraph className="font-medium text-[8px] md:text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[24px]">
                Inscrivez vous à notre newsletter pour recevoir les dernières nouvelles et des offres exclusives
              </Paragraph>
            </div>
          </div>
          <InputSectionBanner
            placeholder="Votre adresse e-mail"
            buttonLabel={buttonLabel}
            buttonBackgroundColor={buttonBackgroundColor}
            buttonTextColor={buttonTextColor}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerInscription;