import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionApp from "@/components/SectionApp";
import SliderV from "@/components/SliderV";
import AnimatedActuality from "@/components/content/AnimatedActuality";
import AnimatedBanner from "@/components/content/AnimatedBanner";
import AnimatedListCard from "@/components/content/AnimatedListCard";
import AnimatedPosts from "@/components/content/AnimatedPosts";
import AnimatedSection from "@/components/content/AnimatedSection";
import AnimatedSectionApp from "@/components/content/AnimatedSectionApp";
import AnimatedService from "@/components/content/AnimatedService";
import React from "react";

const espace_professionel = () => {
  return (
    <div className="flex flex-col font-poppins">
      <Navbar
        space={"Espace Professionel"}
        btnColor={"bg-[#3FABDF]"}
        link={"/afriquia_espace_professionel"}
      />
      <SliderV />
      <AnimatedSection
        imageSrc="/section/butan.jpeg"
        title="La nouvelle bouteille Clic-On"
        text="Pour la 1ère fois au Maroc, Afriquia Gaz lance la bouteille Nouvelle Génération Tissir Gaz, une révolution en matière de conditionnement de gaz qui permettra d’utiliser la bouteille en toute facilité"
        btn={true}
      />
      <AnimatedBanner imageSrc="/bannerP.png" />
      <AnimatedSectionApp
        imageSrc="/section/appDownload.png"
        title="Télécharger notre application AlloGaz"
        text=""
        btn={false}
      />
      <AnimatedListCard />
      <AnimatedActuality />
      <AnimatedPosts />
      <AnimatedService />
      <Footer />
    </div>
  );
};

export default espace_professionel;
