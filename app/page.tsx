"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GroupAnimation from "./components/animation/GroupAnimation";
import ChiffreAnimation from "./components/animation/ChiffreAnimation";
import CarouselAnimation from "./components/animation/CarouselAnimation";
import SectionAnimation from "./components/animation/SectionAnimation";
import ActualityAnimation from "./components/animation/ActualityAnimation";
import { TbArrowBarToUp } from "react-icons/tb";

const home = () => {
  const scrollToNavbar = () => {
    const navbarElement = document.getElementById("navbar");
    if (navbarElement) {
      navbarElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col gap-6 lg:gap-10 xl:gap-[100px] 2xl:gap-[165px]">
      <section id="navbar">
        <Navbar />
      </section>
      <button
        onClick={scrollToNavbar}
        className="fixed bottom-28 right-6 bg-[#19A0BF] text-white p-3 rounded-lg shadow-md dark:hover:bg-[#45a6bc] hover:bg-[#052337] transition z-50"
      >
        <TbArrowBarToUp style={{ fontSize: "28px", fontWeight: "900" }} className=""/>
      </button>
      <GroupAnimation />
      <ChiffreAnimation />
      <CarouselAnimation />
      <SectionAnimation
        title="Innovation"
        descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin."
        imgSrc="/section/innovationBg.jpeg"
      />
      <SectionAnimation
        title="Afrique"
        descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin. "
        imgSrc="/section/afriqueBg.png"
      />
      <ActualityAnimation />
      <Footer />
    </section>
  );
};

export default home;
