"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "../components/maghreb/Navbar";
import Footer from "../components/maghreb/Footer";
import { motion } from "framer-motion";
import ActualityAnimation from "../components/animation/ActualityAnimation";
import ContactAnimation from "../components/animation/ContactAnimation";
import AboutUsAnimation from "../components/animation/AboutUsAnimation";
import ApplicationsAnimation from "../components/animation/ApplicationsAnimation";
import LastPostsAnimation from "../components/animation/LastPostsAnimation";

const Home = () => {
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
  const lastPostRef = useRef(null);
  const isLastPostInView = useInView(lastPostRef);

  return (
    <section className="flex flex-col gap-6 md:gap-10 lg:gap-20 xl:gap-[100px] 2xl:gap-[160px]">
      {" "}
      <motion.img
        variants={balloonVariants}
        initial="hidden"
        animate="visible"
        whileHover="float"
        className={`fixed right-5 md:right-10 xl:right-20  top-24 1xl:top-40 2xl:top-48 w-[35px] md:w-[60px] lg:w-[90px] xl:w-[120px] 2xl:w-[150px] z-[2000] cursor-pointer transition-opacity duration-500 ease-in-out ${
          isLastPostInView ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        src="/maghreb/Balloon.png"
        alt="Cute Balloon"
        onClick={scrollToTop}
      />
      <Navbar />
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
      {/* Add ref to LastPostsAnimation */}
      <div ref={lastPostRef}>
        <LastPostsAnimation />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
