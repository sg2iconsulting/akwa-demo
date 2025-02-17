import React from "react";
import ImageFadeShow from "../ImageFadeShow/ImageFadeShow";

export interface FadeSectionProps {
  images: string[][];
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
}

const ImagesFadeShowSection = ({
  images,
  containerClassName = "flex gap-2 w-full h-full md:w-1/2 md:justify-end my-auto",
  containerStyle,
}: FadeSectionProps) => {
  return (
    <div className={containerClassName} style={containerStyle || {}}>
      <div className="flex flex-col gap-2 h-full">
        <div className="w-full max-w-[488.87px] h-auto aspect-[488.87/266.99] overflow-hidden">
          <ImageFadeShow imgLinks={images[0]} duration={6000} />
        </div>
        <div className="w-full max-w-[488.87px] h-auto aspect-[488.87/325.92] overflow-hidden">
          <ImageFadeShow imgLinks={images[1]} duration={6000} />
        </div>
      </div>

      <div className="flex flex-col gap-2 h-full">
        <div className="flex gap-2 w-full h-1/3 xl:mb-[2px] 2xl:mb-[4px]">
          <div className="w-full max-w-[174.6px] h-auto aspect-square overflow-hidden">
            <ImageFadeShow imgLinks={images[2]} duration={6000} />
          </div>
          <div className="w-full max-w-[174.6px] h-auto aspect-square overflow-hidden">
            <ImageFadeShow imgLinks={images[3]} duration={6000} />
          </div>
        </div>
        <div className="w-full max-w-[363.02px] h-auto aspect-[363.02/196.42] overflow-hidden">
          <ImageFadeShow imgLinks={images[4]} duration={6000} />
        </div>
        <div className="w-full max-w-[363.02px] h-auto aspect-[363.02/205.15] overflow-hidden">
          <ImageFadeShow imgLinks={images[5]} duration={6000} />
        </div>
      </div>
    </div>
  );
};

export default ImagesFadeShowSection;
