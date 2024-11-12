import React from "react";
import { motion } from "framer-motion";

export const CTA = () => {
  const phoneNumber = "05 22 35 22 22".split("");

  return (
    <section className="padding-x padding-t flex items-center justify-center max-lg:hidden">
      <div
        className="rounded-[24px] flex items-center justify-evenly max-container py-12"
        style={{
          backgroundImage: "url(/maghriboxygen/CTAbg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="text-[24px] xl:text-[36px] text-white font-poppins tracking-tighter font-medium flex-nowrap whitespace-nowrap">
          Trouver le dépositaire le plus près de chez vous en contactant le{" "}
          {phoneNumber.map((digit, index) => (
            <motion.span
              key={index}
              animate={{
                color: ["#FFFFFF", "#0085C3", "#FFFFFF"],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 2,
                delay: index * 0.1,
              }}
              className="text-[24px] xl:text-[36px] font-poppins tracking-tighter font-bold"
            >
              {digit}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
};
