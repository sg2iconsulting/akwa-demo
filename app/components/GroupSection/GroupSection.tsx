"use client";
import React from "react";
import { motion } from "framer-motion";
import useInView from "../../../hook/useView";
import ImagesFadeShow from "../ImagesFadeShow";
import { useMediaQuery } from "react-responsive";

export interface GroupSectionProps {
  images: string[][];
  title: string;
  titleTextColor: string;
  secondTitle: string;
  secondTitleTextColor: string;
  description?: string;
  descriptionTextColor: string;
  buttonTextColor: string;
  buttonBackgroundColor: string;
  paragraphs: string[];
}

const Group = ({
  images,
  title,
  titleTextColor,
  secondTitle,
  secondTitleTextColor,
  descriptionTextColor,
  buttonTextColor,
  buttonBackgroundColor,
  paragraphs = [
    "Le Maroc connait aujourd’hui une effervescence en matière de projets structurants et s’appuie sur un environnement économique en plein essor.",
    "AKWA Group, conscient de son rôle dans l’accompagnement du développement social et économique marocain, a investi d’autres domaines d’activité stratégiques, en parallèle à son métier d’origine que sont les hydrocarbures.",
    "Aujourd’hui avec l’élargissement progressif de son bouquet énergétique et l’augmentation de ses capacités de stockage, le Groupe est un acteur incontestable dans le secteur énergétique au Maroc.",
  ],
}: GroupSectionProps) => {
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
    <section className="font-poppins w-full max-w-[2000px] mx-auto h-full">
      <div className="w-full p-5 md:px-10 lg:px-20 h-full">
        <div className="flex flex-col md:flex-row md:justify-between w-full h-full gap-5 md:gap-8 lg:gap-12">
          <div className="flex flex-col md:w-1/2 gap-3 lg:gap-6 xl:gap-10 2xl:gap-12 h-full my-auto">
            <motion.div
              ref={ref}
              initial={initial}
              animate={animate}
              transition={{ duration: 0.8 }}
              className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black"
            >
              <h2
                style={{
                  color: titleTextColor || "black",
                }}
                className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black dark:text-white"
              >
                {title}
              </h2>
              <h3
                style={{
                  color: secondTitleTextColor || "black",
                }}
                className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium dark:text-white"
              >
                {secondTitle}
              </h3>
            </motion.div>
            <div
              style={{
                color: descriptionTextColor || "black",
              }}
              className="text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] flex flex-col gap-2 lg:gap-4 xl:gap-6 dark:text-white"
            >
              {paragraphs.map((paragraph, index) => (
                <p key={index} style={{ color: descriptionTextColor }}>
                  {paragraph}
                </p>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                color: buttonTextColor || "white",
                backgroundColor: buttonBackgroundColor || "red",
              }}
              className="w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px] font-bold rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px]"
            >
              voir plus
            </motion.button>
          </div>
          <div className="flex gap-2 w-full h-full md:w-1/2 md:justify-end my-auto">
            <div className="flex flex-col gap-2 h-full">
              <div className="w-full max-w-[488.87px] h-auto aspect-[488.87/266.99] overflow-hidden">
                <ImagesFadeShow imgLinks={images[0]} duration={6000} />
              </div>
              <div className="w-full max-w-[488.87px] h-auto aspect-[488.87/325.92] overflow-hidden">
                <ImagesFadeShow imgLinks={images[1]} duration={6000} />
              </div>
            </div>

            <div className="flex flex-col gap-2 h-full">
              <div className="flex gap-2 w-full h-1/3 xl:mb-[2px] 2xl:mb-[4px]">
                <div className="w-full max-w-[174.6px] h-auto aspect-square overflow-hidden">
                  <ImagesFadeShow imgLinks={images[2]} duration={6000} />
                </div>
                <div className="w-full max-w-[174.6px] h-auto aspect-square overflow-hidden">
                  <ImagesFadeShow imgLinks={images[3]} duration={6000} />
                </div>
              </div>
              <div className="w-full max-w-[363.02px] h-auto aspect-[363.02/196.42] overflow-hidden">
                <ImagesFadeShow imgLinks={images[4]} duration={6000} />
              </div>
              <div className="w-full max-w-[363.02px] h-auto aspect-[363.02/205.15] overflow-hidden">
                <ImagesFadeShow imgLinks={images[5]} duration={6000} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Group;
