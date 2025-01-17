"use client";
import React, { useEffect, useState } from "react";
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
import VidangePrixModal from "../components/speedy/VidangePrixModal";
const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={``}>
      <VidangePrixModal
        isVisible={isModalVisible}
        onClose={closeModal}
        imgSrc="/speedy/vidangePrix.png"
      />
      <div
        className={`${
          isModalVisible ? "pointer-events-none" : ""
        } flex flex-col gap-12 md:gap-20 xl:gap-24 1xl:gap-28 2xl:gap-40`}
      >
        <div>
          <Navbar />
          <div className="flex flex-col gap-9 md:gap-16">
            <SelectOptions />
            <Tabs />
          </div>
        </div>
        <MarquesSlider />
        <div className="flex flex-col gap-12 md:gap-16 xl:gap-20 1xl:gap-24 2xl:gap-28 ">
          <Section
            title="Conseil pratique"
            descrip="Vérifiez la pression des pneus chaque mois à froid et changez-les si les sculptures sont inférieures à 1,6 mm. Adoptez une conduite prudente et contrôlez régulièrement l’équilibrage ainsi que le parallélisme tous les 20 000 km."
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
        </div>
        <PubImage />
        <PromosSlider />
        <FeedBacksList />
        <Actuality
          items={[
            {
              imgSrc: "/actuality/item1.jpeg",
              title: "20 contrôles pour une performance optimale",
              descrip:
                "Avec les 20 points de contrôle Speedy, nous assurons une inspection approfondie de votre flotte par nos experts, lui garantissant performance et fiabilité.",
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
              title:
                "Garder votre flotte opérationnelle avec l'entretien speedy",
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
          color="bg-[#2B3773]"
          btnColor="bg-[#3B7AB7]"
          ttlColor="text-black"
        />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
