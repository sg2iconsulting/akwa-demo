import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const Apps = () => {
  return (
    <section className="padding-x flex flex-col items-center justify-center">
      <div className="max-container">
        <div className="text-sky font-extrabold text-[36px] md:text-[48px] lg:text-[60px] mb-6">
          Applications
        </div>

        <div
          className="rounded-[54px] max-md:bg-none md:bg-cover md:bg-no-repeat w-full min-h-[500px] lg:min-h-[700px] flex flex-col xl:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-24 md:py-12 md:px-6 lg:px-16 xl:px-24"
          style={{ backgroundImage: "url(/maghriboxygen/apps.png)" }}
        >
          {/* Card Industrie */}
          <motion.div
            className="flex flex-col gap-8 rounded-[50px] text-start bg-white shadow-[0_0_50px_0_rgba(0,0,0,0.1)] w-full p-6 max-w-[650px] min-h-[650px] hover:scale-105 hover:shadow-xl transition-all duration-300"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.6 } },
            }}
          >
            <div className="text-sky font-semibold text-[36px]">Industrie</div>
            <p className="text-[#4C4C4C] text-justify text-xl min-h-[550px]">
              Pour permettre aux industriels d'optimiser leurs coûts et
              d'atteindre le niveau de qualité que les produits Industriels
              exigent, Maghreb Oxygène leur apporte des solutions intégrées gaz
              et soudage.
              <br />
              <br />
              L'utilisation de gaz dans les process industriels s'étant
              considérablement accrue, Maghreb Oxygène maîtrise un grand nombre
              d'applications afin de mieux satisfaire les exigences techniques
              spécifiques à chaque client.
              <br />
              <br />
              Outre la fourniture de gaz et de mélanges propres à chaque
              application, Maghreb Oxygène intervient dans l'ingénierie de
              conception et d'installation de stockage de gaz industriels sous
              forme liquide ou gazeuse (oxygène, acétylène, hydrogène, gaz
              carbonique, hélium,…).
            </p>
            <div className="flex items-center justify-start">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="flex items-center justify-center rounded-full bg-sky h-16 w-16"
              >
                <HiArrowLongRight className="h-9 w-9 text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Card Sante */}
          <motion.div
            className="flex flex-col gap-8 rounded-[50px] text-start bg-white shadow-[0_0_50px_0_rgba(0,0,0,0.1)] w-full p-6 max-w-[650px] min-h-[650px] hover:scale-105 hover:shadow-xl transition-all duration-300"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.6 } },
            }}
          >
            <div className="text-[#179CAB] font-semibold text-[36px]">
              Santé
            </div>
            <p className="text-[#4C4C4C] text-justify text-xl min-h-[550px]">
              Maghreb Oxygène produit, conditionne et distribue des gaz médicaux
              comme l'oxygène médical gazeux ou liquide, le protoxyde d'azote et
              l'air synthétique, conformément aux spécifications de la
              pharmacopée Européenne.
              <br />
              <br />
              Pour faire face aux multiples mutations et évolutions des
              techniques de diagnostic et de thérapie, Maghreb Oxygène fournit,
              outre les gaz médicaux traditionnels, de nouveaux produits adaptés
              aux traitements thérapeutiques (monoxyde d'azote, gaz
              carbonique,…).
            </p>
            <div className="flex items-center justify-start">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="flex items-center justify-center rounded-full bg-sky h-16 w-16"
              >
                <HiArrowLongRight className="h-9 w-9 text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Apps;
