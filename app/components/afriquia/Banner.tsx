import React from "react";

export interface BannerProp {
  imageSrc: string;
}

const Banner = ({ imageSrc }: BannerProp) => {
  return (
    <section className="w-full h-full max-w-[2000px] mx-auto">
      <div className="w-full px-5 md:px-10 lg:px-20 h-full">
        <img src={imageSrc} alt="Banner" className="w-full h-full " />
      </div>
    </section>
  );
};

export default Banner;
