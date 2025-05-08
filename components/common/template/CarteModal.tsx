import React, { useState } from "react";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import KeyFigure from "../molecule/KeyFigure";
import VideoModal from "../organisme/VideoModal";

interface CounterItem {
  value: number;
  duration: number;
  paragraphs: string[];
  sign?: string;
  className?: string;
  signClassename?: string;
  valueClassename?: string;
  paragraphClassename?: string;
  deviderClassename?: string;
}

interface CarteModalProps {
  isVisible: boolean;
  onClose: () => void;
  imgSrc: string;
  videoSrc?: string;
  videoTitle?: string;
  modalTitle?: string;
  buttonLabel?: string;
  buttonClassName?: string;
  imageClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  closeButtonLabel?: string;
  closeButtonClassName?: string;
  zIndex?: number;
  counterItems?: CounterItem[];
}

const CarteModal: React.FC<CarteModalProps> = ({
  isVisible,
  onClose,
  imgSrc = "/akwagroup/images/akwaCarte.png",
  videoSrc = "https://sg2i.com/wp-content/uploads/2024/12/AkwaAfrica.mp4",
  videoTitle = "Akwa Afrique",
  modalTitle = "Chiffres Clés",
  buttonLabel = "Voir la vidéo",
  buttonClassName = "w-28 h-7 md:w-36 md:h-10 xl:w-52 xl:h-12 2xl:w-[290px] 2xl:h-[67px] text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px]",
  imageClassName = "w-full h-full object-contain",
  contentClassName = "w-full md:w-[250px] lg:w-[400px] bg-[#052337] text-white py-6 sm:py-8 md:py-6 xl:py-10 px-4 sm:px-6 md:px-8 flex flex-col gap-3 lg:gap-5 xl:gap-10 justify-evenly md:items-center",
  titleClassName = "text-[14px] sm:text-[16px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] font-black",
  closeButtonLabel = "×",
  closeButtonClassName = "absolute top-4 right-4 text-black text-lg lg:text-3xl xl:text-4xl 2xl:text-6xl",
  zIndex,
  counterItems = [
    {
      value: 20000,
      duration: 3,
      paragraphs: ["Emplois directs et", "indirects"],
      sign: "+",
      className:
        "flex flex-col items-center justify-center gap-1 xl:gap-3 md:w-20 lg:w-32 xl:w-40 2xl:w-48",
      valueClassename:
        "text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[24px] 2xl:text-[32px] font-bold",
      signClassename:
        "text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[24px] 2xl:text-[32px]",
      paragraphClassename:
        "text-center text-[4px] sm:text-[8px] lg:text-[12px] xl:text-[16px] 2xl:text-[20px] font-semibold",
      deviderClassename: "w-4 xl:w-16 2xl:w-20 bg-white",
    },
    {
      value: 2,
      duration: 3,
      paragraphs: ["Sociétés cotées en", "bourse"],
      className:
        "flex flex-col items-center justify-center gap-1 xl:gap-3 md:w-20 lg:w-32 xl:w-40 2xl:w-48",
      valueClassename:
        "text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[24px] 2xl:text-[32px] font-bold",
      signClassename:
        "text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[24px] 2xl:text-[32px]",
      paragraphClassename:
        "text-center text-[4px] sm:text-[8px] lg:text-[12px] xl:text-[16px] 2xl:text-[20px] font-semibold",
      deviderClassename: "w-4 xl:w-16 2xl:w-20 bg-white",
    },
    {
      value: 70,
      duration: 3,
      paragraphs: ["Sociétés"],
      className:
        "flex flex-col items-center justify-center gap-1 xl:gap-3 md:w-20 lg:w-32 xl:w-40 2xl:w-48",
      valueClassename:
        "text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[24px] 2xl:text-[32px] font-bold",
      signClassename:
        "text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[24px] 2xl:text-[32px]",
      paragraphClassename:
        "text-center text-[4px] sm:text-[8px] lg:text-[12px] xl:text-[16px] 2xl:text-[20px] font-semibold",
      deviderClassename: "w-4 xl:w-16 2xl:w-20 bg-white",
    },
    {
      value: 40,
      duration: 3,
      paragraphs: ["Marques phares"],
      sign: "+",
      className:
        "flex flex-col items-center justify-center gap-1 xl:gap-3 md:w-20 lg:w-32 xl:w-40 2xl:w-48",
      valueClassename:
        "text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[24px] 2xl:text-[32px] font-bold",
      signClassename:
        "text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[24px] 2xl:text-[32px]",
      paragraphClassename:
        "text-center text-[4px] sm:text-[8px] lg:text-[12px] xl:text-[16px] 2xl:text-[20px] font-semibold",
      deviderClassename: "w-4 xl:w-16 2xl:w-20 bg-white",
    },
  ],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      style={{ zIndex }}
      onClick={onClose}
    >
      <div
        className="relative w-[250px] sm:w-[400px] md:w-[600px] lg:w-[750px] xl:w-auto 2xl:w-[1070px] mx-4 sm:mx-8 lg:mx-16 xl:mx-24 rounded-lg xl:rounded-[20px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row-reverse xl:h-auto h-full w-full">
          <div className="relative flex flex-col w-full xl:w-[670px] 2xl:w-[850px] bg-white">
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[450px] xl:h-[600px] 2xl:h-[780px]">
              <Image
                src={imgSrc}
                alt="Carte Modal"
                imageClassename={imageClassName}
              />
            </div>
            <div className="bg-white flex justify-center items-center h-[60px] xl:h-[102px] 2xl:pb-10">
              <Button
                onClick={() => setIsModalOpen(true)}
                className={buttonClassName}
              >
                {buttonLabel}
              </Button>
            </div>
          </div>

          <div className={contentClassName}>
            <Heading tag="h2" className={titleClassName}>
              {modalTitle}
            </Heading>
            <div className="flex justify-between md:items-baseline md:flex-col gap-6 xl:gap-10">
              {counterItems.map((item, index) => (
                <KeyFigure
                  key={index}
                  value={item.value}
                  duration={item.duration}
                  paragraphs={item.paragraphs}
                  sign={item.sign}
                  className={item.className}
                  signClassename={item.signClassename}
                  valueClassename={item.valueClassename}
                  paragraphClassename={item.paragraphClassename}
                  deviderClassename={item.deviderClassename}
                />
              ))}
            </div>
          </div>
        </div>

        <Button onClick={onClose} className={closeButtonClassName}>
          {closeButtonLabel}
        </Button>
        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          videoSrc={videoSrc}
          videoTitle={videoTitle}
        />
      </div>
    </div>
  );
};

export default CarteModal;
