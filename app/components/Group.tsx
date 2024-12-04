import React from "react";
import { motion } from "framer-motion";

const Group = () => {
  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto h-full">
      <div className="w-full p-5 md:px-10 lg:px-20 h-full">
        <div className="flex flex-col md:flex-row md:justify-between w-full h-full gap-5 md:gap-8 lg:gap-12">
          <div className="flex flex-col md:w-1/2 gap-3 lg:gap-6 xl:gap-10 2xl:gap-12 h-full my-auto">
            <div className="flex flex-col">
              <h1 className="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[50px] font-black">
                Akwa Group
              </h1>
              <h3 className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium">
                une mission nationale
              </h3>
            </div>
            <div className="text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[20px] flex flex-col gap-2 lg:gap-4 xl:gap-6">
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
              className="w-28 h-7 md:w-36 md:h-10 xl:w-40 xl:h-12 2xl:w-48 2xl:h-16 text-white font-bold bg-[#19A0BF] rounded-full text-[10px] md:text-[12px] xl:text-[16px] 2xl:text-[20px]"
            >
              voir plus
            </motion.button>
          </div>
          <div className="flex gap-2 w-full h-full md:w-1/2  md:justify-end my-auto">
            <div className="flex flex-col gap-2 h-full">
              <div>
                <img src="/groupe/image-0.png" />
              </div>
              <div>
                <img src="/groupe/image-1.png" />
              </div>
            </div>
            <div className="flex flex-col gap-2 h-full">
              <div className="flex gap-2 w-full h-1/3">
                <div>
                  <img src="/groupe/image-2.png" />
                </div>
                <div>
                  <img src="/groupe/image-3.png" />
                </div>
              </div>
              <div className="w-full h-1/3">
                <img src="/groupe/image-4.png" />
              </div>
              <div className="w-full h-1/3">
                <img src="/groupe/image-5.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Group;
