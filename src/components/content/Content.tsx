import React from "react";
import Slider from "./Slider";
import Section from "./Section";
import Service from "./Service";
import Actuality from "../actuality/Actuality";
import Banner from "./Banner";
import Footer from "../Footer";
import AnimatedSection from "./AnimatedSection";
import AnimatedBanner from "./AnimatedBanner";
import AnimatedActuality from "./AnimatedActuality";
import AnimatedService from "./AnimatedService";

const Content = () => {
  return (
    <div>
      <Slider />
      <AnimatedSection
        imageSrc="/section/citerne.png"
        title="GPL en citerne"
        text="Afriquia Gaz optimise les qualités du gaz propane grâce à des citernes, aériennes ou enterrées, dont la livraison et la mise en service sont assurées par des équipes réactives. Ainsi conditionné, le gaz propane associe performance et souplesse d'utilisation pour satisfaire tous les besoins."
        btn={true}
      />
      <AnimatedBanner imageSrc="/banner.png" />
      <AnimatedSection
        imageSrc="/section/citerne.png"
        title="GPL en bouteilles"
        text="Leader marocain de la distribution de gaz de pétrole liquéfié, butane et propane, Afriquia Gaz offre des solutions performantes en énergie qui couvrent aussi bien les besoins domestiques que professionnels. Avec six marques commercialisées : Afriquia Gaz, Tissir Gaz, Campingaz, Ultragaz, National Gaz et Butafric, la société Afriquia Gaz nourrit une ambition : la satisfaction de ses clients."
        btn={false}
      />
      <AnimatedSection
        imageSrc="/section/telemetrie.png"
        title="Solution de télémétrie"
        text=""
        btn={false}
      />
      <AnimatedActuality />
      <AnimatedService />
    </div>
  );
};

export default Content;
