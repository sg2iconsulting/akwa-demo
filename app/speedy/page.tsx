"use client";
import React from "react";
import Navbar from "../components/speedy/Navbar";
import Tabs from "../components/speedy/TabSections";
import Section from "../components/Section";
import Actuality from "../components/actuality/Actuality";
import Footer from "../components/speedy/Footer";
import PromosSlider from "../components/speedy/PromosSlider";
import FeedBacksList from "../components/speedy/FeedBacksList";
import MarquesSlider from "../components/speedy/MarquesSlider";
import PubImage from "../components/speedy/PubImage";
import SelectOptions from "../components/speedy/SelectOptionsMb";
const home = () => {
  return (
    <section className="flex flex-col gap-10 xl:gap-24">
      <div>
        <Navbar />
        <SelectOptions />
      </div>
      <Tabs />
      <MarquesSlider />
      <Section
        title="Conseil pratique"
        descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin."
        imgSrc="/speedy/section/sec-1.png"
        spee={true}
        pub={false}
      />
      <Section
        title="Qui sommes-nous?"
        descrip="Le concept de fast-fit automobile Speedy a été implanté au Maroc en 1999 par AKWA Group dans le cadre d'un contrat de master franchise avec Speedy France S.A.S."
        imgSrc="/speedy/section/sec-2.png"
        spee={true}
        pub={false}
      />
      <PubImage />
      <PromosSlider />
      <FeedBacksList />
      <Actuality
        imgSrc={"/speedy/actu.png"}
        color="bg-[#2B3773]"
        btnColor="bg-[#3B7AB7]"
        title="Cet été, les offres exceptionnelles de Speedy font leur grand retour !"
        descrip="A l’occasion du départ en vacances, Speedy fête l’été avec vous et lance deux promotions p..."
      />
      <Footer />
    </section>
  );
};

export default home;
