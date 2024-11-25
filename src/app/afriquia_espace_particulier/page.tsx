'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SliderV from "@/components/SliderV";
import AnimatedActuality from "@/components/content/AnimatedActuality";
import AnimatedBanner from "@/components/content/AnimatedBanner";
import AnimatedListCard from "@/components/content/AnimatedListCard";
import AnimatedPosts from "@/components/content/AnimatedPosts";
import AnimatedSection from "@/components/content/AnimatedSection";
import AnimatedSectionApp from "@/components/content/AnimatedSectionApp";
import AnimatedService from "@/components/content/AnimatedService";
import React from "react";
import { motion } from "framer-motion";

const espace_professionel = () => {
  return (
    <div className="flex flex-col font-poppins">
      <Navbar
        space={"Espace Professionel"}
        btnColor={"bg-[#3FABDF]"}
        link={"/afriquia_espace_professionel"}
      />
      
      <div className="flex flex-col gap-5 md:gap-10 lg:gap-20">
      <div className={` top-96 w-full fixed z-50`}>
        <div className=" max-w-[2000px] mx-auto flex justify-end px-3 md:px-7 xl:px-10 2xl:px-20 w-full ">

          <motion.button
            className="h-[35px] md:h-[45px] cursor-pointer xl:h-[55px] w-[135px] md:w-[165px] xl:w-[200px] text-[10px] md:text-[12px] xl:text-base text-white font-bold rounded-full bg-red-600 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            >
            Besoin de Gaz ?
          </motion.button>
            </div>
        </div>
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
      </div>
      <Footer />
    </div>
  );
};

export default espace_professionel;
