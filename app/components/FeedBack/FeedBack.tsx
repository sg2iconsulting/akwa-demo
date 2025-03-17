import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export interface FeedBackProps {
  fullName: string;
  comment: string;
  fullNameTextColor: string;
  commentTextColor: string;
  lineColor: string;
}

const FeedBack = ({
  fullName,
  comment,
  fullNameTextColor,
  commentTextColor,
  lineColor
}: FeedBackProps) => {
  return (
    <div className="w-[200px] md:w-[269px] xl:w-[349px] flex justify-center items-center p-2 h-full mx-auto">
      <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 justify-center items-center">
        <div className="flex flex-col justify-center items-center p-2 gap-3">
          <FaQuoteLeft className="text-lg md:text-xl lg:text-3xl" />
          <p
            className="text-xs md:text-[16px] md:leading-6 xl:text-xl text-center line-clamp-4"
            style={{
              color: commentTextColor || undefined,
            }}
          >
            {comment}
          </p>
        </div>
        <hr
          className="w-[100px] md:w-[150px] lg:w-[200px] dark:border-white border-[#3e3e3e] "
          style={{
            border: lineColor,
          }}
        />
        <div className="flex flex-col justify-center items-center p-2 gap-3">
          <p
            className="text-xs md:text-[16px] xl:text-lg font-bold"
            style={{
              color: fullNameTextColor || undefined,
            }}
          >
            {fullName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
