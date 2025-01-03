"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/maghreb/Navbar";
import Footer from "../components/maghreb/Footer";
import { motion } from "framer-motion";
import ActualityAnimation from "../components/animation/ActualityAnimation";
import ContactAnimation from "../components/animation/ContactAnimation";
import AboutUsAnimation from "../components/animation/AboutUsAnimation";
import ApplicationsAnimation from "../components/animation/ApplicationsAnimation";
import LastPostsAnimation from "../components/animation/LastPostsAnimation";

const Home = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavbarVisible(entry.isIntersecting);
      },
      { threshold: 0.4 } 
    );

    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
    };
  }, []);

  const balloonVariants = {
    hidden: { y: 1200 },
    visible: {
      y: 0,
      transition: {
        duration: 7,
        ease: "easeOut",
      },
    },
    float: {
      y: [0, -10, 10, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror" as const,
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col gap-6 md:gap-10 lg:gap-20 xl:gap-[100px] 2xl:gap-[130px]">
      <motion.img
        variants={balloonVariants}
        initial="hidden"
        animate="visible"
        whileHover="float"
        className={`fixed right-5 md:right-10 lg:right-20 top-16 md:top-20 1xl:top-28 3xl:top-36 w-[35px] md:w-[45px] lg:w-[65px] xl:w-[95px] 2xl:w-[120px] z-[2000] cursor-pointer transition-opacity duration-250 ease-in-out ${
          isNavbarVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        src="/maghreb/Balloon.png"
        alt="Cute Balloon"
        onClick={scrollToTop}
      />
      <div ref={navbarRef}>
        <Navbar />
      </div>
      <ContactAnimation />
      <AboutUsAnimation />
      <ApplicationsAnimation />
      <ActualityAnimation
        imgSrc={"/actuality/actu.jpeg"}
        btnColor="bg-[#0085C3]"
        color="bg-[#19517D]"
        title="Nouveau casque protecteur"
        ttlColor="text-[#0085C3]"
        descrip="Après avoir étudié les attentes et besoins de nos clients,
                Afriquia Gaz a décidé de développer un casque protecteur, en
                rendant la bouteille beaucoup plus pratique, plus ergonomique,
                plus sécurisée et avec un nouveau design."
        Date={"23 Decembre 2024"}
      />
      <LastPostsAnimation />
      <Footer />
    </section>
  );
};

export default Home;
