import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion, useInView } from "framer-motion";

export const Hero = () => {
  const Industrie = "Industrie".split("");
  const Sante = "Santé".split("");

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="padding-x w-full flex items-center justify-center">
      <div className="max-container  flex flex-col md:flex-row gap-6">
        {" "}
        <div
          className="rounded-[82px] bg-cover bg-no-repeat h-[300px] md:h-[400px]  lg:h-[700px] flex flex-col items-center justify-center gap-8 max-container"
          style={{ backgroundImage: "url(/maghriboxygen/heroA.png)" }}
        >
          <p className="font-poppins font-bold text-[48px] md:text-[60px] lg:text-[80px] text-ocean -tracking-widest">
            {Industrie.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 + 1, duration: 0.3 }}
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
        <div
          className="rounded-[82px] bg-cover bg-no-repeat h-[300px] md:h-[400px] lg:h-[700px] flex flex-col items-center justify-center gap-8 max-container"
          style={{ backgroundImage: "url(/maghriboxygen/heroB.png)" }}
        >
          <p className="font-poppins font-bold text-[48px] md:text-[60px] lg:text-[80px] text-sky -tracking-widest">
            {Sante.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 + 1, duration: 0.3 }}
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
      </div>
    </section>
  );
};
