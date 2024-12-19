import React from "react";
import FeedBack from "./FeedBack";

const FeedBacks = [
  {
    id: 1,
    image: "/promo1.jpg",
  },
  {
    id: 2,
    image: "/promo2.jpg",
  },
  {
    id: 3,
    image: "/promo3.jpg",
  },
];

const FeedBacksList = () => {
  return (
    <div className="font-poppins w-full max-w-[2000px] mx-auto h-full">
      <div className="w-full p-5 md:px-10 lg:px-20 h-full flex gap-10 justify-center items-center flex-wrap">
          {FeedBacks.map((feedBack, id) => (
              <div key={id}>
                <FeedBack/>
              </div>
          ))}
      </div>
    </div>
  );
};

export default FeedBacksList;
