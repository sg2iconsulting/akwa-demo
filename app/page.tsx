import React from "react";
import Navbar from "./components/Navbar";
import Group from "./components/Group";
import Chiffre from "./components/Chiffre";
import Footer from "./components/Footer";
import Actuality from "./components/actuality/Actuality";
import Section from "./components/Section";
import TrendingSlider from "./components/Carousel";
import GroupAnimation from "./components/animation/GroupAnimation";
import ChiffreAnimation from "./components/animation/ChiffreAnimation";
import CarouselAnimation from "./components/animation/CarouselAnimation";
import SectionAnimation from "./components/animation/SectionAnimation";
import ActualityAnimation from "./components/animation/ActualityAnimation";

const home = () => {
  return (
    <section className="flex flex-col gap-6 lg:gap-10 xl:gap-[100px] 2xl:gap-[165px]">
      <Navbar />
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
