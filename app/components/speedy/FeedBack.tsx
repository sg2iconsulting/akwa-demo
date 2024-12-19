import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const FeedBack = () => {
  return (
    <div className="w-[249px] md:w-[299px] lg:w-[349px] flex justify-center items-center p-2 ">
      <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 justify-center items-center ">
        <div className="flex flex-col justify-center items-center p-2 gap-3">
          <FaQuoteLeft className="text-lg md:text-xl lg:text-3xl"/>
          <p className="text-sm md:text-lg lg:text-xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            dignissim nibh eu ex gravida interdum.
          </p>
        </div>
        <hr className="w-[100px] md:w-[150px] lg:w-[200px] dark:border-white border-[#3e3e3e] "/>
        <div className="flex flex-col justify-center items-center p-2 gap-3">
            <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] bg-[#787878] rounded-full"></div>
            <p className="text-sm md:text-[16px] lg:text-lg ">Nom et Prénom</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
