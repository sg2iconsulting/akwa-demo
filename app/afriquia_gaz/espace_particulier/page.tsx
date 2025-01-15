'use client'
import React from "react";
import Footer from "@/app/components/afriquia/Footer";
import Navbar from "@/app/components/afriquia/Navbar";
import SliderV from "@/app/components/afriquia/SliderV";
import { motion } from "framer-motion";
import SectionsAnimation from "@/app/components/animation/SectionsAnimation";
import BannerAnimation from "@/app/components/animation/BannerAnimation";
import SectAnimation from "@/app/components/animation/SectAnimation";
import CardsAnimation from "@/app/components/animation/CardsAnimation";
import ActualityAnimation from "@/app/components/animation/ActualityAnimation";
import PostsAnimation from "@/app/components/animation/PostsAnimation";
import ServiceAnimation from "@/app/components/animation/ServiceAnimations";

const espace_particulier = () => {
  return (
    <section className="flex flex-col gap-6 md:gap-10 lg:gap-14 xl:gap-[100px] 2xl:gap-[160px]">
      <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
        <Navbar
          space={"Espace Professionel"}
          btnColor={"bg-[#3FABDF]"}
          link={"/afriquia_gaz/espace_professionel"}
        />

        <div className="flex flex-col md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-6">
          <div className="w-full px-5 md:px-10 lg:px-20">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className={`flex flex-col text-[20px] md:text-[32px] lg:text-[45px] xl:text-[65px] 2xl:text-[100px] font-poppins font-extrabold leading-5 md:leading-7 lg:leading-[40px] xl:leading-[60px] 2xl:leading-[90px] `}
            >
              Espace <span className={` text-[#387CCC]`}>Particulier</span>
            </motion.h1>
          </div>
          <div className="flex flex-col gap-6 md:gap-10 xl:gap-[60px] 2xl:gap-[100px]">
            <SliderV />
            <SectionsAnimation
              title="La nouvelle bouteille Clic-On"
              descrip="Pour la 1ère fois au Maroc, Afriquia Gaz lance la bouteille Nouvelle Génération Tissir Gaz, une révolution en matière de conditionnement de gaz qui permettra d’utiliser la bouteille en toute facilité"
              imgSrc="/afriquiaGaz/section/sec-3.png"
            />
          </div>
        </div>
      </div>
      <BannerAnimation imageSrc="/afriquiaGaz/bannerP.png" />
      <SectAnimation
        title="Télécharger notre application Allogaz"
        descrip=""
        imgSrc="/afriquiaGaz/section/appDownload.png"
        space={true}
      />
      <CardsAnimation />
      <ActualityAnimation
        imgSrc={"/actuality/actu.jpeg"}
        btnColor="bg-[#A2BB51]"
        color="bg-[#387CCC]"
        title="Nouveau casque protecteur"
        ttlColor="text-[#0E1B25]"
        descrip="Après avoir étudié les attentes et besoins de nos clients,
            Afriquia Gaz a décidé de développer un casque protecteur, en
            rendant la bouteille beaucoup plus pratique, plus ergonomique,
            plus sécurisée et avec un nouveau design."
        Date={"23 Decembre 2024"}
      />
      <PostsAnimation pro={false} />
      <ServiceAnimation />
      <Footer />
    </section>
  );
};

export default espace_particulier;
