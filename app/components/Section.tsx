import React from "react";

export interface SectonProps {
    title: string;
    descrip: string;
    imgSrc: string;
}

const Section = ({title, descrip, imgSrc}: SectonProps) => {
  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto">
      <div className="w-full h-full p-5 md:px-10 lg:px-20">
        <div
          className="w-full h-full bg-cover bg-center rounded-3xl p-3 text-white flex flex-col justify-center gap-2 aspect-[3/1] "
          style={{ backgroundImage: `url(${imgSrc})` }}
        >
          <h2 className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black md:ml-4 lg:ml-8 xl:ml-16">{title}</h2>
          <p className="font-medium text-[8px] sm:text-[11px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] sm:w-2/3 md:ml-4 lg:ml-8 xl:ml-16">
           {descrip}
          </p>
          <button className="w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-48 2xl:h-16 text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[20px] mt-1 sm:mt-2 md:mt-3 lg:mt-7 xl:mt-12 md:ml-4 lg:ml-8 xl:ml-16">
            voir plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section;
