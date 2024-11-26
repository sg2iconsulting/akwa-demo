"use client";
import About from "@/components/maghribOxygen/About";
import Apps from "@/components/maghribOxygen/Apps";
import { CTA } from "@/components/maghribOxygen/CTA";
import { Hero } from "@/components/maghribOxygen/Hero";
import News from "@/components/maghribOxygen/News";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

import useInView from "@/hooks/isInView";
import Carousel from "@/components/carousel/Carousel";

// Fade in on scroll
const Section = ({ children }: { children: ReactNode }) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const MaghribOxygen = () => {
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
    <main className="">
      <motion.img
        variants={balloonVariants}
        initial="hidden"
        animate="visible"
        whileHover="float"
        className="fixed right-20 top-24 w-[170px] z-[2000] cursor-pointer hidden"
        src="/maghriboxygen/Balloon.png"
        alt="Cute Balloon"
        onClick={scrollToTop}
      ></motion.img>
      <Section>
        <Hero />
      </Section>
      <Section>
        <CTA />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Apps />
      </Section>
      {/* <Section>
        <Carousel />
      </Section> */}
      <Section>
        <News />
      </Section>
    </main>
  );
};

export default MaghribOxygen;
