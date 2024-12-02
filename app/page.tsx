import React from "react";
import Navbar from "./components/Navbar";
import Group from "./components/Group";
import Chiffre from "./components/Chiffre";
import Footer from "./components/Footer";
import Actuality from "./components/actuality/Actuality";
import Section from "./components/Section";
import TrendingSlider from "./components/Carousel";

const home = () => {
  return (
    <section className="flex flex-col gap-6 lg:gap-10 xl:gap-16">
      <Navbar />
      <Group />
      <Chiffre />
      <TrendingSlider />
      <Section
        title="Innovation"
        descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin."
        imgSrc="/section/innovationBg.jpeg"
      />
      <Section
        title="Afrique"
        descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin. "
        imgSrc="/section/afriqueBg.png"
      />
      <Actuality />

      <Footer />
    </section>
  );
};

export default home;
