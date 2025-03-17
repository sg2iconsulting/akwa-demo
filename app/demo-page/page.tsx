"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import AboutUs from "../components/organisms/AboutUs/AboutUs";
import ChiffreCounter from "../components/organisms/ChiffreCounter/ChiffreCounter";
import Section from "../components/organisms/Section/Section";
import PostCardItem from "../components/organisms/PostCardItem.tsx/PostCardItem";
import Footer from "../components/organisms/Footer/Footer";
import Carousel from "../components/organisms/Carousel/Carousel";
import DropdownButton from "../components/organisms/DropdownButton/DropdownButton";
import Navbar from "../components/organisms/Navbar/Navbar";

const dropdownItems = [
  {
    menuItem: "Home",
    link: "#",
  },
  {
    menuItem: "Profile",
    link: "#",
  },
  {
    menuItem: "About",
    link: "#",
  },
  {
    menuItem: "Contact",
    link: "#",
  },
]

const DemoPage = () => {

  return (
    <div className="flex flex-col gap-16 md:gap-24 xl:gap-32">
      {/* <Navbar /> */}
      <Navbar />

      {/* <AboutUs
        images={[
          [
            "/akwagroup/galery/image-0.png",
            "/akwagroup/galery/image-1.png",
            "/akwagroup/galery/image-2.png",
          ],
          [
            "/akwagroup/galery/image-3.png",
            "/akwagroup/galery/image-4.png",
            "/akwagroup/galery/image-5.png",
          ],
          [
            "/akwagroup/galery/image-12.png",
            "/akwagroup/galery/image-13.png",
            "/akwagroup/galery/image-14.png",
          ],
          [
            "/akwagroup/galery/image-15.png",
            "/akwagroup/galery/image-16.png",
            "/akwagroup/galery/image-17.png",
          ],
          [
            "/akwagroup/galery/image-9.png",
            "/akwagroup/galery/image-10.png",
            "/akwagroup/galery/image-11.png",
          ],
          [
            "/akwagroup/galery/image-6.png",
            "/akwagroup/galery/image-7.png",
            "/akwagroup/galery/image-8.png",
          ],
        ]}
        buttonClassename=""
        title="Akwa Group"
        subTitle="une mission nationale"
        paragraphs={[
          "Le Maroc connait aujourd'hui une effervescence en matière de projets structurants et s'appuie sur un environnement économique en plein essor.",
          "AKWA Group, conscient de son rôle dans l'accompagnement du développement social et économique marocain, a investi d'autres domaines d'activité stratégiques, en parallèle à son métier d'origine que sont les hydrocarbures.",
          "Aujourd'hui avec l'élargissement progressif de son bouquet énergétique et l'augmentation de ses capacités de stockage, le Groupe est un acteur incontestable dans le secteur énergétique au Maroc.",
        ]}
        buttonChildren="En savoir plus"
        headingTag="h2"
        headingClassename="text-[24px] md:text-[32px] xl:text-[40px] 2xl:text-[50px] font-black text-[#052337]"
      />

      <ChiffreCounter
        title="Chiffres Clés"
        titleClassName="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black"
        keyFigures={[
          {
            value: 20000,
            sign: "+",
            duration: 3,
            paragraphs: ["Emplois directs et", "indirects"],
            className:
              "h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48 flex flex-col gap-2 items-center",
          },
          {
            value: 2,
            sign: "",
            duration: 3,
            paragraphs: ["Sociétés cotées en", "bourse"],
            className:
              "h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48 flex flex-col gap-2 items-center",
          },
          {
            value: 70,
            sign: "",
            duration: 5,
            paragraphs: ["Sociétés"],
            className:
              "h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48 flex flex-col gap-2 flex-col items-center",
          },
          {
            value: 40,
            sign: "+",
            duration: 5,
            paragraphs: ["Marques phares"],
            className:
              "h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48 flex flex-col gap-2 items-center",
          },
        ]}
      />

      <Carousel
        slides={[
          { image: "/akwagroup/images/carburant.png" },
          { image: "/akwagroup/images/dev.png" },
          { image: "/akwagroup/images/transition.png" },
          { image: "/akwagroup/images/fluides.png" },
          { image: "/akwagroup/images/gaz.png" },
          { image: "/akwagroup/images/carburant.png" },
          { image: "/akwagroup/images/immobilier.png" },
          { image: "/akwagroup/images/dev.png" },
          { image: "/akwagroup/images/transition.png" },
          { image: "/akwagroup/images/fluides.png" },
          { image: "/akwagroup/images/gaz.png" },
          { image: "/akwagroup/images/immobilier.png" },
        ]}
        title="6 Pôles"
        description="diversifiés pour apporter des réponses globales"
        titleTextColor="#052337"
        descriptionTextColor="#333333"
        navigationIconColor="#19A0BF"
        slidesStyle={{
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />

      <Section
        title="Secteur d'avenir"
        imgSrc="/Section/innovationBg.jpeg"
        paragraphs={[
          "AKWA Group étend son empreinte à travers le continent africain, apportant son expertise et ses solutions énergétiques. Notre vision est de devenir un leader panafricain dans le secteur de l'énergie et contribuer au développement durable de l'Afrique.",
        ]}
        buttonChildren="En savoir plus"
        headingTag="h2"
        headingClassename="text-[18px] md:text-[32px] xl:text-[40px] 2xl:text-[50px] font-black text-white mb-4"
        paragraphClassename="text-white font-normal"
      />
      <Section
        title="Innovation Énergétique"
        imgSrc="/Section/AfriqueBg.png"
        paragraphs={[
          "AKWA Group investit dans les énergies renouvelables et les technologies propres pour un avenir durable. Nos équipes de recherche travaillent constamment pour développer des solutions innovantes pour le secteur énergétique.",
        ]}
        buttonChildren="En savoir plus"
        headingTag="h2"
        headingClassename="text-[18px] md:text-[32px] xl:text-[40px] 2xl:text-[50px] font-black text-white mb-4"
        paragraphClassename="text-white font-normal"
      />

      <PostCardItem
        title="Actualités"
        items={[
          {
            imgSrc: "/actuality/actu.jpeg",
            title:
              "AKWA Group lance un nouveau programme d'efficacité énergétique",
            date: "23 Avril 2023",
            description:
              "AKWA Group a annoncé le lancement d'un nouveau programme visant à améliorer l'efficacité énergétique dans toutes ses installations. Cette initiative s'inscrit dans la stratégie du groupe pour réduire son empreinte carbone et contribuer aux objectifs de développement durable.",
            containerBackgroundColor: "white",
            containerBorderStyle: "1px solid #F1F1F1",
            textColor: "black",
          },
          {
            imgSrc: "/actuality/item2.jpeg",
            title: "Nouvelle acquisition stratégique en Afrique de l'Ouest",
            date: "15 Mars 2023",
            containerBackgroundColor: "white",
            containerBorderStyle: "1px solid #F1F1F1",
            textColor: "black",
          },
          {
            imgSrc: "/actuality/item3.jpeg",
            title:
              "Partenariat avec des universités pour la recherche en énergies renouvelables",
            date: "28 Février 2023",
            containerBackgroundColor: "white",
            containerBorderStyle: "1px solid #F1F1F1",
            textColor: "black",
          },
          {
            imgSrc: "/actuality/item4.jpeg",
            title:
              "Inauguration d'une nouvelle station de distribution innovante",
            date: "10 Janvier 2023",
            containerBackgroundColor: "white",
            containerBorderStyle: "1px solid #F1F1F1",
            textColor: "black",
          },
          {
            imgSrc: "/actuality/item5.jpeg",
            title:
              "Inauguration d'une nouvelle station de distribution innovante",
            date: "10 Janvier 2023",
            containerBackgroundColor: "white",
            containerBorderStyle: "1px solid #F1F1F1",
            textColor: "black",
          },
          {
            imgSrc: "/actuality/item6.jpeg",
            title:
              "Inauguration d'une nouvelle station de distribution innovante",
            date: "10 Janvier 2023",
            containerBackgroundColor: "white",
            containerBorderStyle: "1px solid #F1F1F1",
            textColor: "black",
          },
        ]}
        titleTextColor="#052337"
        backgroundButtonColor="#19A0BF"
        buttonTextColor="white"
        label="Lire plus"
        backgroundItemColor="#052337"
      />

      <Footer
        footerItemsTextColor="white"
        footerBackgroundColor="#052337"
        footerItems={[
          { menuItem: "Accueil", link: "#" },
          { menuItem: "À propos", link: "#" },
          { menuItem: "Services", link: "#" },
          { menuItem: "Actualités", link: "#" },
          { menuItem: <DropdownButton dropdownItems={dropdownItems} label="Nos Filiales" />, link: "#" },
        ]}
        socialMediaItems={[
          { icon: FaFacebook, iconSize: 20, iconColor: "white" },
          { icon: FaTwitter, iconSize: 20, iconColor: "white" },
          { icon: FaInstagram, iconSize: 20, iconColor: "white" },
          { icon: FaLinkedin, iconSize: 20, iconColor: "white" },
        ]}
        footerLogoSource="/logo/akwaLogo.png"
      /> */}
    </div>
  );
};

export default DemoPage;
