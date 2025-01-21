"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/fastVolt/Navbar";
import SectionAnimation from "../components/animation/SectionAnimation";
import Footer from "../components/fastVolt/Footer";
import CarouselAnimation from "../components/animation/CarouselAnimation";
import SolutionsAnimation from "../components/animation/SolutionsAnimation";
import BannerInscriptionAnimation from "../components/animation/BannerInscriptionAnimation";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 639);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col gap-6 md:gap-10 lg:gap-20 xl:gap-[100px] 2xl:gap-[160px]">
      <div className="flex flex-col gap-6 lg:gap-10 2xl:gap-20">
        <Navbar />
        <CarouselAnimation
          slides={[
            {
              image: "/fastVolt/carousel/borne.png",
            },
            {
              image: "/fastVolt/carousel/copro.png",
            },
            {
              image: "/fastVolt/carousel/flotte.png",
            },
            {
              image: "/fastVolt/carousel/operator.png",
            },
            {
              image: "/fastVolt/carousel/recharge.png",
            },
            {
              image: "/fastVolt/carousel/borne.png",
            },
            {
              image: "/fastVolt/carousel/copro.png",
            },
            {
              image: "/fastVolt/carousel/flotte.png",
            },
            {
              image: "/fastVolt/carousel/operator.png",
            },
            {
              image: "/fastVolt/carousel/recharge.png",
            },
          ]}
          title="Nos Services"
          descrip="Découvrez nos services Fastvolt"
          clrTitle="text-black"
          descripTitles="text-[#A2C24C]"
          slidesStyle="rounded-lg md:rounded-xl lg:rounded-2xl"
          navigationClr="bg-[#D1FF33] p-3 rounded-full"
          navigationBg="text-black"
          hiddenTitle={false}
        />
      </div>
      <SolutionsAnimation />
      <SectionAnimation
        title="Localisez votre borne électrique partout au Maroc"
        descrip="Trouver facilement une borne de recharge électrique partout au Maroc grâce à notre outil de géolocalisation."
        imgSrc={
          isMobile ? "/fastVolt/carteMb.png" : "/fastVolt/fastVoltCard.png"
        }
        spee={false}
        pub={true}
      />
      <BannerInscriptionAnimation />
      <Footer />
    </section>
  );
};

export default Home;
