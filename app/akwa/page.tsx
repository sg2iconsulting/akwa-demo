"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GroupAnimation from "../components/animation/GroupAnimation";
import ChiffreAnimation from "../components/animation/ChiffreAnimation";
import SectionAnimation from "../components/animation/SectionAnimation";
import ActualityAnimation from "../components/animation/ActualityAnimation";
import { TbArrowBarToUp } from "react-icons/tb";
import CarteModal from "../components/CarteModal";
import TrendingSliderAnimation from "../components/animation/TrendingSliderAnimation";

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNavbar = () => {
    const navbarElement = document.getElementById("navbar");
    if (navbarElement) {
      navbarElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col gap-6 md:gap-10 lg:gap-14 xl:gap-[100px] 2xl:gap-[160px]">
      <CarteModal isVisible={isModalVisible} onClose={closeModal} imgSrc="" />
      <section id="navbar">
        <Navbar />
      </section>
      <button
        onClick={scrollToNavbar}
        className={`${isModalVisible ? "hodden" : "fixed"} bottom-28 right-4 md:right-8 lg:right-[66px] bg-[#19A0BF] text-white p-2 xl:p-3 rounded-lg shadow-md dark:hover:bg-[#45a6bc] hover:bg-[#052337] transition z-50`}
      >
        <TbArrowBarToUp className="md:text-[20px] lg:text-[24px] xl:text-[28px] font-black" />
      </button>
      <GroupAnimation />
      <ChiffreAnimation />
      <TrendingSliderAnimation
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
          title="Secteur d'avenir"
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
      <ActualityAnimation
        items={[
          {
            imgSrc: "/actuality/actu.jpeg",
            title: "Nouveau casque protecteur",
            descrip:
              "Après avoir étudié les attentes et besoins de nos clients, Afriquia Gaz a décidé de développer un casque protecteur, en rendant la bouteille beaucoup plus pratique, plus ergonomique, plus sécurisée et avec un nouveau design.",
            date: "23 Decembre 2024",
            url: "",
          },
          {
            imgSrc: "/actuality/item6.jpeg",
            title: "Le meilleur de l'entretien",
            date: "20 Décembre 2024",
            url: "",
          },
          {
            imgSrc: "/actuality/item2.jpeg",
            title: "Nous sommes toujours prêts à vous accueillir",
            date: "15 Décembre 2024",
            url: "",
          },
          {
            imgSrc: "/actuality/item3.jpeg",
            title: "Garder votre flotte opérationnelle avec l'entretien speedy",
            date: "03 Décembre 2024",
            url: "",
          },
          {
            imgSrc: "/actuality/item4.jpeg",
            title: "Remplacement 100% utile",
            date: "19 Octobre 2024",
            url: "",
          },
          {
            imgSrc: "/actuality/item5.jpeg",
            title:
              "Baie dédiée et techniciens experts pour un entretien rapide de votre flotte",
            date: "12 Octobre 2024",
            url: "",
          },
        ]}
        btnColor="bg-[#19A0BF]"
        color="bg-[#052337]"
        ttlColor="text-[#0E1B25]"
      />
      <Footer />
    </section>
  );
};

export default Home;
