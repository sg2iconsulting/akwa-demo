// "use client";
// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import GroupAnimation from "../components/animation/GroupAnimation";
// import ChiffreAnimation from "../components/animation/ChiffreAnimation";
// import CarouselAnimation from "../components/animation/CarouselAnimation";
// import SectionAnimation from "../components/animation/SectionAnimation";
// import ActualityAnimation from "../components/animation/ActualityAnimation";
// import { TbArrowBarToUp } from "react-icons/tb";
// import CarteModal from "../components/CarteModal";

// const Home = () => {
//   const [isModalVisible, setModalVisible] = useState(false);

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setModalVisible(true);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   const scrollToNavbar = () => {
//     const navbarElement = document.getElementById("navbar");
//     if (navbarElement) {
//       navbarElement.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="flex flex-col gap-6 md:gap-10 lg:gap-14 xl:gap-[100px] 2xl:gap-[160px]">
//       <CarteModal isVisible={isModalVisible} onClose={closeModal} imgSrc="" />
//       <section id="navbar">
//         <Navbar />
//       </section>
//       <button
//         onClick={scrollToNavbar}
//         className={`${isModalVisible ? "hidden" : "fixed"} bottom-28 right-4 md:right-8 lg:right-[66px] bg-[#19A0BF] text-white p-2 xl:p-3 rounded-lg shadow-md dark:hover:bg-[#45a6bc] hover:bg-[#052337] transition z-50`}
//       >
//         <TbArrowBarToUp className="md:text-[20px] lg:text-[24px] xl:text-[28px] font-black" />
//       </button>
//       <GroupAnimation />
//       <ChiffreAnimation />
//       <CarouselAnimation
//         slides={[
//           {
//             image: "/akwagroup/images/carburant.png",
//           },
//           {
//             image: "/akwagroup/images/dev.png",
//           },
//           {
//             image: "/akwagroup/images/transition.png",
//           },
//           {
//             image: "/akwagroup/images/fluides.png",
//           },
//           {
//             image: "/akwagroup/images/gaz.png",
//           },
//           {
//             image: "/akwagroup/images/carburant.png",
//           },
//           {
//             image: "/akwagroup/images/immobilier.png",
//           },
//           {
//             image: "/akwagroup/images/dev.png",
//           },
//           {
//             image: "/akwagroup/images/transition.png",
//           },
//           {
//             image: "/akwagroup/images/fluides.png",
//           },
//           {
//             image: "/akwagroup/images/gaz.png",
//           },
//           {
//             image: "/akwagroup/images/immobilier.png",
//           },
//         ]}
//         title="6 Pôles"
//         descrip="diversifiés pour apporter des réponses globales"
//         clrTitle="text-[#0E1B25]"
//         descripTitles="text-[#334C60]"
//         slidesStyle="rounded-lg md:rounded-xl lg:rounded-2xl"
//         navigationClr="bg-black bg-opacity-50 p-3 rounded-full"
//         navigationBg="text-white"
//         hiddenTitle={false}
//       />
//       <div className="mt-5 flex flex-col gap-6 md:gap-10 lg:gap-14 xl:gap-[100px] 2xl:gap-[160px]">
//         <SectionAnimation
//           title="Secteur d'avenir"
//           descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin."
//           imgSrc="/Section/innovationBg.jpeg"
//           spee={false}
//           pub={false}
//         />
//         <SectionAnimation
//           title="Afrique"
//           descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin. "
//           imgSrc="/Section/AfriqueBg.png"
//           spee={false}
//           pub={false}
//         />
//       </div>
//       <ActualityAnimation
//         items={[
//           {
//             imgSrc: "/actuality/actu.jpeg",
//             title: "Nouveau casque protecteur",
//             descrip:
//               "Après avoir étudié les attentes et besoins de nos clients, Afriquia Gaz a décidé de développer un casque protecteur, en rendant la bouteille beaucoup plus pratique, plus ergonomique, plus sécurisée et avec un nouveau design.",
//             date: "23 Decembre 2024",
//             url: "",
//           },
//           {
//             imgSrc: "/actuality/item6.jpeg",
//             title: "Le meilleur de l'entretien",
//             date: "20 Décembre 2024",
//             url: "",
//           },
//           {
//             imgSrc: "/actuality/item2.jpeg",
//             title: "Nous sommes toujours prêts à vous accueillir",
//             date: "15 Décembre 2024",
//             url: "",
//           },
//           {
//             imgSrc: "/actuality/item3.jpeg",
//             title: "Garder votre flotte opérationnelle avec l'entretien speedy",
//             date: "03 Décembre 2024",
//             url: "",
//           },
//           {
//             imgSrc: "/actuality/item4.jpeg",
//             title: "Remplacement 100% utile",
//             date: "19 Octobre 2024",
//             url: "",
//           },
//           {
//             imgSrc: "/actuality/item5.jpeg",
//             title:
//               "Baie dédiée et techniciens experts pour un entretien rapide de votre flotte",
//             date: "12 Octobre 2024",
//             url: "",
//           },
//         ]}
//         btnColor="bg-[#19A0BF]"
//         color="bg-[#052337]"
//         ttlColor="text-[#0E1B25]"
//       />
//       <Footer />
//     </section>
//   );
// };

// export default Home;

"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import GroupAnimation from "../components/animation/GroupAnimation";
import ChiffreAnimation from "../components/animation/ChiffreAnimation";
import CarouselAnimation from "../components/animation/CarouselAnimation";
import SectionAnimation from "../components/animation/SectionAnimation";
import ActualityAnimation from "../components/animation/ActualityAnimation";
import { TbArrowBarToUp } from "react-icons/tb";
import CarteModal from "../components/CarteModal";
import VideoSwiper from "../components/VideoSwiper/VideoSwiper";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import Section from "../components/Section/Section";
import TrendingSlider from "../components/carousel/Carousel";
import Actuality from "../components/actuality/Actuality";

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const menuItems = [
    { label: "Le Groupe", href: "/groupe" },
    { label: "Pôles d’activités", href: "/poles" },
    { label: "Finance", href: "/finance" },
    { label: "Engagements", href: "/engagements" },
  ];

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
      <CarteModal isVisible={isModalVisible} onClose={closeModal} imgSrc="/akwagroup/images/akwaCarte.png" />
      <section id="navbar">
        <Navbar
          menuItems={menuItems}
          SupComponent={VideoSwiper}
          menuItemsTextColor="white"
          buttonBackgroundColor="#19A0BF"
          buttonTextColor="white"
          navbarBackgroundColor=""
          logoSrcUrl="/logo/akwaLogo.png"
          logoSizeStyle={{
            width: "60px",
            "@media (min-width: 768px)": { width: "80px" },
            "@media (min-width: 1024px)": { width: "100px" },
            "@media (min-width: 1536px)": { width: "150px" },
          }}
        />
      </section>
      <button
        onClick={scrollToNavbar}
        className="fixed bottom-28 right-4 md:right-8 lg:right-[66px] bg-[#19A0BF] text-white p-2 xl:p-3 rounded-lg shadow-md dark:hover:bg-[#45a6bc] hover:bg-[#052337] transition z-50"
      >
        <TbArrowBarToUp className="md:text-[20px] lg:text-[24px] xl:text-[28px] font-black" />
      </button>
      <GroupAnimation />
      <ChiffreAnimation />
      <TrendingSlider
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
        title="6 Pôles"
        description="diversifiés pour apporter des réponses globales"
        titleTextColor="#0E1B25"
        descriptionTextColor="#334C60"
        slidesStyle={{
          borderRadius: "12px",
        }}
        navigationIconColor="white"
        navigationStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "8px",
          borderRadius: "50%",
        }}
        hiddenTitle="block"
      />
      <div className="mt-5 flex flex-col gap-6 md:gap-10 lg:gap-14 xl:gap-[100px] 2xl:gap-[160px]">
        <Section
          title="Secteur d'avenir"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin."
          imgSrc="/Section/innovationBg.jpeg"
          textColor="white"
          buttonTextColor="white"
          backgroundStyle={{
            backgroundColor: "black",
            opacity: 0.4,
            borderRadius: "20px",
          }}
          buttonBackgroundColor="#19A0BF"
          backgroundImagePosition="center center"
          containerStyle={{
            borderRadius: "20px",
          }}
        />
        <Section
          title="Afrique"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pellentesque felis. Praesent sed ex quis arcu rhoncus sollicitudin. "
          imgSrc="/Section/AfriqueBg.png"
          textColor="white"
          buttonTextColor="white"
          backgroundStyle={{
            backgroundColor: "black",
            opacity: 0.4,
            borderRadius: "20px",
          }}
          buttonBackgroundColor="#19A0BF"
          backgroundImagePosition="center center"
          containerStyle={{
            borderRadius: "20px",
          }}
        />
      </div>
      <Actuality
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
        backgroundButtonColor="#19A0BF"
        backgroundItemColor="#052337"
        titleTextColor="#0E1B25"
        buttonTextColor="white"
        label="Lire l'article"
      />
      <Footer
        footerItems={[
          { label: "Contact", href: "#" },
          { label: "Condition d'utilisation", href: "#" },
          { label: "Politique de confidentialité", href: "#" },
          { label: "FAQ", href: "#" },
          { label: "Recrutement", href: "#" },
        ]}
        socialMediaItems={[
            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImLinkedin
                  color="white"
                  className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8"
                />
              </a>
            </motion.div>,
          ]
        }
        footerBackgroundColor="#052337"
        footerItemsTextColor="white"
      />
    </section>
  );
};

export default Home;
