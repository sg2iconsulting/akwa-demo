import React from "react";

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
  buttonBackgroundColor ="#8BBA25",
  buttonLabel = "S'inscrire",
  buttonTextColor = "white",
}: BannerInscriptionProps) => {
  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto">
      <div className="w-full sm:h-full px-5 md:px-10 lg:px-20 relative h-[200px]  ">
        <img src={imageBackgroundSource} className={imageClassName} />
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center gap-y-4 sm:justify-between sm:items-center px-5 md:px-10 2xl:px-20 text-white">
          <div className="leading-tight px-5 md:pl-10 lg:pr-5 lg:px-20 xl:pl-28 flex flex-col gap-2">
            <div>
              <p className="text-[13px] md:text-[16px] lg:text-[20px] xl:text-[32px] 2xl:text-[48px] font-bold">
                Inscrivez-vous à notre{" "}
              </p>
              <p className="text-[13px] md:text-[16px] lg:text-[20px] xl:text-[32px] 2xl:text-[48px] font-bold">
                Newsletter
              </p>
            </div>
            <div>
              <p className="font-medium text-[8px] md:text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[24px]">
                Inscrivez vous à notre newsletter pour recevoir les
              </p>
              <p className="font-medium text-[8px] md:text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[24px]">
                dernières nouvelles et des offres exclusives
              </p>
            </div>
          </div>
          <div className="relative w-[250px] sm:w-[350px] lg:w-[490px] xl:w-[600px] 2xl:w-[725px] text-black dark:text-white font-medium text-[8px] sm:text-[11px] lg:text-[13px] 2xl:text-[18px] px-5  md:pr-10 lg:pr-20 xl:pr-28">
            <input
              type="text"
              placeholder="Votre adresse e-mail"
              className="w-full px-2 py-2 pr-20 lg:pr-[105px] xl:pr-[120px] lg:py-[10px] xl:py-[16px] 2xl:px-4 2xl:pr-44 2xl:py-5 border rounded-full focus:outline-none"
            />
            <button
              style={{
                backgroundColor: buttonBackgroundColor,
                color: buttonTextColor,
              }}
              className="absolute inset-y-1 right-1 px-3 2xl:px-6 py-[1px] lg:px-4 xl:px-6 xl:py-1 rounded-full font-bold 2xl:w-40 mr-5 md:mr-10 lg:mr-20 xl:mr-28"
              type="button"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerInscription;
