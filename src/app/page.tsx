"use client";
import About from "@/components/About";
import Apps from "@/components/Apps";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import News from "@/components/News";
import React, { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { Wraper } from "@/components/animation/Wraper";

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
  return (
    <main className="">
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
