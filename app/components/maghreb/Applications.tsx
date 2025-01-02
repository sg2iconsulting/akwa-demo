"use client";
import React from "react";
import { motion } from "framer-motion";
import useInView from "@/app/hook/useView";
import { useMediaQuery } from "react-responsive";
import Application from "./Application";

const Applications = () => {
  const { ref, isInView } = useInView();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const initial = isInView
    ? isMobile
      ? { opacity: 0, y: 25 }
      : { opacity: 0, x: 40 }
    : {};

  const animate = isInView
    ? isMobile
      ? { opacity: 1, y: 0 }
      : { opacity: 1, x: 0 }
    : isMobile
    ? { opacity: 0, y: 25 }
    : { opacity: 0, x: 40 };

  return (
    // <section className="w-full h-full max-w-[2000px] mx-auto flex flex-col gap-4 lg:gap-7 px-5 md:px-10 lg:px-20">
    //   <motion.h2
    //     ref={ref}
    //     initial={initial}
    //     animate={animate}
    //     transition={{ duration: 0.8 }}
    //     className="font-black w-full text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] text-[#0085C3] font-poppins dark:text-white"
    //   >
    //     Applications
    //   </motion.h2>
    //   <div className="flex flex-col sm:flex-row gap-8">
    //     <Application
    //       imgSrc="/maghreb/industrieApp.png"
    //       title="Industrie"
    //       descrip="Pour permettre aux industriels d’optimiser leurs coûts et d’atteindre le niveau de qualité que les produits industriels exigent, Maghreb Oxygène leur apporte des solutions intégrées gaz et soudage."
    //       color="bg-[#0085C3]"
    //     />
    //     <Application
    //       imgSrc="/maghreb/santeApp.png"
    //       title="Santé"
    //       descrip="Maghreb Oxygène produit, conditionne et distribue des gaz médicaux comme l’oxygène médical gazeux ou liquide, le protoxyde d’azote et l’air synthétique, conformément aux spécifications de la pharmacopée Européenne."
    //       color="bg-[#179CAB]"
    //     />
    //   </div>
    // </section>
    <section className="w-full h-full max-w-[2000px] mx-auto flex flex-col gap-4 lg:gap-7 px-5 md:px-10 lg:px-20">
      <motion.h2
        ref={ref}
        initial={initial}
        animate={animate}
        transition={{ duration: 0.8 }}
        className="font-black w-full text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] text-[#0085C3] font-poppins dark:text-white"
      >
        Applications
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Application
          imgSrc="/maghreb/industrieApp.png"
          title="Industrie"
          descrip="Pour permettre aux industriels d’optimiser leurs coûts et d’atteindre le niveau de qualité que les produits industriels exigent, Maghreb Oxygène leur apporte des solutions intégrées gaz et soudage."
          color="bg-[#0085C3]"
        />
        <Application
          imgSrc="/maghreb/santeApp.png"
          title="Santé"
          descrip="Maghreb Oxygène produit, conditionne et distribue des gaz médicaux comme l’oxygène médical gazeux ou liquide, le protoxyde d’azote et l’air synthétique, conformément aux spécifications de la pharmacopée Européenne."
          color="bg-[#179CAB]"
        />
      </div>
    </section>
  );
};

export default Applications;
