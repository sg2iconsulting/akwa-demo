import React from "react";

const Banner = ({ imageSrc }: any) => {
  return (
    <section className="w-full h-full">
      <div className="w-full h-full max-w-[2000px] mx-auto flex px-3 md:px-7 xl:px-10 2xl:px-20">
        <img src={imageSrc} alt="Banner" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Banner;
