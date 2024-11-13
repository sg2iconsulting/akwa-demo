"use client";
import About from "@/components/About";
import Apps from "@/components/Apps";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import News from "@/components/News";
import React, { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { Wraper } from "@/components/animation/Wraper";
import { useRouter } from "next/navigation";

const fadeInVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

// Fade in on scroll
const Section = ({ children }: { children: ReactNode }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInVariants}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const MaghribOxygen = () => {
  const balloonVariants = {
    hidden: { y: 1000 },
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
        repeatType: "mirror",
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
        className="fixed right-20 top-24 w-[170px] z-[2000] cursor-pointer "
        src="/maghriboxygen/Balloon.png"
        alt="Cute Balloon"
        onClick={scrollToTop}
      ></motion.img>
      <Wraper>
        <Hero />
        <Section>
          <CTA />
        </Section>
        <Section>
          <About />
        </Section>
        <Section>
          <Apps />
        </Section>
        <Section>
          <News />
        </Section>
      </Wraper>
    </main>
  );
};

export default MaghribOxygen;
