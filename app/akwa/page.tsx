"use client";
import React, { useEffect, useState } from "react";
// import Footer from "../components/Footer";
import GroupAnimation from "../components/animation/GroupAnimation";
import ChiffreAnimation from "../components/animation/ChiffreAnimation";
import SectionAnimation from "../components/animation/SectionAnimation";
import ActualityAnimation from "../components/animation/ActualityAnimation";
import { TbArrowBarToUp } from "react-icons/tb";
import TrendingSliderAnimation from "../components/animation/TrendingSliderAnimation";
import Navbar from "../components/organisms/Navbar/Navbar";
import HeroSlider from "../components/organisms/HeroSlider/HeroSlider";
import Carousel from "../components/organisms/Carousel/Carousel";
import {
  FaChevronLeft,
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Section from "../components/organisms/Section/Section";
import { useArticles } from "../hook/useArticles";
import PostCardItem from "../components/organisms/PostCardItem.tsx/PostCardItem";
import AboutUs from "../components/organisms/AboutUs/AboutUs";
import ChiffreCounter from "../components/organisms/ChiffreCounter/ChiffreCounter";
import Footer from "../components/organisms/Footer/Footer";
import DropdownButton from "../components/organisms/DropdownButton/DropdownButton";
import CarteModal from "../components/organisms/CarteModal/CarteModal";
import Button from "../components/atoms/Button/Button";

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { loading, error, articles } = useArticles();

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

  if (loading) {
    return (
      <div className="flex flex-col gap-16 md:gap-24 xl:gap-32">
        <div className="flex flex-col gap-16 md:gap-24 xl:gap-32">
          <PostCardItem
            title="Actualités"
            items={[]}
            titleTextColor="#052337"
            backgroundButtonColor="#19A0BF"
            buttonTextColor="white"
            labelButton="Lire plus"
            backgroundItemColor="#052337"
            isLoading={true}
          />
        </div>
      </div>
    );
  }
  if (error) return <div>Error loading articles: {error.message}</div>;

  if (articles.length === 0) return <div>No articles found</div>;

  return (
    <section className="flex flex-col gap-6 md:gap-10 lg:gap-14 xl:gap-[100px] 2xl:gap-[160px]">
      <CarteModal
        isVisible={isModalVisible}
        onClose={closeModal}
        imgSrc="/akwagroup/images/akwaCarte.png"
        videoSrc="https://sg2i.com/wp-content/uploads/2024/12/AkwaAfrica.mp4"
        videoTitle="Akwa Afrique"
        modalTitle="Chiffres Clés"
        buttonLabel="Voir la vidéo"
        buttonClassName="w-28 h-7 md:w-36 md:h-10 xl:w-52 xl:h-12 2xl:w-[290px] 2xl:h-[67px] text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px]"
        closeButtonLabel="×"
        closeButtonClassName="absolute top-4 right-4 text-black text-lg lg:text-3xl xl:text-4xl 2xl:text-6xl"
        zIndex={100}
      />
      <section id="navbar">
        <Navbar
          mobileLogoSrcImage="/logo/akwaLogo.png"
          mobileLogoClassname="w-[60px] md:w-[80px] lg:w-[100px] 2xl:w-[150px]"
          mobileMenuItemClassename="text-black"
          mobileMenuItemStyle={{}}
          mobileButtonClassename="w-[160px] text-[10px] md:text-[12px] py-2 bg-[#19A0BF] text-white font-bold rounded-full"
          mobileButtonStyle={{}}
          mobileButtonLable="Espace Media"
          desktopNavbarProps={{
            desktopLogoSrcImage: "/logo/akwaLogo.png",
            desktopLogoClassename:
              "w-[60px] md:w-[80px] lg:w-[100px] 2xl:w-[150px]",
            desktopLogoStyle: {},
            menuItemsList: [
              { menuItem: "Le Groupe", link: "#" },
              { menuItem: "Pôles d'activités", link: "#" },
              { menuItem: "Finance", link: "#" },
              { menuItem: "Engagements", link: "#" },
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
              "w-[160px] py-2 bg-[#19A0BF] text-white font-bold rounded-full",
            buttonLable: "Espace Media",
          }}
        />
        <HeroSlider
          slides={[
            {
              type: "video",
              src: "https://sg2i.com/wp-content/uploads/2024/12/Groupeenergetique.mp4",
              title: "Groupe énergétique par excellence",
              subtitle: "",
              cta: {
                label: "Voir la vidéo",
                className:
                  "px-6 py-2 bg-[#D1FF33] text-black font-bold rounded-full",
              },
            },
            {
              type: "video",
              src: "https://sg2i.com/wp-content/uploads/2024/12/transitionenergetique.mp4",
              title: "Transition Énergétique,",
              subtitle: "la voie de l'avenir",
              cta: {
                label: "Voir la vidéo",
                className:
                  "px-6 py-2 bg-[#D1FF33] text-black font-bold rounded-full",
              },
            },
            {
              type: "video",
              src: "https://sg2i.com/wp-content/uploads/2024/12/AkwaAfrica.mp4",
              title: "AKWA AFRICA,",
              subtitle: "de nouvelles perspectives d'avenir",
              cta: {
                label: "Voir la vidéo",
                className:
                  "px-6 py-2 bg-[#D1FF33] text-black font-bold rounded-full",
              },
            },
          ]}
          paginationStyles={`
            .swiper-pagination {
              position: absolute;
              bottom: 20px !important;
              z-index: 50 !important;
            }

            .swiper-pagination-bullet {
              width: 12px;
              height: 12px;
              background: white;
              opacity: 0.6;
            }

            .swiper-pagination-bullet-active {
              opacity: 1;
              background: #19A0BF;
            }

            .swiper-button-next, .swiper-button-prev {
              color: white;
            }
          `}
          titleClassName="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] 2xl:text-[85px] 3xl:text-[100px] font-bold leading-tight xl:mt-8 2xl:mt-12 3xl:mt-16"
          subtitleClassName="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold"
          appDownloadTitleClassName="text-[14px] sm:text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px] font-extrabold"
          appButtonClassName="w-16 sm:w-24 md:w-28 lg:w-32 xl:w-44 2xl:w-auto"
          slideClassName="w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover"
          effect="slide"
          showPagination={true}
          containerClassName="mt-10 lg:mt-0"
          enableVideoModal={true}
        />
      </section>
      {!isModalVisible && (
        <Button
          onClick={scrollToNavbar}
          className="fixed bottom-28 right-4 md:right-8 lg:right-[66px] bg-[#19A0BF] text-white p-2 xl:p-3 rounded-lg shadow-md dark:hover:bg-[#45a6bc] hover:bg-[#052337] transition z-50"
        >
          <TbArrowBarToUp className="md:text-[20px] lg:text-[24px] xl:text-[28px] font-black" />
        </Button>
      )}
      <AboutUs
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
        title="Akwa Group"
        headingTag="h2"
        headingClassename={
          "text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black text-[#0E1B25] dark:text-white"
        }
        subTitle="Une mission nationale"
        subHeadingTag="h3"
        subHeadingClassename={
          "text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium text-[#334C60] dark:text-white"
        }
        buttonChildren="Voir plus"
        paragraphs={[
          "Le Maroc connait aujourd'hui une effervescence en matière de projets structurants et s'appuie sur un environnement économique en plein essor.",
          "AKWA Group, conscient de son rôle dans l'accompagnement du développement social et économique marocain, a investi d'autres domaines d'activité stratégiques, en parallèle à son métier d'origine que sont les hydrocarbures.",
          "Aujourd'hui avec l'élargissement progressif de son bouquet énergétique et l'augmentation de ses capacités de stockage, le Groupe est un acteur incontestable dans le secteur énergétique au Maroc.",
        ]}
        paragraphClassename={
          "text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] flex flex-col gap-2 lg:gap-4 xl:gap-6 text-[#4C4C4C] dark:text-white"
        }
        buttonClassename={
          "w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px] text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px]"
        }
      />
      <ChiffreCounter
        keyFigures={[
          {
            value: 20000,
            sign: "+",
            duration: 3,
            paragraphs: ["Emplois directs et", "indirects"],
            // className: "font-bold lg:text-[28px] 2xl:text-[48px]",
            className:
              "flex flex-col items-center gap-2 h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48",
            deviderClassename: "w-10 bg-white",
            paragraphClassename:
              "text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]",
            valueClassename: "font-bold lg:text-[28px] 2xl:text-[48px]",
            signClassename: "",
          },
          {
            value: 2,
            sign: "",
            duration: 3,
            paragraphs: ["Sociétés cotées en", "bourse"],
            // className: "font-bold lg:text-[28px] 2xl:text-[48px]",
            className:
              "flex flex-col items-center gap-2 h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48",
            deviderClassename: "w-10 bg-white",
            paragraphClassename:
              "text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]",
            valueClassename: "font-bold lg:text-[28px] 2xl:text-[48px]",
            signClassename: "",
          },
          {
            value: 70,
            sign: "",
            duration: 5,
            paragraphs: ["Sociétés"],
            // className: "font-bold lg:text-[28px] 2xl:text-[48px]",
            className:
              "flex flex-col items-center gap-2 h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48",
            deviderClassename: "w-10 bg-white",
            paragraphClassename:
              "text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]",
            valueClassename: "font-bold lg:text-[28px] 2xl:text-[48px]",
            signClassename: "",
          },
          {
            value: 40,
            sign: "+",
            duration: 5,
            paragraphs: ["Marques phares"],
            // className: "font-bold lg:text-[28px] 2xl:text-[48px]",
            className:
              "flex flex-col items-center gap-2 h-20 w-32 sm:w-40 md:w-auto md:h-24 lg:h-36 2xl:h-48",
            deviderClassename: "w-10 bg-white",
            paragraphClassename:
              "text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]",
            valueClassename: "font-bold lg:text-[28px] 2xl:text-[48px]",
            signClassename: "",
          },
        ]}
        title="Chiffres Clés"
        titleClassName="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black"
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
        slideClassename="w-full h-full object-cover shadow-[0_0_20px_0_rgba(0,0,0,0.2)] aspect-[585.62/761.28]"
        title="6 Pôles"
        titleClassename="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black dark:text-white"
        description="diversifiés pour apporter des réponses globales"
        descriptionClassename="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium dark:text-white"
        titleTextColor="#052337"
        leftChevronIcon={FaChevronLeft}
        leftChevronIconClassename="xl:text-[50px] 2xl:text-[70px] font-bold"
        rightChevronIcon={FaChevronRight}
        rightChevronIconClassename="xl:text-[50px] 2xl:text-[70px] font-bold"
        descriptionTextColor="#666666"
        navigationIconColor="#FFFFFF"
      />
      <div className="mt-5 flex flex-col gap-6 md:gap-10 lg:gap-14 xl:gap-[100px] 2xl:gap-[160px]">
        <Section
          title="Secteur d'avenir"
          imgSrc="/Section/innovationBg.jpeg"
          paragraphs={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin.",
          ]}
          buttonChildren="En savoir plus"
          // buttonClassename="px-6 text-white bg-[#19A0BF] py-2 w-[200px] rounded-full mt-3"
          buttonClassename="w-36 h-7 md:w-44 md:h-10 xl:w-56 xl:h-12 2xl:w-[250px] 2xl:h-[67px] text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] py-2 mt-3"
          headingTag="h2"
          headingClassename="text-[20px] md:text-[30px] xl:text-[40px] 2xl:text-[50px] font-bold text-white"
          paragraphClassename="text-white"
        />
        <Section
          title="Afrique"
          imgSrc="/Section/AfriqueBg.png"
          paragraphs={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin.",
          ]}
          buttonChildren="En savoir plus"
          // buttonClassename="px-6 text-white bg-[#19A0BF] text-sm md:text-md lg:text-lg w-[170px] md:w-[200px] lg:w-[240px] rounded-full"
          buttonClassename="w-36 h-7 md:w-44 md:h-10 xl:w-56 xl:h-12 2xl:w-[250px] 2xl:h-[67px] text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] py-2 mt-3"
          headingTag="h2"
          headingClassename="text-[20px] md:text-[30px] xl:text-[40px] 2xl:text-[50px] font-bold text-white"
          paragraphClassename="text-white"
        />
      </div>
      <PostCardItem
        title="Actualités"
        titleClassename=""
        items={articles.map((article, index) => ({
          ...article,
          imageClassename:
            index === 0
              ? "object-cover w-full h-full"
              : "w-full h-full rounded-[8px] object-cover",
          dateClassename:
            index === 0
              ? "text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px]"
              : "text-[8px] md:text-[12px] xl:text-[13px]",
          titleClassename:
            index === 0
              ? "text-[15px] md:text-[23px] lg:text-2xl xl:text-[28px] 2xl:text-[36px] font-bold"
              : "text-[10px] md:text-[14px] xl:text-[15px] font-bold line-clamp-2",
          descriptionClassename:
            index === 0
              ? "text-[10px] md:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] font-medium line-clamp-2"
              : "",
          buttonClassename:
            index === 0 ? "px-6 py-2 w-[200px] rounded-full" : "",
          containerBackgroundColor: "white",
          containerBorderStyle: "1px solid #F1F1F1",
          textColor: "#052337",
        }))}
        titleTextColor="#052337"
        backgroundButtonColor="#19A0BF"
        buttonTextColor="white"
        labelButton="Lire plus"
        backgroundItemColor="#052337"
        isLoading={false}
      />

      <Footer
        footerBackgroundColor="#052337"
        footerItems={[
          { menuItem: "Contact", link: "/" },
          { menuItem: "Condition d'utilisation", link: "/" },
          { menuItem: "Politique de confidentialité", link: "/" },
          { menuItem: "FAQ", link: "/" },
          { menuItem: "Recrutement", link: "/" },
          {
            menuItem: "Nos filiales",
            isDropdown: true,
            dropdownItems: [
              { menuItem: "Home", link: "#" },
              { menuItem: "Profile", link: "#" },
              { menuItem: "About", link: "#" },
              { menuItem: "Contact", link: "#" },
            ],
          },
        ]}
        socialMediaItems={[
          { icon: FaFacebook, iconSize: 24, iconColor: "#1877F2" },
          { icon: FaTwitter, iconSize: 24, iconColor: "#1DA1F2" },
          { icon: FaInstagram, iconSize: 24, iconColor: "#E4405F" },
        ]}
        footerLogoSource="/logo/akwaLogo.png"
        imageClassename="w-[100px] 2xl:w-[150px]"
      />
    </section>
  );
};

export default Home;
