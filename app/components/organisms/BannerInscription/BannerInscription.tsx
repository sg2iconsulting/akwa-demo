import React from "react";
import Image from "../../atoms/Image/Image";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import InputSectionBanner from "../../molecules/InputSectionBanner/InputSectionBanner";
import { cn } from "@/utils/cn";

export interface BannerInscriptionProps {
  imageBackgroundSource: string;
  imageClassName?: string;
  title: string;
  titleClassename?: string;
  description?: string;
  descriptionClassename?: string;
  buttonLabel: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  buttonClassename?: string;
  inputClassename?: string;
}

const BannerInscription = ({
  imageBackgroundSource = "/fastVolt/inscripBanner.png",
  imageClassName,
  title,
  titleClassename,
  description,
  descriptionClassename,
  buttonBackgroundColor = "#8BBA25",
  buttonLabel = "S'inscrire",
  buttonClassename,
  inputClassename,
  buttonTextColor = "white",
}: BannerInscriptionProps) => {
  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto">
      <div className="w-full sm:h-full px-5 md:px-10 lg:px-20 relative h-[200px]">
        <Image
          src={imageBackgroundSource}
          imageClassename={cn(
            "object-cover w-full h-full bg-center rounded-[15px]",
            imageClassName
          )}
        />
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center gap-y-4 sm:justify-between sm:items-center px-5 md:px-10 2xl:px-20 text-white">
          <div className="leading-tight px-5 md:pl-10 lg:pr-5 lg:px-20 xl:pl-28 flex flex-col gap-2">
            <div className="w-2/3">
              <Heading
                tag="h2"
                className={cn(
                  "text-[13px] md:text-[16px] lg:text-[20px] xl:text-[32px] 2xl:text-[48px] font-bold",
                  titleClassename
                )}
              >
                {title}
              </Heading>
            </div>
            <div className="w-2/3">
              <Paragraph
                className={cn(
                  "font-medium text-[8px] md:text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[24px]",
                  descriptionClassename
                )}
              >
                {description}
              </Paragraph>
            </div>
          </div>
          <InputSectionBanner
            placeholder="Votre adresse e-mail"
            buttonLabel={buttonLabel}
            buttonBackgroundColor={buttonBackgroundColor}
            buttonTextColor={buttonTextColor}
            buttonClassename={cn(
              "absolute inset-y-1 right-1 px-3 2xl:px-6 py-[1px] lg:px-4 xl:px-6 xl:py-1 rounded-full font-bold 2xl:w-40 bg-[#8BBA25] text-white mr-5 md:mr-10 lg:mr-20 xl:mr-28",
              buttonClassename
            )}
            inputClassName={cn(
              "w-full px-2 py-2 pr-20 lg:pr-[105px] xl:pr-[120px] lg:py-[10px] xl:py-[16px] 2xl:px-4 2xl:pr-44 2xl:py-5 border rounded-full focus:outline-none",
              inputClassename
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerInscription;
