import React from "react";
import Navbar from "../Navbar/Navbar";
import VideoSwiper from "../../VideoSwiper/VideoSwiper";

const NavbarSlides = () => {
  return (
    <section className="w-full h-full relative">
      <div className="absolute top-0 left-0 z-50 w-full">
        <Navbar />
      </div>
      <VideoSwiper />
    </section>
  );
};

export default NavbarSlides;
