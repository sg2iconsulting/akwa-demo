import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion, useInView } from "framer-motion";

export const Hero = () => {
  const letters = "Industrie".split("");

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="padding-x ">
      <div
        className="rounded-[82px] bg-cover bg-no-repeat h-[500px] lg:h-[700px] flex flex-col items-center justify-center gap-8 max-container"
        style={{ backgroundImage: "url(/maghriboxygen/maghribbg.png)" }}
      >
        <p className="font-poppins font-bold text-[48px] lg:text-[60px] xl:text-[80px] text-ocean -tracking-widest">
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
          href="/sante"
          className="flex items-center rounded-full justify-center bg-sky h-16 w-16"
        >
          <HiArrowLongRight className="h-9 w-9 text-white" />
        </Link>
      </div>
    </section>
  );
};
