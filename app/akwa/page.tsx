"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GroupAnimation from "../components/animation/GroupAnimation";
import ChiffreAnimation from "../components/animation/ChiffreAnimation";
import CarouselAnimation from "../components/animation/CarouselAnimation";
import SectionAnimation from "../components/animation/SectionAnimation";
import ActualityAnimation from "../components/animation/ActualityAnimation";
import { TbArrowBarToUp } from "react-icons/tb";

const home = () => {
  const scrollToNavbar = () => {
    const navbarElement = document.getElementById("navbar");
    if (navbarElement) {
      navbarElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col gap-3 md:gap-6 lg:gap-10 xl:gap-[100px] 2xl:gap-[160px]">
      <section id="navbar">
        <Navbar />
      </section>
      <button
        onClick={scrollToNavbar}
        className="fixed bottom-28 right-4 md:right-8 lg:right-[66px] bg-[#19A0BF] text-white p-2 xl:p-3 rounded-lg shadow-md dark:hover:bg-[#45a6bc] hover:bg-[#052337] transition z-50"
      >
        <TbArrowBarToUp className="md:text-[20px] lg:text-[24px] xl:text-[28px] font-black"/>
      </button>
      <GroupAnimation />
      <ChiffreAnimation />
      <CarouselAnimation />
      <SectionAnimation
        title="Innovation"
        descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin."
        imgSrc="/section/innovationBg.jpeg"
        spee={false}
        pub={false}
      />
      <SectionAnimation
        title="Afrique"
        descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin. "
        imgSrc="/section/afriqueBg.png"
        spee={false}
        pub={false}
      />
      <ActualityAnimation />
      <Footer />
    </section>
  );
};

export default home;
