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
    <section className="flex flex-col gap-6 md:gap-10 lg:gap-14 xl:gap-[100px] 2xl:gap-[160px]">
      <section id="navbar">
        <Navbar />
      </section>
      <button
        onClick={scrollToNavbar}
        className="fixed bottom-28 right-4 md:right-8 lg:right-[66px] bg-[#19A0BF] text-white p-2 xl:p-3 rounded-lg shadow-md dark:hover:bg-[#45a6bc] hover:bg-[#052337] transition z-50"
      >
        <TbArrowBarToUp className="md:text-[20px] lg:text-[24px] xl:text-[28px] font-black" />
      </button>
      <GroupAnimation />
      <ChiffreAnimation />
      <CarouselAnimation
        slides={[
          {
            image: "/akwagroup/images/carburant.png",
          },
          {
            image: "/akwagroup/images/dev.png",
          },
          {
            image: "/akwagroup/images/transition.png",
          },
          {
            image: "/akwagroup/images/fluides.png",
          },
          {
            image: "/akwagroup/images/gaz.png",
          },
          {
            image: "/akwagroup/images/carburant.png",
          },
          {
            image: "/akwagroup/images/immobilier.png",
          },
          {
            image: "/akwagroup/images/dev.png",
          },
          {
            image: "/akwagroup/images/transition.png",
          },
          {
            image: "/akwagroup/images/fluides.png",
          },
          {
            image: "/akwagroup/images/gaz.png",
          },
          {
            image: "/akwagroup/images/immobilier.png",
          },
        ]}
        speedy={false}
        fvolt={false}
        title="6 Pôles"
        descrip="diversifiés pour apporter des réponses globales"
      />
      <div className="mt-5 flex flex-col gap-6 md:gap-10 lg:gap-14 xl:gap-[100px] 2xl:gap-[160px]">
        <SectionAnimation
          title="Innovation"
          descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin."
          imgSrc="/Section/innovationBg.jpeg"
          spee={false}
          pub={false}
        />
        <SectionAnimation
          title="Afrique"
          descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin. "
          imgSrc="/Section/AfriqueBg.png"
          spee={false}
          pub={false}
        />
      </div>
      <ActualityAnimation />
      <Footer />
    </section>
  );
};

export default home;
