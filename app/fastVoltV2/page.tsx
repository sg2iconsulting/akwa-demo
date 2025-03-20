"use client";
import React, { useEffect, useState } from "react";
import Section from "../components/organisms/Section/Section";
import Footer from "../components/organisms/Footer/Footer";
import BannerInscription from "../components/organisms/BannerInscription/BannerInscription";
import Carousel from "../components/organisms/Carousel/Carousel";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Solutions from "../components/organisms/Solutions/Solutions";
import FastVoltHeader from "../components/organisms/FastVoltHeader/FastVoltHeader";
import Navbar, { NavbarProps } from "../components/organisms/Navbar/Navbar";
import FeaturesSection from "../components/organisms/FeaturesSection/FeaturesSection";
import { FiMapPin } from "react-icons/fi";
import { MdAccessTimeFilled } from "react-icons/md";
import { BsLightning } from "react-icons/bs";
import { IoCheckmarkCircle } from "react-icons/io5";

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 639);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="flex flex-col w-full gap-y-10 lg:gap-y-24">
      <section className="w-full">
        <Navbar
          mobileLogoSrcImage="/fastVolt/fastVoltLogo.png"
          mobileLogoClassname="w-[100px] md:w-[130px] lg:w-[160px] 2xl:w-[200px]"
          mobileMenuItemClassename="text-green-600"
          mobileMenuItemStyle={{}}
          mobileButtonClassename="w-[160px] text-[10px] md:text-[12px] py-2 bg-[#D1FF33] text-black font-bold rounded-full"
          mobileButtonStyle={{}}
          mobileButtonLable="Nous appeler"
          desktopNavbarProps={{
            desktopLogoSrcImage: "/fastVolt/fastVoltLogo.png",
            desktopLogoClassename:
              "w-[100px] md:w-[130px] lg:w-[160px] 2xl:w-[200px]",
            desktopLogoStyle: {},
            menuItemsList: [
              { menuItem: "Qui sommes-nous?", link: "#" },
              { menuItem: "Comment ça marche?", link: "#" },
              { menuItem: "Carte des bornes", link: "#" },
            ],
            menuItemClassename: "flex items-center cursor-pointer",
            menuItemStyle: {},
            selectItems: [
              { label: "Fr", value: "fr" },
              { label: "Ar", value: "ar" },
              { label: "En", value: "en" },
            ],
            selectLabelItem: "label",
            selectValueItem: "value",
            selectIconPath:
              "M2.02852 7.28516L2.35898 7.86172C2.65078 8.37148 3.12891 8.74766 3.69492 8.90938L5.73047 9.48945C6.33516 9.66172 6.75 10.2137 6.75 10.843V12.2457C6.75 12.6324 6.96797 12.984 7.3125 13.1562C7.65703 13.3285 7.875 13.6801 7.875 14.0668V15.4379C7.875 15.9863 8.39883 16.3836 8.92617 16.2324C9.49219 16.0707 9.93164 15.6172 10.0758 15.0441L10.1742 14.6504C10.3219 14.0562 10.7086 13.5465 11.2395 13.2441L11.5242 13.0824C12.0516 12.7836 12.375 12.2211 12.375 11.6164V11.3246C12.375 10.8781 12.1957 10.4492 11.8793 10.1328L11.7422 9.9957C11.4258 9.6793 10.9969 9.5 10.5504 9.5H9.03516C8.64492 9.5 8.2582 9.39805 7.91719 9.20469L6.7043 8.51211C6.55312 8.42422 6.43711 8.28359 6.38086 8.11836C6.26836 7.78086 6.41953 7.41523 6.73945 7.25703L6.94688 7.15156C7.17891 7.03555 7.44961 7.01445 7.6957 7.09883L8.51133 7.36953C8.79961 7.46445 9.11602 7.35547 9.28125 7.10586C9.44648 6.85977 9.42891 6.53281 9.23906 6.3043L8.76094 5.73125C8.40938 5.30938 8.41289 4.69414 8.77148 4.2793L9.32344 3.63594C9.63281 3.27383 9.68203 2.75703 9.44648 2.3457L9.36211 2.19805C9.23906 2.19102 9.11953 2.1875 8.99648 2.1875C5.73398 2.1875 2.96719 4.32852 2.02852 7.28516ZM16.3125 9.5C16.3125 8.20625 15.975 6.98984 15.3844 5.93164L14.4844 6.29375C13.9324 6.51523 13.6477 7.13047 13.834 7.69297L14.4281 9.47539C14.5512 9.84102 14.85 10.1188 15.2227 10.2102L16.2457 10.4668C16.2879 10.1504 16.309 9.82695 16.309 9.5H16.3125ZM0 9.5C0 7.11305 0.948212 4.82387 2.63604 3.13604C4.32387 1.44821 6.61305 0.5 9 0.5C11.3869 0.5 13.6761 1.44821 15.364 3.13604C17.0518 4.82387 18 7.11305 18 9.5C18 11.8869 17.0518 14.1761 15.364 15.864C13.6761 17.5518 11.3869 18.5 9 18.5C6.61305 18.5 4.32387 17.5518 2.63604 15.864C0.948212 14.1761 0 11.8869 0 9.5Z",
            selectIconColor: "white",
            selectItemClassename:
              "flex items-center gap-2 rounded-lg bg-transparent h-7 px-2 cursor-pointer focus:outline-none",
            selectItemsTextColor: "white",
            buttonClassename:
              "w-[160px] py-2 bg-[#D1FF33] text-black font-bold rounded-full",
            buttonLable: "Nous appeler",
          }}
        />
        <FastVoltHeader
          images={[
            { type: "image", src: "/fastVolt/navBackFv.png" },
            { type: "video", src: "https://sg2i.com/wp-content/uploads/2024/12/transitionenergetique.mp4" },
            { type: "image", src: "/maghreb/maghrebNavBack.png" },
          ]}
          backgroundImageClassename="w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover"
          title="Le plus grand réseau marocain des bornes électriques!"
          subtitle="Le temps d'une pause café, rechargez vos batteries et prenez la route vers une mobilité durable, avec les bornes de recharge rapide FastVolt destinées aux véhicules électriques et hybrides rechargeables que vous retrouverez dans les principaux axes routiers et centres urbains."
          appDownloadTitle="Télécharger l'application FastVolt"
          googlePlayImageSrc="/fastVolt/googlePlay.png"
          appStoreImageSrc="/fastVolt/appStore.png"
          appDownloadTitleClassename="text-[14px] sm:text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px] font-extrabold"
          heroTitleClassename="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] 2xl:text-[85px] 3xl:text-[100px] font-bold leading-tight xl:mt-8 2xl:mt-12 3xl:mt-16"
          heroSubTitleClassename="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold"
          appButtonClassename="w-16 sm:w-24 md:w-28 lg:w-32 xl:w-44 2xl:w-auto"
        />
      </section>
      <FeaturesSection
        features={[
          {
            icon: FiMapPin,
            text: "Réseau de bornes le plus important du royaume",
          },
          {
            icon: MdAccessTimeFilled,
            text: "30 minutes de durée de recharge",
          },
          {
            icon: BsLightning,
            text: "Puissance de recharge jusqu'a 100 Kw DC",
          },
        ]}
        textClassename="text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px] 2xl:text-[22px] font-bold"
        iconClassename="md:w-8 md:h-8 2xl:w-[40px] 2xl:h-[40px]"
        iconColor="#8CA640"
      />

      <div className="flex flex-col gap-16 lg:gap-32">
        <section>
          <Solutions
            firstTitle="Une solution rapide et proche de chez vous"
            secondTitle="Découvrez nos avantages"
            rightSectionIcon={IoCheckmarkCircle}
            leftSectionIcon={IoCheckmarkCircle}
            firstTitleClassename="leading-tight w-full md:w-[60%] xl:w-[80%] text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black dark:text-white mb-3 md:mb-4"
            secondTitleClassename="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium dark:text-white"
            paragraphClassename="text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] font-bold"
            paragraphs={[
              "Une formule d'abonnement adaptée pour votre confort",
              "1er réseau de bornes de recharge rapide au Maroc avec une puissance de charge allant jusqu'à 100KW DC",
              "Une offre inédite au Maroc",
              "Recharge rapide en seulement 30min",
              "Une application dédiée pour localiser les bornes de recharge rapide les plus proches, organiser et payer le chargement de son véhicule",
              "Plus de de 100 points de recharges disponibles au Maroc",
              "Disponible sur les principaux axes autoroutiers",
              "L'accès à un ensemble de services réservés aux abonnés de FastVolt",
            ]}
          />
        </section>
        <section className="">
          <Carousel
            slides={[
              { image: "/fastVolt/carousel/borne.png" },
              { image: "/fastVolt/carousel/copro.png" },
              { image: "/fastVolt/carousel/flotte.png" },
              { image: "/fastVolt/carousel/operator.png" },
              { image: "/fastVolt/carousel/recharge.png" },
              { image: "/fastVolt/carousel/borne.png" },
              { image: "/fastVolt/carousel/copro.png" },
              { image: "/fastVolt/carousel/flotte.png" },
              { image: "/fastVolt/carousel/operator.png" },
              { image: "/fastVolt/carousel/recharge.png" },
            ]}
            slideClassename="w-full h-full object-cover shadow-[0_0_20px_0_rgba(0,0,0,0.2)] aspect-[585.62/761.28]"
            title="Nos Services"
            titleClassename="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black dark:text-white"
            description="Découvrez nos services Fastvolt"
            descriptionClassename="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium dark:text-white"
            titleTextColor="#052337"
            leftChevronIcon={FaChevronLeft}
            leftChevronIconClassename="xl:text-[50px] 2xl:text-[70px] font-bold"
            rightChevronIcon={FaChevronRight}
            rightChevronIconClassename="xl:text-[50px] 2xl:text-[70px] font-bold"
            descriptionTextColor="#666666"
            navigationIconColor="#8BBA25"
          />
        </section>

        {/* Section with Background */}
        <section>
          <Section
            title="Localisez votre borne électrique partout au Maroc"
            imgSrc="fastVolt/fastVoltCard.png"
            paragraphs={[
              "Trouver facilement une borne de recharge électrique partout au Maroc grâce à notre outil de géolocalisation.",
            ]}
            buttonChildren="En savoir plus"
            buttonClassename="px-6 py-2 lg:py-4 text-white bg-[#8BBA25] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl w-[170px] md:w-[200px] lg:w-[240px] rounded-full"
            headingTag="h2"
            headingClassename="text-[20px] md:text-[30px] xl:text-[40px] 2xl:text-[50px] font-bold text-white"
            paragraphClassename="text-white"
          />
        </section>

        {/* Banner Inscription */}
        <section>
          <BannerInscription
            title="Inscrivez-vous à notre Newsletter"
            titleClassename="text-[13px] md:text-[16px] lg:text-[20px] xl:text-[32px] 2xl:text-[48px] font-bold"
            description=" Inscrivez vous à notre newsletter pour recevoir les dernières nouvelles et des offres exclusives"
            descriptionClassename="font-medium text-[8px] md:text-[11px] lg:text-[13px] xl:text-[18px] 2xl:text-[24px]"
            imageBackgroundSource="/fastVolt/inscripBanner.png"
            buttonLabel="S'inscrire"
            buttonBackgroundColor="#8BBA25"
            buttonTextColor="white"
            buttonClassename="absolute inset-y-1 right-1 px-3 2xl:px-6 py-[1px] lg:px-4 xl:px-6 xl:py-1 rounded-full font-bold 2xl:w-40 bg-[#8BBA25] text-white mr-5 md:mr-10 lg:mr-20 xl:mr-28"
            inputClassename="w-full px-2 py-2 pr-20 lg:pr-[105px] xl:pr-[120px] lg:py-[10px] xl:py-[16px] 2xl:px-4 2xl:pr-44 2xl:py-5 border rounded-full focus:outline-none"
          />
        </section>
      </div>
      <section>
        <Footer
          footerItemsTextColor="white"
          footerBackgroundColor="#ABC92A"
          footerItems={[
            { menuItem: "Accueil", link: "#" },
            { menuItem: "Condition d'utilisation", link: "#" },
            { menuItem: "Politique de confidentialité", link: "#" },
            { menuItem: "FAQ", link: "#" },
          ]}
          socialMediaItems={[
            { icon: FaFacebook, iconSize: 20, iconColor: "white" },
            { icon: FaInstagram, iconSize: 20, iconColor: "white" },
            { icon: FaLinkedin, iconSize: 20, iconColor: "white" },
          ]}
          footerLogoSource="/fastVolt/footerLogo.png"
          imageClassename="w-[100px] 2xl:w-[150px]"
          footerItemClassename="cursor-pointer px-2 py-1 text-center transition-all duration-200 hover:opacity-80 text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px]"
          footerItemLinkClassename="text-[10px] md:text-[12px] xl:text-[15px] 2xl:text-[18px] whitespace-nowrap py-1"
          footerContainerClassename="font-poppins w-full xl:h-auto p-5 md:px-10 lg:px-20 flex items-center mt-10 transition-all duration-300 bg-[#ABC92A]"
        />
      </section>
    </main>
  );
};

export default Page;
