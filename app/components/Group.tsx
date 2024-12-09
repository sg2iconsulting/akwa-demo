"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import useInView from "../hook/useView";
import ImagesFadeShow from "./ImagesFadeShow";

const Group = () => {
  const { ref, isInView } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    ["/groupe/image-0.png", "/groupe/image-7.png", "/groupe/image-8.png"],
    ["/groupe/image-1.png", "/groupe/image-9.png", "/groupe/image-10.png"],
    ["/groupe/image-2.png", "/groupe/image-11.png", "/groupe/image-12.png"],
    ["/groupe/image-3.png", "/groupe/image-17.png", "/groupe/image-18.png"],
    ["/groupe/image-4.png", "/groupe/image-15.png", "/groupe/image-16.png"],
    ["/groupe/image-5.png", "/groupe/image-13.png", "/groupe/image-14.png"],
  ];

  const handleCycleComplete = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto h-full">
      <div className="w-full p-5 md:px-10 lg:px-20 h-full">
        <div className="flex flex-col md:flex-row md:justify-between w-full h-full gap-5 md:gap-8 lg:gap-12">
          <div className="flex flex-col md:w-1/2 gap-3 lg:gap-6 xl:gap-10 2xl:gap-12 h-full my-auto">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8 }}
              className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black"
            >
              <h2 className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black text-[#0E1B25] dark:text-white">
                Akwa Group
              </h2>
              <h3 className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium text-[#334C60] dark:text-white">
                une mission nationale
              </h3>
            </motion.div>
            <div className="text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px] flex flex-col gap-2 lg:gap-4 xl:gap-6 text-[#4C4C4C] dark:text-white">
              <p>
                Le Maroc connait aujourd’hui une effervescence en matière de
                projets structurants et s’appuie sur un environnement économique
                en plein essor.
              </p>
              <p>
                AKWA Group, conscient de son rôle dans l’accompagnement du
                développement social et économique marocain, a investi d’autres
                domaines d’activité stratégiques, en parallèle à son métier
                d’origine que sont les hydrocarbures.
              </p>
              <p>
                Aujourd’hui avec l’élargissement progressif de son bouquet
                énergétique et l’augmentation de ses capacités de stockage, le
                Groupe est un acteur incontestable dans le secteur énergétique
                au Maroc.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-[290px] 2xl:h-[67px] text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[22px]"
            >
              voir plus
            </motion.button>
          </div>
          <div className="flex gap-2 w-full h-full md:w-1/2  md:justify-end my-auto">
            <div className="flex flex-col gap-2 h-full">
              <ImagesFadeShow
                imgLinks={images[0]}
                duration={2000}
                isActive={activeIndex === 0}
                onCycleComplete={handleCycleComplete}
              />
              <ImagesFadeShow
                imgLinks={images[1]}
                duration={2000}
                isActive={activeIndex === 1}
                onCycleComplete={handleCycleComplete}
              />
            </div>
            <div className="flex flex-col gap-2 h-full">
              <div className="flex gap-2 w-full h-1/3">
                <ImagesFadeShow
                  imgLinks={images[2]}
                  duration={2000}
                  isActive={activeIndex === 2}
                  onCycleComplete={handleCycleComplete}
                />
                <ImagesFadeShow
                  imgLinks={images[3]}
                  duration={2000}
                  isActive={activeIndex === 3}
                  onCycleComplete={handleCycleComplete}
                />
              </div>
              <ImagesFadeShow
                imgLinks={images[4]}
                duration={2000}
                isActive={activeIndex === 4}
                onCycleComplete={handleCycleComplete}
              />
              <ImagesFadeShow
                imgLinks={images[5]}
                duration={2000}
                isActive={activeIndex === 5}
                onCycleComplete={handleCycleComplete}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Group;
