import React from "react";

const Banner = ({ imageSrc }: any) => {
  return (
    <section className="w-full max-w-[1800px] mx-auto my-5 xl:my-16 px-10 2xl:px-0">
      <div className="">
        <img src={imageSrc} alt="Banner" className="" />
      </div>
    </section>
  );
};

export default Banner;
