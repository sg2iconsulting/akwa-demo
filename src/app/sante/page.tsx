"use client";
import About from "@/components/About";
import Apps from "@/components/Apps";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import News from "@/components/News";
import React, { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { Wraper } from "@/components/animation/Wraper";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

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
  const letters = "Santé".split("");

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <main className="">
      <Wraper>
        <section className="padding-x ">
          <div
            className="rounded-[82px] bg-cover bg-no-repeat h-[500px] lg:h-[700px] flex flex-col items-center justify-center gap-8 max-container"
            style={{ backgroundImage: "url(/maghriboxygen/maghribbg.png)" }}
          >
            <p className="font-poppins font-bold text-[48px] lg:text-[60px] xl:text-[80px] text-sky -tracking-widest">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.2, duration: 0.3 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </p>

            <Link
              href="/"
              className="flex items-center rounded-full justify-center bg-sky h-16 w-16"
            >
              <HiArrowLongRight className="h-9 w-9 text-white" />
            </Link>
          </div>
        </section>{" "}
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
